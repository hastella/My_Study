'use client';

import Link from 'next/link';
import Hero from '@/components/hero';
import PostGrid from '@/components/post-grid';

// 임시 데이터 - 실제로는 서버에서 가져와야 함
const samplePosts = [
  {
    slug: '2023-09-01-what-is-program',
    title: '프로그램이란 무엇인가? - 프로그래머의 고민',
    date: '2023-09-01',
    publishedAt: '2023-09-01',
    excerpt: '프로그램의 본질에 대해 고민하며, 효율적인 메모리 사용과 코드 설계에 대한 생각을 정리합니다.',
    categories: ['programming'],
    tags: ['프로그래밍', '프로그램', '컴퓨터과학'],
    content: '프로그램의 정의와 프로그래머의 고민에 대해...'
  },
  {
    slug: '2023-09-02-browser-rendering-skeleton',
    title: '브라우저는 어떻게 웹 펨지를 그릴까? - 렌더링과 스켈레톤',
    date: '2023-09-02',
    publishedAt: '2023-09-02',
    excerpt: '브라우저 주소창부터 최종 렌더링까지의 과정을 이해하고, 사용자 경험을 향상시키는 스켈레톤 UI에 대해 알아봅니다.',
    categories: ['frontend'],
    tags: ['브라우저', '렌더링', 'DOM', 'CSSOM'],
    content: '브라우저 렌더링 과정과 스켈레톤 UI에 대해...'
  },
  {
    slug: '2023-09-03-http-rest-api-get-post',
    title: 'HTTP vs HTTPS, REST API 완벽 이해 - 웹 통신의 기초',
    date: '2023-09-03',
    publishedAt: '2023-09-03',
    excerpt: 'HTTP와 HTTPS의 차이, REST API의 개념과 CRUD 작업, GET과 POST 메소드의 차이점을 깊이 있게 이해합니다.',
    categories: ['network'],
    tags: ['HTTP', 'HTTPS', 'REST API', 'GET', 'POST'],
    content: 'HTTP/HTTPS 차이와 REST API에 대해...'
  },
  {
    slug: '2023-09-04-oop-stack-queue',
    title: '객체지향 프로그래밍의 세계 - OOP와 자료구조 이해',
    date: '2023-09-04',
    publishedAt: '2023-09-04',
    excerpt: '객체지향 프로그래밍의 핵심 개념과 스택/큐 자료구조의 차이점을 이해하고 실무 적용 방법을 알아봅니다.',
    categories: ['programming'],
    tags: ['객체지향프로그래밍', 'OOP', '스택', '큐'],
    content: '객체지향 프로그래밍과 자료구조에 대해...'
  },
  {
    slug: '2023-09-05-system-architecture-concepts',
    title: '시스템 아키텍처의 이해 - 프로세스, 렌더링, 마이크로서비스',
    date: '2023-09-05',
    publishedAt: '2023-09-05',
    excerpt: '프로세스와 스레드의 차이, CSR/SSR/SPA/MPA의 개념, 그리고 MSA와 CI/CD까지 시스템 아키텍처의 핵심 개념들을 정리합니다.',
    categories: ['system'],
    tags: ['프로세스', '스레드', 'CSR', 'SSR', 'MSA'],
    content: '시스템 아키텍처의 핵심 개념들에 대해...'
  }
];

export default function HomePage() {
  const featuredPosts = samplePosts.slice(0, 6);
  const recentPosts = samplePosts.slice(0, 9);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts Section */}
      <section id="featured" className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* 섹션 헤더 */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                📚 추천 포스트
              </h2>
              <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
                프론트엔드 개발의 핵심 개념부터 실전 기술까지,
                체계적으로 정리한 콘텐츠들을 만나보세요.
              </p>
            </div>

            {/* Featured Posts Grid */}
            <PostGrid posts={featuredPosts} maxPosts={6} />
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 bg-[var(--muted)]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* 섹션 헤더 */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">
                  📰 최신 포스트
                </h2>
                <p className="text-[var(--foreground)]/70">
                  최근 작성된 글들을 확인해보세요
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--primary)]/80 transition-colors"
              >
                모든 포스트 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Recent Posts Grid */}
            <PostGrid posts={recentPosts} maxPosts={9} showExcerpt={false} />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              🏷️ 카테고리별 탐색
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 mb-12">
              관심 있는 분야의 콘텐츠를 찾아보세요
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: '프론트엔드', slug: 'frontend', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
                { name: 'JavaScript', slug: 'javascript', icon: '🟨', color: 'from-yellow-500 to-orange-500' },
                { name: 'React', slug: 'react', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
                { name: '프로그래밍', slug: 'programming', icon: '💻', color: 'from-purple-500 to-pink-500' },
                { name: '네트워크', slug: 'network', icon: '🌐', color: 'from-teal-500 to-green-500' },
                { name: '시스템', slug: 'system', icon: '⚙️', color: 'from-gray-500 to-gray-600' },
                { name: 'Vue.js', slug: 'vue', icon: '💚', color: 'from-green-500 to-emerald-500' },
                { name: '모든 글', slug: 'all', icon: '📚', color: 'from-indigo-500 to-purple-500' }
              ].map((category) => (
                <Link
                  key={category.slug}
                  href={category.slug === 'all' ? '/blog' : `/categories/${category.slug}`}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white text-center hover:scale-105 transition-transform duration-200 shadow-lg`}>
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h3 className="font-bold text-lg">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 함께 성장하는 여정
            </h2>
            <p className="text-lg mb-8 opacity-90">
              프론트엔드 개발의 최신 트렌드와 실전 노하우를 공유합니다.<br />
              꾸준한 학습과 성장의 가치를 믿는 개발자들과 함께하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                📖 블로그 둘러보기
              </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
            🔝 맨 위로
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
