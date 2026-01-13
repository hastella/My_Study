import { getPostBySlug } from '@/lib/posts'
import MarkdownContent from '@/components/markdown-content'

export const metadata = {
  title: 'TypeScript 기초부터 고급까지 | My Study Notes',
  description: 'TypeScript의 핵심 개념과 실전 활용법을 배워보자',
}

export default function TypeScriptBasicsPage() {
  const post = getPostBySlug('2026-01-13-typescript-기초부터-고급까지')

  return (
    <div className="min-h-screen pt-20 pb-20">
      <article className="container max-w-4xl">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            {post.categories?.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-[var(--primary)] text-white text-sm font-medium rounded-full"
              >
                {category}
              </span>
            ))}
            <time className="text-gray-500 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)] leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MarkdownContent content={post.content} />
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-[var(--border)]">
          <a
            href="/blog"
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--secondary)] transition-colors font-medium"
          >
            ← 블로그 목록으로 돌아가기
          </a>
        </nav>
      </article>
    </div>
  )
}
