---
title: "HTTP vs HTTPS, REST API 완벽 이해 - 웹 통신의 기초"
date: "2023-09-03"
categories: ["network", "api"]
tags: ["HTTP", "HTTPS", "REST API", "GET", "POST", "웹통신", "API"]
excerpt: "HTTP와 HTTPS의 차이, REST API의 개념과 CRUD 작업, GET과 POST 메소드의 차이점을 깊이 있게 이해합니다."
---

# 🌐 웹 통신의 기초 - HTTP와 API

웹 개발자로서 가장 기본적이면서도 중요한 개념 중 하나가 바로 **웹 통신**입니다. 오늘은 HTTP와 HTTPS의 차이, REST API의 개념, 그리고 GET과 POST 메소드의 차이점에 대해 알아보겠습니다.

## 🔒 HTTP vs HTTPS

### HTTP (Hypertext Transfer Protocol)

HTTP는 **하이퍼텍스트 전송 프로토콜**로, 웹 브라우저와 웹 서버 간의 통신을 위한 프로토콜입니다.

**특징:**
- **암호화되지 않은** 프로토콜
- 기본 포트: 80
- 보안이 취약함 (데이터가 평문으로 전송됨)

### HTTPS (Hypertext Transfer Protocol Secure)

HTTPS는 HTTP에 **보안 계층(SSL/TLS)**을 추가한 프로토콜입니다.

**주요 특징:**
- **데이터 암호화**: 중간자 공격으로부터 데이터를 보호
- **서버 인증**: 웹사이트의 신원을 확인 (SSL 인증서)
- 기본 포트: 443
- URL이 `https://`로 시작

### HTTP vs HTTPS 비교

| 항목 | HTTP | HTTPS |
|------|------|-------|
| **보안** | ❌ 취약 | ✅ 강화됨 |
| **암호화** | ❌ 없음 | ✅ SSL/TLS |
| **포트** | 80 | 443 |
| **SEO** | ❌ 불리 | ✅ 유리 (구글 선호) |
| **성능** | ✅ 빠름 | ⚠️ 약간 느림 (암호화 오버헤드) |

### 왜 HTTPS를 사용해야 할까?

1. **데이터 보호**: 사용자 정보, 로그인 정보 등의 민감한 데이터 보호
2. **SEO 이점**: 구글 검색 엔진이 HTTPS 사이트를 우선 순위로 매김
3. **신뢰성**: 사용자에게 보안된 사이트임을 보여줌
4. **법적 요구사항**: 금융, 의료 등의 분야에서 필수

## 🔌 REST API란 무엇일까?

서버 연동 작업을 할 때 자주 접하는 **REST API**. 정확히 이해해보겠습니다.

### REST의 정의

**REST**는 **Representational State Transfer**의 약자로, **"표현 상태 전송"**을 의미합니다.

> REST는 **웹 서비스와 클라이언트 간의 통신을 위한 아키텍처 스타일**입니다.

### REST API의 특징

1. **HTTP 프로토콜 기반**: 기존 웹 인프라 활용
2. **무상태성**: 각 요청이 독립적 (서버가 클라이언트 상태를 저장하지 않음)
3. **표준화된 인터페이스**: 일관된 방법으로 리소스에 접근
4. **캐시 가능**: 응답을 캐시하여 성능 향상

### REST API의 핵심: 리소스와 CRUD

REST API는 **리소스(Resource)**를 중심으로 설계됩니다.

**CRUD 작업과 HTTP 메소드 매핑:**

| HTTP 메소드 | CRUD 작업 | 설명 | 예시 |
|-------------|-----------|------|------|
| **GET** | Read | 리소스 조회 | `GET /users/123` |
| **POST** | Create | 리소스 생성 | `POST /users` |
| **PUT** | Update | 리소스 전체 수정 | `PUT /users/123` |
| **DELETE** | Delete | 리소스 삭제 | `DELETE /users/123` |

### RESTful API 디자인 원칙

좋은 REST API를 설계하기 위한 원칙들:

1. **명확한 리소스 식별**: URL로 리소스를 명확히 식별
2. **표준 HTTP 메소드 사용**: CRUD 작업에 맞는 메소드 사용
3. **적절한 상태 코드**: 200, 201, 400, 404, 500 등 의미 있는 코드 사용
4. **HATEOAS**: 응답에 다음 가능한 액션에 대한 링크 포함

## 📨 GET vs POST: 메소드의 차이점

GET과 POST는 가장 많이 사용되는 HTTP 메소드지만, 그 용도가 다릅니다.

### GET 메소드
- **목적**: 서버로부터 데이터를 조회(Read)
- **데이터 전송**: URL의 쿼리 파라미터를 통해 전송
- **캐시**: 브라우저에 의해 캐시될 수 있음
- **북마크**: URL에 데이터가 포함되므로 북마크 가능

```http
GET /api/users?page=1&limit=10 HTTP/1.1
Host: api.example.com
```

### POST 메소드
- **목적**: 서버에 데이터를 생성(Create) 또는 전송
- **데이터 전송**: HTTP 본문(body)을 통해 전송
- **캐시**: 일반적으로 캐시되지 않음
- **북마크**: URL에 데이터가 없으므로 북마크 불가

```http
POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "name": "홍길동",
  "email": "hong@example.com"
}
```

### GET vs POST 비교

| 항목 | GET | POST |
|------|-----|------|
| **용도** | 데이터 조회 | 데이터 생성/전송 |
| **데이터 위치** | URL 쿼리 파라미터 | HTTP 본문 |
| **데이터 노출** | URL에 표시됨 | 본문에 숨겨짐 |
| **캐시** | 가능 | 일반적으로 불가능 |
| **북마크** | 가능 | 불가능 |
| **데이터 길이** | 제한적 (URL 길이 제한) | 제한 없음 |
| **보안** | 덜 안전 (URL에 노출) | 더 안전 (본문에 숨김) |

### 언제 어떤 메소드를 사용할까?

- **GET 사용**: 검색, 필터링, 정렬 등 조회 작업
- **POST 사용**: 로그인, 회원가입, 데이터 생성 등 상태 변경 작업

## 🚀 실제 활용 예시

### 사용자 관리 API

```javascript
// 사용자 목록 조회 (GET)
fetch('/api/users?page=1&limit=10')
  .then(response => response.json())
  .then(users => console.log(users));

// 새 사용자 생성 (POST)
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: '김철수',
    email: 'kim@example.com'
  })
});
```

## 💡 마무리하며

웹 통신의 기초를 이해하는 것은 프론트엔드 개발자에게 필수적입니다. HTTP와 HTTPS의 차이, REST API의 개념, 그리고 GET과 POST 메소드의 적절한 사용은 모두 사용자 경험과 애플리케이션의 안정성에 직접적인 영향을 미칩니다.

특히 보안 측면에서 HTTPS의 중요성과 RESTful한 API 디자인은 현대 웹 개발의 표준이 되었습니다.

다음 글에서는 객체지향 프로그래밍의 개념과 자료구조에 대해 알아보겠습니다. 궁금한 점이 있으시면 댓글로 남겨주세요! 🌟
