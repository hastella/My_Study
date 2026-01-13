---
title: "시스템 아키텍처의 이해 - 프로세스, 렌더링, 마이크로서비스"
date: "2023-09-05"
categories: ["system", "architecture"]
tags: ["프로세스", "스레드", "CSR", "SSR", "SPA", "MPA", "MSA", "CI/CD", "시스템아키텍처", "마이크로서비스"]
excerpt: "프로세스와 스레드의 차이, CSR/SSR/SPA/MPA의 개념, 그리고 MSA와 CI/CD까지 시스템 아키텍처의 핵심 개념들을 정리합니다."
---

# 🏗️ 시스템 아키텍처의 핵심 개념들

현대 소프트웨어 개발에서 알아야 할 시스템 아키텍처의 기초 개념들을 정리해보겠습니다. 프로세스와 스레드부터 시작해서 렌더링 방식, 애플리케이션 구조, 그리고 마이크로서비스 아키텍처까지 폭넓게 다루어보겠습니다.

## 🔄 프로세스와 스레드의 이해

### 프로세스 (Process)

**프로세스**는 운영체제에서 실행 중인 프로그램의 인스턴스입니다.

> 프로세스는 **코드, 데이터, 메모리 등의 자원과 실행 상태 정보를 독립적으로 가지고 있는 실행 단위**입니다.

**프로세스의 특징:**
- **독립적인 메모리 공간** 할당
- 각 프로세스는 **독립된 실행 흐름**을 가짐
- 프로세스 간 **통신(IPC)**이 필요
- 하나의 프로그램으로부터 여러 프로세스 생성 가능

```javascript
// Node.js에서 프로세스 정보 확인
console.log('프로세스 ID:', process.pid);
console.log('부모 프로세스 ID:', process.ppid);
console.log('플랫폼:', process.platform);
```

### 스레드 (Thread)

**스레드**는 프로세스 내에서 실행되는 작업의 단위입니다.

> 스레드는 **프로세스 내부에서 메모리와 자원을 공유하는 실행 단위**입니다.

**스레드의 특징:**
- **프로세스의 메모리 공유**: 힙, 코드, 데이터 영역 공유
- **독립적인 스택**: 각 스레드의 함수 호출 스택은 독립적
- **경량 프로세스**: 프로세스보다 적은 리소스 사용
- **병렬 처리**: 동시에 여러 작업 수행 가능

### 프로세스 vs 스레드 비교

| 항목 | 프로세스 | 스레드 |
|------|---------|-------|
| **메모리 공유** | ❌ 독립적 | ✅ 공유 (힙, 코드) |
| **생성 비용** | 높음 | 낮음 |
| **통신 비용** | 높음 (IPC 필요) | 낮음 (메모리 공유) |
| **안정성** | 높음 (격리) | 낮음 (공유로 인한 충돌 가능) |
| **병렬성** | 프로세스 단위 | 스레드 단위 |

**주의사항:** 여러 스레드가 동일한 자원에 동시에 접근하면 **경쟁 상태(Race Condition)**가 발생할 수 있습니다. 동기화 메커니즘(Mutex, Semaphore 등)을 사용하여 해결해야 합니다.

## 🎨 렌더링 방식의 차이: CSR vs SSR

### Client-Side Rendering (CSR)

**클라이언트 측에서 렌더링**하는 방식입니다.

```javascript
// React CSR 예시
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // 클라이언트에서 API 호출 후 렌더링
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data ? data.content : '로딩 중...'}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**CSR의 특징:**
- **초기 로딩**: 빈 HTML → JavaScript 실행 → 콘텐츠 렌더링
- **이후 페이지 이동**: 필요한 부분만 업데이트 (빠름)
- **SEO**: ❌ 검색 엔진이 JavaScript를 실행하기 어려움
- **사용자 경험**: 초기 로딩 후 부드러운 UX

### Server-Side Rendering (SSR)

**서버 측에서 렌더링**하는 방식입니다.

```javascript
// Next.js SSR 예시
export default function Page({ data }) {
  return <div>{data.content}</div>;
}

export async function getServerSideProps() {
  // 서버에서 API 호출 후 렌더링
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}
```

**SSR의 특징:**
- **초기 로딩**: 완전한 HTML을 즉시 제공
- **페이지 이동**: 서버 요청 필요 (상대적으로 느림)
- **SEO**: ✅ 완전한 HTML 제공으로 검색 엔진 친화적
- **서버 부하**: 각 요청마다 서버 리소스 사용

### CSR vs SSR 비교표

| 항목 | CSR | SSR |
|------|-----|-----|
| **초기 로딩 속도** | 느림 (JavaScript 실행 필요) | 빠름 (완전한 HTML 제공) |
| **SEO** | ❌ 어려움 | ✅ 우수 |
| **사용자 경험** | 초기 후 부드러움 | 초기만 빠름 |
| **서버 부하** | 낮음 | 높음 |
| **개발 복잡도** | 낮음 | 높음 |

## 🏛️ 애플리케이션 구조: SPA vs MPA

### Single Page Application (SPA)

**단일 HTML 페이지**로 구성된 웹 애플리케이션입니다.

```javascript
// React Router를 사용한 SPA
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**SPA의 특징:**
- **단일 HTML 파일**: 초기 로드 후 동적 업데이트
- **빠른 페이지 전환**: JavaScript로 DOM 조작
- **모바일 앱 같은 UX**: 부드러운 전환
- **SEO**: 추가 설정 필요 (React Helmet 등)
- **대표 프레임워크**: React, Vue.js, Angular

### Multiple Page Application (MPA)

**여러 개의 독립적인 HTML 페이지**로 구성된 전통적인 웹 애플리케이션입니다.

```php
<!-- PHP MPA 예시 -->
<?php
// 각 페이지마다 별도 PHP 파일
if ($_SERVER['REQUEST_URI'] === '/about') {
  include 'about.php';
} elseif ($_SERVER['REQUEST_URI'] === '/contact') {
  include 'contact.php';
} else {
  include 'home.php';
}
?>
```

**MPA의 특징:**
- **여러 HTML 파일**: 각 페이지마다 별도 파일
- **서버 라우팅**: 페이지 요청마다 서버 응답
- **SEO**: 자연스럽게 지원
- **단순한 구조**: 서버 중심 아키텍처

### SPA vs MPA 비교

| 항목 | SPA | MPA |
|------|-----|-----|
| **페이지 구조** | 단일 HTML | 다중 HTML |
| **페이지 전환** | 클라이언트 측 | 서버 측 |
| **SEO** | 추가 작업 필요 | 기본 지원 |
| **개발 복잡도** | 높음 | 낮음 |
| **사용자 경험** | 우수 | 보통 |
| **서버 부하** | 낮음 | 높음 |

## 🔧 Next.js의 하이브리드 접근

Next.js는 **CSR과 SSR을 모두 지원**하는 하이브리드 프레임워크입니다.

### 렌더링 전략 선택

```javascript
// 정적 생성 (SSG) - 빌드 시점에 생성
export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

// 서버 사이드 렌더링 (SSR) - 요청 시점에 생성
export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

// 클라이언트 사이드 렌더링 (CSR) - 브라우저에서 생성
import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts').then(res => res.json()).then(setPosts);
  }, []);

  return <div>{/* 포스트 목록 */}</div>;
}
```

### Next.js 선택 기준

- **getStaticProps**: 정적 콘텐츠, SEO 중요, 빌드 시점에 결정
- **getServerSideProps**: 동적 콘텐츠, 실시간 데이터, 사용자별 콘텐츠
- **CSR**: 대화형 기능, 실시간 업데이트, 사용자 인증 후 콘텐츠

## 🌐 CORS (Cross-Origin Resource Sharing)

**교차 출처 리소스 공유**는 웹 브라우저의 보안 정책입니다.

### Same-Origin Policy

기본적으로 브라우저는 **동일 출처 정책**을 따릅니다:
- **동일 출처**: 프로토콜 + 도메인 + 포트가 모두 같음
- **교차 출처**: 하나라도 다른 경우

```javascript
// 허용되는 경우
fetch('https://api.example.com/data'); // 동일 출처
fetch('https://api.example.com:443/data'); // 동일 출처

// 차단되는 경우 (CORS 필요)
fetch('https://api.other.com/data'); // 다른 도메인
fetch('http://api.example.com/data'); // 다른 프로토콜
fetch('https://api.example.com:8080/data'); // 다른 포트
```

### CORS 해결 방법

```javascript
// 서버 측 헤더 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://yourdomain.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// 또는 특정 출처만 허용
res.header('Access-Control-Allow-Origin', 'https://trusted-domain.com');
```

## 🚀 마이크로서비스 아키텍처 (MSA)

### MSA의 정의

**마이크로서비스 아키텍처**는 큰 애플리케이션을 **작은 독립적인 서비스들로 분할**하는 디자인 패턴입니다.

### 모놀리식 vs 마이크로서비스

```javascript
// 모놀리식 구조
const app = express();

// 모든 기능이 하나의 애플리케이션에
app.get('/users', getUsers);
app.post('/orders', createOrder);
app.get('/products', getProducts);
```

```javascript
// 마이크로서비스 구조
// 각 서비스가 독립적
// User Service (포트 3001)
// Order Service (포트 3002)
// Product Service (포트 3003)
```

### MSA의 장점

- **독립성**: 각 서비스가 독립적으로 배포/확장 가능
- **기술 다양성**: 각 서비스가 적합한 기술 스택 선택 가능
- **장애 격리**: 한 서비스의 장애가 다른 서비스에 영향 미침
- **확장성**: 필요한 서비스만 확장 가능

### 프론트엔드에서의 MSA: Micro Frontends

```javascript
// Module Federation을 사용한 Micro Frontends
// 각 팀이 독립적으로 개발
const UserApp = React.lazy(() => import('user/UserApp'));
const ProductApp = React.lazy(() => import('product/ProductApp'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>로딩 중...</div>}>
        <UserApp />
        <ProductApp />
      </Suspense>
    </div>
  );
}
```

## 🔄 CI/CD (Continuous Integration/Deployment)

### CI (Continuous Integration)

**지속적 통합** - 개발자들이 작성한 코드를 지속적으로 통합하는 과정입니다.

```yaml
# GitHub Actions CI 예시
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
    - run: npm run build
```

### CD (Continuous Deployment)

**지속적 배포** - 통합된 코드를 자동으로 배포하는 과정입니다.

```yaml
# Vercel 자동 배포
name: Deploy to Vercel
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Vercel
      run: npx vercel --prod --yes
```

### CI/CD의 이점

- **빠른 피드백**: 코드 변경사항 즉시 검증
- **자동화**: 수동 배포 프로세스 제거
- **품질 향상**: 자동화된 테스트와 검증
- **빠른 배포**: 개발에서 배포까지 시간 단축

## 🧪 테스트 코드의 중요성

### 테스트 코드의 역할

```javascript
// Jest를 사용한 테스트 예시
describe('Calculator', () => {
  test('더하기 기능', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('빼기 기능', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
```

**테스트 코드의 이점:**
- **버그 감소**: 기능 변경 시 회귀 버그 방지
- **리팩토링 안전성**: 코드 구조 변경 시 기능 보장
- **문서화**: 코드의 예상 동작 명시
- **유지보수성**: 변경 사항의 영향 범위 파악

## 💡 마무리하며

시스템 아키텍처는 단순한 기술 선택이 아니라 **프로젝트의 성공을 좌우하는 중요한 결정**입니다.

- **프로세스/스레드**: 시스템 리소스 관리의 기초
- **CSR/SSR/SPA/MPA**: 사용자 경험과 성능의 균형
- **MSA**: 대규모 시스템의 확장성과 유지보수성
- **CI/CD**: 개발 생산성과 코드 품질 향상

각 개념들은 서로 연결되어 있으며, 프로젝트의 규모와 요구사항에 따라 적절한 아키텍처를 선택하는 것이 중요합니다.

다음 글에서는 실제 프로젝트에서 이러한 개념들을 어떻게 적용하는지에 대해 알아보겠습니다. 궁금한 점이 있으시면 댓글로 남겨주세요! 🚀
