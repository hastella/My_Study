import Link from "next/link";
import { Post } from "@/lib/posts";

interface PostGridProps {
  posts: Post[];
  showExcerpt?: boolean;
  maxPosts?: number;
}

export default function PostGrid({
  posts,
  showExcerpt = true,
  maxPosts,
}: PostGridProps) {
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
      case "programming":
        return "bg-indigo-500";
      case "network":
        return "bg-teal-500";
      case "system":
        return "bg-orange-500";
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
      case "programming":
        return "프로그래밍";
      case "network":
        return "네트워크";
      case "system":
        return "시스템";
      default:
        return category;
    }
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes}분`;
  };

  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayPosts.map((post, index) => (
        <article
          key={post.slug}
          className="group bg-[var(--card-bg)] border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* 썸네일 영역 */}
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="text-white text-4xl opacity-80">
                {getCategoryName(post.categories) === "프론트엔드" && "⚛️"}
                {getCategoryName(post.categories) === "JavaScript" && "🟨"}
                {getCategoryName(post.categories) === "React" && "⚛️"}
                {getCategoryName(post.categories) === "Vue.js" && "💚"}
                {getCategoryName(post.categories) === "프로그래밍" && "💻"}
                {getCategoryName(post.categories) === "네트워크" && "🌐"}
                {getCategoryName(post.categories) === "시스템" && "⚙️"}
                {![
                  "프론트엔드",
                  "JavaScript",
                  "React",
                  "Vue.js",
                  "프로그래밍",
                  "네트워크",
                  "시스템",
                ].includes(getCategoryName(post.categories)) && "📚"}
              </span>
            </div>
            {/* 카테고리 배지 */}
            <div className="absolute top-3 left-3">
              <span
                className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${getCategoryColor(
                  post.categories
                )}`}
              >
                {getCategoryName(post.categories)}
              </span>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="p-6">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-3 leading-tight">
                {post.title}
              </h3>
            </Link>

            {showExcerpt && (
              <p className="text-[var(--foreground)]/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* 메타 정보 */}
            <div className="flex items-center justify-between text-xs text-[var(--foreground)]/60">
              <div className="flex items-center space-x-3">
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {getReadingTime(post.content)} 읽기
                </span>
                <time className="flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            {/* 태그들 */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-[var(--muted)] text-[var(--foreground)]/60 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-[var(--muted)] text-[var(--foreground)]/60 rounded-md">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
