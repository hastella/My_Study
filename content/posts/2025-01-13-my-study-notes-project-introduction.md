---
title: "My Study Notes 프로젝트 소개 - Next.js로 만든 기술 블로그"
date: "2025-01-13"
categories: ["frontend", "nextjs"]
tags: ["Next.js", "TypeScript", "Tailwind CSS", "블로그", "개발", "프로젝트"]
excerpt: "개인 기술 블로그를 Next.js와 TypeScript로 구축한 경험과 프로젝트 구조, 기능들을 소개합니다."
---

# My Study Notes 프로젝트 소개 - Next.js로 만든 기술 블로그

안녕하세요! 오늘은 제 개인 기술 블로그인 **My Study Notes** 프로젝트에 대해 소개하려고 합니다. 프론트엔드 개발자로서의 성장 과정을 기록하고 공유하기 위해 만든 이 블로그는 단순한 기록 공간 그 이상의 의미를 가지고 있습니다.

## 🚀 프로젝트 개요

<div class="card mb-8">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">🚀</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">현대적인 기술 블로그</h3>
  </div>
  <p class="text-[var(--foreground)]/80 mb-4">
    이 블로그는 <strong>Next.js 13 App Router</strong>와 <strong>TypeScript</strong>를 기반으로 구축된 현대적인 기술 블로그입니다.
    깔끔한 UI와 뛰어난 개발 경험을 제공하는 것을 목표로 하여 만들어졌습니다.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-[var(--muted)] p-4 rounded-lg">
      <h4 class="font-semibold text-[var(--foreground)] mb-2">주요 기술 스택</h4>
      <ul class="space-y-1 text-sm text-[var(--foreground)]/70">
        <li>• <strong>Framework</strong>: Next.js 13 (App Router)</li>
        <li>• <strong>Language</strong>: TypeScript</li>
        <li>• <strong>Styling</strong>: Tailwind CSS</li>
        <li>• <strong>Content</strong>: Markdown (Gray Matter 파싱)</li>
        <li>• <strong>Deployment</strong>: Vercel / Netlify</li>
        <li>• <strong>Theme</strong>: next-themes (다크/라이트 모드)</li>
      </ul>
    </div>

    <div class="bg-[var(--muted)] p-4 rounded-lg">
      <h4 class="font-semibold text-[var(--foreground)] mb-2">핵심 특징</h4>
      <ul class="space-y-1 text-sm text-[var(--foreground)]/70">
        <li>• ⚡ 빠른 성능 및 SEO 최적화</li>
        <li>• 📱 완전한 반응형 디자인</li>
        <li>• 🌙 자동 다크/라이트 모드</li>
        <li>• 🎨 모던한 UI/UX</li>
        <li>• 🔍 검색 엔진 친화적</li>
      </ul>
    </div>
  </div>
</div>

## 📁 프로젝트 구조

<div class="card mb-8">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">📁</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">깔끔한 아키텍처</h3>
  </div>

  <div class="bg-[var(--muted)] p-6 rounded-lg font-mono text-sm mb-4">
    <pre class="text-[var(--foreground)]/80">my-study-blog/
├── content/posts/          # 마크다운 포스트들
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── blog/          # 블로그 페이지들
│   │   └── page.tsx       # 메인 페이지
│   ├── components/        # React 컴포넌트들
│   └── lib/               # 유틸리티 함수들
├── scripts/               # 자동화 스크립트들
└── styles/                # 글로벌 스타일</pre>
  </div>

  <p class="text-[var(--foreground)]/80">
    이 구조는 <strong>Next.js의 App Router</strong>를 최대한 활용하면서도 유지보수가 쉽도록 설계되었습니다.
    각 폴더의 역할이 명확하게 분리되어 있어 새로운 기능을 추가하기에도 용이합니다.
  </p>
</div>

## 🛠️ 개발 환경 및 워크플로우

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

  <div class="card">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white text-lg">⚡</span>
      </div>
      <h3 class="text-lg font-bold text-[var(--foreground)]">빠른 시작하기</h3>
    </div>

    <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-3">
      <div class="text-green-400"># 의존성 설치</div>
      <div class="text-blue-400">$ npm install</div>
      <br>
      <div class="text-green-400"># 개발 서버 실행</div>
      <div class="text-blue-400">$ npm run dev</div>
    </div>

    <p class="text-[var(--foreground)]/70 text-sm">
      이렇게 간단한 명령어로 로컬 개발 환경을 구축할 수 있습니다.
    </p>
  </div>

  <div class="card">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white text-lg">✍️</span>
      </div>
      <h3 class="text-lg font-bold text-[var(--foreground)]">포스트 작성</h3>
    </div>

    <div class="space-y-3">
      <div>
        <h4 class="font-semibold text-[var(--foreground)] mb-2">자동 생성 스크립트 (권장)</h4>
        <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs">
          <div class="text-blue-400">$ npm run create-post "포스트 제목"</div>
          <div class="text-blue-400">$ npm run create-post "React 기초" "react,javascript"</div>
        </div>
      </div>

      <div>
        <h4 class="font-semibold text-[var(--foreground)] mb-2">수동 생성</h4>
        <div class="bg-[var(--muted)] p-3 rounded font-mono text-xs">
          <div class="text-[var(--foreground)]/70">---</div>
          <div class="text-[var(--foreground)]/70">title: "포스트 제목"</div>
          <div class="text-[var(--foreground)]/70">categories: ["javascript"]</div>
          <div class="text-[var(--foreground)]/70">---</div>
        </div>
      </div>
    </div>
  </div>

</div>

## 📅 스마트한 발행일 관리

<div class="card mb-8">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">📅</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">Git 기반 발행일 자동화</h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 class="font-semibold text-[var(--foreground)] mb-3">발행일 우선순위</h4>
      <div class="space-y-2">
        <div class="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <span class="w-6 h-6 bg-green-500 text-white text-xs rounded-full flex items-center justify-center mr-3">1</span>
          <span class="text-[var(--foreground)]/80 font-medium">Git 커밋 날짜</span>
        </div>
        <div class="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <span class="w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center mr-3">2</span>
          <span class="text-[var(--foreground)]/80">Front matter date</span>
        </div>
        <div class="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span class="w-6 h-6 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center mr-3">3</span>
          <span class="text-[var(--foreground)]/80">현재 날짜</span>
        </div>
      </div>
    </div>

    <div>
      <h4 class="font-semibold text-[var(--foreground)] mb-3">발행일 업데이트</h4>
      <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
        <div class="text-green-400"># 기존 포스트들 업데이트</div>
        <div class="text-blue-400">$ npm run update-posts</div>
      </div>
      <p class="text-[var(--foreground)]/70 text-sm mt-3">
        이 기능은 포스트 작성 시점을 정확하게 추적할 수 있게 해줍니다.
      </p>
    </div>
  </div>
</div>

## 🎨 디자인 철학

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <div class="card text-center">
    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-white text-2xl">🌙</span>
    </div>
    <h3 class="text-lg font-bold text-[var(--foreground)] mb-2">다크 모드 지원</h3>
    <p class="text-[var(--foreground)]/70 text-sm">
      시스템 설정에 따라 자동으로 다크/라이트 모드가 전환됩니다.
    </p>
  </div>

  <div class="card text-center">
    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-white text-2xl">📱</span>
    </div>
    <h3 class="text-lg font-bold text-[var(--foreground)] mb-2">반응형 디자인</h3>
    <p class="text-[var(--foreground)]/70 text-sm">
      모바일 기기에서도 최적의 사용자 경험을 제공합니다.
    </p>
  </div>

  <div class="card text-center">
    <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-white text-2xl">✨</span>
    </div>
    <h3 class="text-lg font-bold text-[var(--foreground)] mb-2">모던 UI/UX</h3>
    <p class="text-[var(--foreground)]/70 text-sm">
      카드 기반 레이아웃과 부드러운 애니메이션 효과를 적용했습니다.
    </p>
  </div>

</div>

## 🚀 배포 전략

<div class="card mb-8">
  <div class="flex items-center mb-6">
    <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">🚀</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">다양한 배포 옵션</h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
      <div class="flex items-center mb-4">
        <span class="text-2xl mr-3">▲</span>
        <h4 class="text-lg font-bold text-blue-900 dark:text-blue-100">Vercel (권장)</h4>
      </div>
      <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm mb-3">
        <div class="text-blue-400">$ vercel</div>
      </div>
      <p class="text-[var(--foreground)]/70 text-sm">
        글로벌 CDN과 자동 HTTPS, Next.js와의 완벽한 통합이 큰 장점입니다.
      </p>
    </div>

    <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
      <h4 class="text-lg font-bold text-green-900 dark:text-green-100 mb-4">다른 옵션들</h4>
      <ul class="space-y-2 text-sm text-[var(--foreground)]/70">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          <strong>Netlify</strong>: 정적 사이트 배포에 최적화
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          <strong>GitHub Pages</strong>: 무료 호스팅으로 적합
        </li>
      </ul>
    </div>
  </div>
</div>

## 📊 구현된 기능들

<div class="card mb-8">
  <div class="flex items-center mb-6">
    <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">📊</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">핵심 기능들</h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="space-y-3">
      <div class="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <span class="text-green-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>포스트 목록</strong>: 발행일 기준 최신순 정렬</span>
      </div>
      <div class="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <span class="text-blue-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>카테고리 필터링</strong>: 주제별 포스트 분류</span>
      </div>
      <div class="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <span class="text-purple-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>SEO 최적화</strong>: 메타 태그 자동 생성</span>
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
        <span class="text-orange-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>RSS 피드</strong>: 콘텐츠 구독 지원</span>
      </div>
      <div class="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <span class="text-red-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>sitemap.xml</strong>: 검색 엔진 최적화</span>
      </div>
      <div class="flex items-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
        <span class="text-indigo-600 mr-3">✅</span>
        <span class="text-[var(--foreground)]/80"><strong>다크 모드</strong>: 사용자 경험 향상</span>
      </div>
    </div>
  </div>
</div>

## 💡 배운 점과 개선 방향

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

  <div class="card">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white text-lg">🎯</span>
      </div>
      <h3 class="text-lg font-bold text-[var(--foreground)]">기술적 성취</h3>
    </div>

    <div class="space-y-3">
      <div class="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <span class="text-blue-600 mr-3 mt-1">1</span>
        <span class="text-[var(--foreground)]/80"><strong>Next.js App Router</strong>의 깊이 있는 이해</span>
      </div>
      <div class="flex items-start p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <span class="text-green-600 mr-3 mt-1">2</span>
        <span class="text-[var(--foreground)]/80"><strong>TypeScript</strong>를 활용한 타입 안전성 확보</span>
      </div>
      <div class="flex items-start p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <span class="text-purple-600 mr-3 mt-1">3</span>
        <span class="text-[var(--foreground)]/80"><strong>Tailwind CSS</strong>를 활용한 효율적인 스타일링</span>
      </div>
      <div class="flex items-start p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
        <span class="text-orange-600 mr-3 mt-1">4</span>
        <span class="text-[var(--foreground)]/80"><strong>Git 워크플로우</strong>와의 연동</span>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
        <span class="text-white text-lg">🚀</span>
      </div>
      <h3 class="text-lg font-bold text-[var(--foreground)]">개선 방향</h3>
    </div>

    <div class="space-y-2">
      <div class="flex items-center p-2 text-[var(--foreground)]/70">
        <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
        검색 기능 구현
      </div>
      <div class="flex items-center p-2 text-[var(--foreground)]/70">
        <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
        댓글 시스템 추가
      </div>
      <div class="flex items-center p-2 text-[var(--foreground)]/70">
        <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
        포스트 시리즈 기능
      </div>
      <div class="flex items-center p-2 text-[var(--foreground)]/70">
        <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
        성능 최적화 (Core Web Vitals)
      </div>
    </div>
  </div>

</div>

## 🤝 오픈소스 기여

<div class="card mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
      <span class="text-white text-xl">🤝</span>
    </div>
    <h3 class="text-xl font-bold text-[var(--foreground)]">함께 만들어가는 프로젝트</h3>
  </div>

  <p class="text-[var(--foreground)]/80 mb-4">
    이 프로젝트는 <strong>MIT 라이선스</strong>로 공개되어 있습니다. 개선 아이디어나 버그 리포트는 언제나 환영입니다!
  </p>

  <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700">
    <h4 class="font-semibold text-[var(--foreground)] mb-3">기여 방법</h4>
    <div class="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm space-y-1">
      <div class="text-green-400"># 1. Fork this repository</div>
      <div class="text-blue-400">$ git checkout -b feature/AmazingFeature</div>
      <div class="text-yellow-400"># 2. Make your changes</div>
      <div class="text-blue-400">$ git push origin feature/AmazingFeature</div>
      <div class="text-green-400"># 3. Open a Pull Request</div>
    </div>
  </div>
</div>

## 마무리하며

<div class="card bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border border-blue-200 dark:border-blue-800">
  <div class="text-center">
    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
      <span class="text-white text-2xl">🚀</span>
    </div>

    <h3 class="text-2xl font-bold text-[var(--foreground)] mb-4">함께 성장하는 여정</h3>

    <p class="text-[var(--foreground)]/80 mb-6 leading-relaxed">
      이 블로그 프로젝트는 단순한 기술 구현 그 이상의 의미를 가지고 있습니다.
      <strong>학습의 결과물을 체계적으로 기록하고 공유</strong>하는 과정 자체가 더 큰 성장으로 이어진다는 것을 깨달았습니다.
    </p>

    <p class="text-[var(--foreground)]/80 mb-6">
      새로운 기술을 배울 때마다 포스트를 작성하는 습관을 들이면 학습 효과가 배가 된다는 것을 직접 경험했습니다.
      이 블로그가 여러분의 학습 여정에도 도움이 되길 바랍니다!
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="/blog" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
        📚 블로그 둘러보기
      </a>
      <a href="#comments" class="inline-flex items-center px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-200">
        💬 의견 남기기
      </a>
    </div>
  </div>
</div>
