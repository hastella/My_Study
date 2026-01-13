import Link from "next/link";
import { Post } from "@/lib/posts";

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  const getCategoryColor = (categories?: string[]) => {
    if (!categories || categories.length === 0) return "bg-gray-500";

    const category = categories[0];
    switch (category.toLowerCase()) {
      case "frontend":
      case "javascript":
        return "bg-yellow-500";
      case "react":
        return "bg-blue-500";
      case "vue":
        return "bg-green-500";
      case "html":
      case "css":
        return "bg-pink-500";
      default:
        return "bg-purple-500";
    }
  };

  const getCategoryName = (categories?: string[]) => {
    if (!categories || categories.length === 0) return "웹개발";

    const category = categories[0];
    switch (category.toLowerCase()) {
      case "frontend":
        return "프론트엔드";
      case "javascript":
        return "JavaScript";
      case "react":
        return "React";
      case "vue":
        return "Vue.js";
      case "html":
        return "HTML";
      case "css":
        return "CSS";
      default:
        return category;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="card group cursor-pointer fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <span
              className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getCategoryColor(
                post.categories
              )}`}
            >
              {getCategoryName(post.categories)}
            </span>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--secondary)] transition-colors group"
          >
            더 읽기
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
