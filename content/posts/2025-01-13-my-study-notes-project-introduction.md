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

이 블로그는 **Next.js 13 App Router**와 **TypeScript**를 기반으로 구축된 현대적인 기술 블로그입니다. 깔끔한 UI와 뛰어난 개발 경험을 제공하는 것을 목표로 하여 만들어졌습니다.

### 주요 기술 스택

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown (Gray Matter 파싱)
- **Deployment**: Vercel / Netlify
- **Theme**: next-themes (다크/라이트 모드 지원)

## 📁 프로젝트 구조

프로젝트의 구조를 한눈에 살펴보겠습니다:

```
my-study-blog/
├── content/posts/          # 마크다운 포스트들
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── blog/          # 블로그 페이지들
│   │   └── page.tsx       # 메인 페이지
│   ├── components/        # React 컴포넌트들
│   └── lib/               # 유틸리티 함수들
├── scripts/               # 자동화 스크립트들
└── styles/                # 글로벌 스타일
```

이 구조는 Next.js의 App Router를 최대한 활용하면서도 유지보수가 쉽도록 설계되었습니다.

## 🛠️ 개발 환경 및 워크플로우

### 빠른 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

이렇게 간단한 명령어로 로컬 개발 환경을 구축할 수 있습니다.

### 포스트 작성 워크플로우

블로그 포스트 작성을 위한 몇 가지 방법을 제공합니다:

#### 1. 자동 생성 스크립트 (권장)

```bash
# 기본 포스트 생성
npm run create-post "포스트 제목"

# 카테고리 지정
npm run create-post "React 기초 배우기" "react,javascript"

# 요약문 포함
npm run create-post "Vue.js 시작하기" "vue,javascript" "Vue.js의 기본 개념과 실습"
```

#### 2. 수동 생성

직접 마크다운 파일을 생성하는 것도 가능합니다:

```yaml
---
title: "포스트 제목"
date: "2025-01-13"
categories: ["javascript", "frontend"]
tags: ["자바스크립트", "프론트엔드"]
excerpt: "포스트 요약문"
---
```

## 📅 스마트한 발행일 관리

이 블로그의 특별한 기능 중 하나는 **Git 커밋 기반 발행일 자동 설정**입니다.

발행일 우선순위:
1. **Git 커밋 날짜** (가장 우선)
2. **Front matter의 date** (fallback)
3. **현재 날짜** (최종 fallback)

기존 포스트들의 발행일을 업데이트하려면:

```bash
npm run update-posts
```

이 기능은 포스트 작성 시점을 정확하게 추적할 수 있게 해줍니다.

## 🎨 디자인 철학

### 다크 모드 지원

시스템 설정에 따라 자동으로 다크/라이트 모드가 전환됩니다. next-themes 라이브러리를 사용하여 자연스러운 테마 전환을 구현했습니다.

### 반응형 디자인

모바일 기기에서도 최적의 사용자 경험을 제공하도록 반응형 디자인을 적용했습니다. Tailwind CSS의 반응형 유틸리티 클래스를 적극 활용했습니다.

### 모던 UI/UX

- 카드 기반 레이아웃
- 부드러운 애니메이션 효과
- 직관적인 네비게이션
- 읽기 쉬운 타이포그래피

## 🚀 배포 전략

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

Vercel의 글로벌 CDN과 자동 HTTPS, 그리고 Next.js와의 완벽한 통합이 큰 장점입니다.

### 다른 옵션들

- **Netlify**: 정적 사이트 배포에 최적화
- **GitHub Pages**: 무료 호스팅으로 적합

## 📊 구현된 기능들

- ✅ **포스트 목록**: 발행일 기준 최신순 정렬
- ✅ **카테고리 필터링**: 주제별 포스트 분류
- ✅ **SEO 최적화**: 메타 태그 자동 생성
- ✅ **RSS 피드**: 콘텐츠 구독 지원
- ✅ **sitemap.xml**: 검색 엔진 최적화
- ✅ **다크 모드**: 사용자 경험 향상

## 💡 배운 점과 개선 방향

### 기술적 성취

1. **Next.js App Router**의 깊이 있는 이해
2. **TypeScript**를 활용한 타입 안전성 확보
3. **Tailwind CSS**를 활용한 효율적인 스타일링
4. **Git 워크플로우**와의 연동

### 앞으로의 개선 방향

- 검색 기능 구현
- 댓글 시스템 추가
- 포스트 시리즈 기능
- 성능 최적화 (Core Web Vitals)

## 🤝 오픈소스 기여

이 프로젝트는 MIT 라이선스로 공개되어 있습니다. 개선 아이디어나 버그 리포트는 언제나 환영입니다!

```bash
# 기여 방법
1. Fork this repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
```

## 마무리하며

이 블로그 프로젝트는 단순한 기술 구현 그 이상의 의미를 가지고 있습니다. **학습의 결과물을 체계적으로 기록하고 공유**하는 과정 자체가 더 큰 성장으로 이어진다는 것을 깨달았습니다.

새로운 기술을 배울 때마다 포스트를 작성하는 습관을 들이면 학습 효과가 배가 된다는 것을 직접 경험했습니다. 이 블로그가 여러분의 학습 여정에도 도움이 되길 바랍니다!

궁금한 점이 있으시면 언제든 댓글 남겨주세요. 함께 성장하는 개발자가 되길 바랍니다. 🚀
