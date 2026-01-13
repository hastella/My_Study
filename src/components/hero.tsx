"use client";

export default function Hero() {
  const scrollToFeatured = () => {
    document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            프론트엔드 개발 성장 기록
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--foreground)] mb-6 leading-tight">
            My Study
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Notes
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--foreground)]/70 mb-8 leading-relaxed max-w-3xl mx-auto">
            프론트엔드 개발자로서의 성장 과정을 기록하고 공유하는 공간입니다
          </p>

          <p className="text-lg text-[var(--foreground)]/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            안녕하세요! 프론트엔드 개발 공부를 하며 정리한 내용들을 공유하려고
            합니다. 지속적인 학습과 성장의 여정을 함께 나누고 싶습니다.
          </p>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToFeatured}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            추천 포스트 보기
          </button>

          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] font-semibold rounded-xl hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            모든 글 보기
          </a>
        </div>

        {/* 통계 정보 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--foreground)] mb-2">
              {new Date().getFullYear() - 2023 + 1}
            </div>
            <div className="text-sm text-[var(--foreground)]/60">
              년차 개발자
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--foreground)] mb-2">
              10+
            </div>
            <div className="text-sm text-[var(--foreground)]/60">
              작성한 포스트
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--foreground)] mb-2">
              ∞
            </div>
            <div className="text-sm text-[var(--foreground)]/60">학습 의지</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--foreground)] mb-2">
              24/7
            </div>
            <div className="text-sm text-[var(--foreground)]/60">공부 시간</div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--foreground)]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--foreground)]/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
