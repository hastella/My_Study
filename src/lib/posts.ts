import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { execSync } from "child_process";

export interface Post {
  slug: string;
  title: string;
  date: string;
  publishedAt: string; // Git 커밋 날짜
  excerpt: string;
  content: string;
  categories?: string[];
  tags?: string[];
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

// Git 커밋 날짜를 가져오는 함수
function getGitCommitDate(filePath: string): string | null {
  try {
    // git log --follow --format=%ai --date=iso -1 [파일경로]
    const gitCommand = `git log --follow --format=%ai --date=iso -1 -- "${filePath}"`;
    const result = execSync(gitCommand, { encoding: "utf-8" }).trim();

    if (result) {
      // ISO 날짜 형식에서 날짜 부분만 추출 (YYYY-MM-DD)
      return result.split(" ")[0];
    }
  } catch (error) {
    // Git 커밋 정보를 가져올 수 없는 경우 조용히 처리
    // console.warn(`Could not get git commit date for ${filePath}:`, error)
  }

  // Git 정보를 가져올 수 없는 경우 null 반환
  return null;
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");

  // Special slug mapping for posts with problematic filenames
  const slugMapping: Record<string, string> = {
    'typescript-basics': '2026-01-13-typescript-기초부터-고급까지'
  };

  const actualSlug = slugMapping[realSlug] || realSlug;
  const fullPath = path.join(postsDirectory, `${actualSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // 우선순위: Git 커밋 날짜 > front matter date > 현재 날짜
  let publishedAt =
    getGitCommitDate(fullPath) ||
    data.date ||
    new Date().toISOString().split("T")[0];

  // publishedAt이 string이 아닌 경우 처리
  if (publishedAt instanceof Date) {
    publishedAt = publishedAt.toISOString().split("T")[0];
  }

  // front matter의 date가 Date 객체인 경우 string으로 변환
  let frontMatterDate = data.date;
  if (frontMatterDate instanceof Date) {
    frontMatterDate = frontMatterDate.toISOString().split("T")[0];
  }

  return {
    slug: realSlug,
    title: data.title || "",
    date: frontMatterDate || publishedAt, // 표시용 날짜
    publishedAt: publishedAt, // 정렬용 발행일 (Git 커밋 날짜 우선)
    excerpt: data.excerpt || content.slice(0, 200) + "...",
    content,
    categories: Array.isArray(data.categories)
      ? data.categories
      : data.categories
      ? [data.categories]
      : [],
    tags: data.tags || [],
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1)); // Git 커밋 날짜 기준 정렬

  return posts;
}

export async function getPosts(limit?: number): Promise<Post[]> {
  const posts = getAllPosts();
  return limit ? posts.slice(0, limit) : posts;
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.categories?.includes(category));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.categories?.forEach((category) => categories.add(category));
  });

  return Array.from(categories);
}

// 특정 기간의 포스트 가져오기
export function getPostsByDateRange(
  startDate: string,
  endDate: string
): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => {
    const postDate = post.publishedAt;
    return postDate >= startDate && postDate <= endDate;
  });
}

// 최근 N개월의 포스트 가져오기
export function getRecentPosts(months: number = 3): Post[] {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth() - months, 1);
  const startDateString = startDate.toISOString().split("T")[0];

  const posts = getAllPosts();
  return posts.filter((post) => post.publishedAt >= startDateString);
}
