import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import MarkdownContent from '@/components/markdown-content'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, '')
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  return {
    title: `${post.title} | My Study Notes`,
    description: post.excerpt,
  }
}

export default function PostPage({ params }: PostPageProps) {
  let post;
  let errorMessage = '';

  try {
    post = getPostBySlug(params.slug);
  } catch (error) {
    errorMessage = `Error loading post: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }

  if (errorMessage || !post) {
    return (
      <div className="min-h-screen pt-20 pb-20">
        <div className="container max-w-4xl">
          <div className="p-8 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">⚠️ 포스트를 불러올 수 없습니다</h1>
            <p className="mb-4">Slug: {params.slug}</p>
            <p className="mb-4">Error: {errorMessage}</p>
            <div className="text-sm">
              <p>가능한 slugs:</p>
              <ul className="mt-2">
                <li>2026-01-13-typescript-기초부터-고급까지</li>
                <li>2024-01-17-vue-basics</li>
                <li>2024-01-16-react-basics</li>
                <li>2024-01-15-javascript-basics</li>
                <li>2024-01-14-html-css-basics</li>
                <li>2024-01-13-web-basics</li>
              </ul>
            </div>
            <a href="/blog" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              블로그 목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    );
  }

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
          {post.content ? (
            <MarkdownContent content={post.content} />
          ) : (
            <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
              ⚠️ 마크다운 콘텐츠를 불러올 수 없습니다.
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">
                Debug: content length = {post.content?.length || 0}
                <br />
                Title: {post.title}
                <br />
                Slug: {params.slug}
              </pre>
            </div>
          )}
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
  );
}
