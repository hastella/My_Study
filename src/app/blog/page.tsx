export default function BlogPage() {
  const posts = [
    {
      title: 'TypeScript 기초부터 고급까지',
      slug: 'typescript-basics',
      excerpt: 'TypeScript의 핵심 개념과 실전 활용법을 배워보자',
      date: '2026-01-13',
      categories: ['typescript', 'javascript']
    },
    {
      title: 'Vue.js 기초부터 실전까지',
      slug: 'vue-basics',
      excerpt: 'Vue.js의 기본 개념부터 실전 적용까지',
      date: '2024-01-17',
      categories: ['vue', 'javascript']
    },
    {
      title: 'React 기초부터 실전까지',
      slug: 'react-basics',
      excerpt: 'React의 기본 개념과 실전 활용법',
      date: '2024-01-16',
      categories: ['react', 'javascript']
    }
  ]

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">📚 블로그</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-2">
              {post.categories.map((category) => (
                <span key={category} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {category}
                </span>
              ))}
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </a>
            </h2>

            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <a href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
              더 읽기 →
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:text-blue-800">← 홈으로 돌아가기</a>
      </div>
    </div>
  )
}