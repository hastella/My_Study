# 🤓 고민하고 공부하며 기록하는 페이지!

# 👾 프로그램이란?

프로그램은 컴퓨터에게 특정 작업을 수행하도록 지시하는 '코드 덩어리'! **명령어와 데이터의 집합**이다. 프로그래머로서 프로그램을 개발할 때 어떻게 메모리를 가장 효율적으로 사용하며 개발할 수 있을지를 고민해 봐야한다고 생각된다.

# Web

## 브라우저 주소창에 구글을 입력하면 어떤일이 일어날까?

브라우저 주소창에 도메인 이름을 입력하면 DNS(Domain Name System) 조회를 통해 해당 도메인의 IP 주소를 얻고, 받은 IP 주소를 사용하여 해당 서버에 연결한다. 브라우저는 HTTP 프로토콜을 사용하여 서버에 요청을 보내고 (일반적으로 GET 요청), 서버는 해당 요청에 대한 응답을 생성하여 브라우저에게 전달하고, 브라우저는 응답을 처리하여 사용자에게 웹 페이지를 표시한다.
<br> ❓그럼 **DNS**(Domain Name System)이란 무엇일까?<br>❗️DNS는 인터넷에서 도메인 이름과 IP 주소 간의 변환을 담당하는 시스템! DNS는 사용자가 이해하기 쉬운 도메인 이름 (예: www.google.com)을 컴퓨터가 이해할 수 있는 IP 주소로 매핑하는 역할을 한다.
<br>

## 브라우저 렌더링 원리

브라우저 렌더링이란 HTML,CSS, Javascript 등의 웹페이지 자원을 브라우저가 화면에 그리는 과정이다.
우선 브라우저는 HTML 문서를 파싱하여 **DOM트리를 생성**한다. 이때, HTML 태그를 노드로 변환하고, 노드간의 계층 관계를 형성한다.
두 번째로 CSS 파일을 파싱하여 **CSSOM을 생성**한다. 이때, CSS 속성을 노드로 변환하고, 노드간의 계층 관계를 형성한다.
세 번째로 DOM트리와 CSSOM을 결합하여 **렌더 트리를 생성**한다. 이때, 실제 화면에 표시될 요소만을 선택하여 렌더 트리를 형성한다.
이렇게 생성된 렌더 트리를 통해 브라우저는 각 요소의 크기와 위치를 계산하는 과정인 **레이아웃**을 거쳐 화면에 요소를 그리는 **페인팅** 과정을 거치는데, 이때, 요소의 배경, 테두리, 글자 등을 그려준다.
<br>❓DOM 트리는 문서의 요소(Element)들과 구조를 표현하는 트리 구조<br>❓CSSOM 트리는 문서의 요소들에 대한 스타일 정보를 포함<br>❓렌더 트리는 실제로 화면에 렌더링되는 요소들을 포함, 표시되지 않는 요소들(head, script)은 포함되지 않는다.
<br>

## 프론트엔드에서 '스켈레톤'이란?
스켈레톤: skeleton 자체의 의미는 **뼈대**! 프론트엔드에서는, 로딩 과정을 거치기 전 웹사이트의 뼈대를 나타낸다. 즉, 웹 페이지나 앱의 로딩 중에 사용자에게 빈 화면 대신 보여지는 시각적인 효과를 의미한다. 이렇게 그냥 빈 화면이 아닌 로딩 중이라는 **시각적인 효과** 를 주어 딜레이를 다루는 데에 동움이 되며, 사용자들이 페이지 내용이 로딩 중임을 인지하고 이를 기다리는 동안 불편함을 최소하하기 위한 효과적인 방법 중 하나다.

## HTTP와 HTTPS!

HTTP(Hypertext Transfer Protocol)와 HTTPS(Hypertext Transfer Protocol **Secure**)<br>
HTTP는 암호화되지 않은 프로토콜이며 보안이 취약한 반면, HTTPS는 데이터의 암호화와 웹 사이트의 신원 인증을 제공하여 보안성을 강화한다!

## REST API란 무엇일까?

서버 연동 작업을 할때 자주 보고 듣게 되는 REST API이지만 정확히 뭔지 정리해 보려고 한다!
우선 REST는 Representational State Transfer의 약자로, **표현 상태를 전송** 하는 웹 서비스와 클라이언트 간의 통신을 위한 아키텍처 스타일이다. REST API는 널리 사용되는 API 디자인 패턴 중 하나이며, HTTP 프로토콜을 기반으로 데이터를 전송하고, 서버의 리소스에 대한 CRUD(Create, Read, Update, Delete) 작업을 수행한다.
이 때, REST API는 일반적으로 HTTP 메소드(GET, POST, PUT, DELETE 등)를 사용하여 리소스에 대한 액션을 나타낸다.

- GET 메소드는 리소스를 조회하고 (Read)
- POST 메소드는 리소스를 생성하고 (Create)
- PUT 메소드는 리소스를 업데이트하고 (Update)
- DELETE 메소드는 리소스를 삭제하는 (Delete) 작업을 수행한다.
  <br>

## GET과 POST의 차이는?

[GET 메소드는 리소스를 조회하고 POST 메소드는 리소스를 생성]에서 알 수 있듯이, GET은 서버로부터 데이터를 받아오고, POST는 데이터를 서버로 보내준다.

**GET은** 요청 **URL에 파라미터를 통해 데이터를 전송**하고, **POST는** 요청 URL이 아닌 요청의 **본문(body)에 데이터를 포함하여 전송**한다.

이 과정에서 GET은 데이터가 URL에 노출되므로 보안과 데이터 길이 제한에 제약을 받을 수 있다. 반면에 POST는 데이터가 URL에 노출되지 않으므로, 보안적인 측면에서 GET보다 안전하며 데이터 길이에 제한이 없다.

## 객체지향 프로그래밍 (Object-Oriented Programming)이란 무엇일까?

객체지향 프로그래밍이란, 프로그래밍 할때 서로 밀접하게 연관되어 있는 요소들을 객체로 구성해 나가면서 객체끼리 서로 호환 가능하게 하는 것이다.<br>
객체지향 프로그램과 관련된 개념들<br>

- 클래스 (Class): 클래스는 객체를 생성하기 위한 템플릿이며, 객체의 구조와 행동을 정의하는데 사용된다. 클래스는 property(데이터)과 method(행동)로 구성된다.

- 객체 (Object): 클래스의 인스턴스로, 실제로 메모리에 할당된 개별적인 데이터를 나타낸다. 객체는 클래스에 정의된 property와 method를 사용할 수 있다.

- 캡슐화 (Encapsulation): 객체 내부에 있는 속성은 외부에서 직접 접근할 수 없으므로 이는 객체의 내부 구현을 외부로부터 감추고, 객체의 일관성과 보안성을 높여준다. **--> 정보은닉**<br>❓ 클래스도 데이터와 메서드를 묶는 것, 캡슐화도 데이터와 메서드를 묶는 것! 그럼 클래스와 캡슐화의 개념은 어떻게 다른걸까?<br>❗️ **캡슐화는** 데이터와 메서드를 하나의 단위로 묶는 **프로그래밍 개념**을 말하며, **클래스는** 객체를 생성하기 위한 템플릿 또는 설계도로서, **캡슐화를 실현하는데 사용될 수 있는 객체지향 프로그래밍의 구현 방법**! 클래스는 캡슐화를 통해 데이터와 해당 데이터를 조작하는 메서드를 하나의 단위로 묶을 수 있다.

- 상속 (Inheritance): 상속은 기존의 클래스로부터 새로운 클래스를 생성하는 개념이다. 상속을 통해 기존 클래스의 속성과 메소드를 재사용하고 확장할 수 있어 코드 재사용성과 유지보수성을 향상시킨다.

## 자료구조 stack과 queue의 차이는?

stack과 queue 모두 일렬로 정렬된 데이터를 다루는 자료구조이다. <br>우선 ❗️**스택은 프링글스통**을 떠올려보자! Last In First Out (LIFO)으로, 가장 최근에 추가된 데이터가 가장 먼제 삭제된다. push와 pop을 통해 요소를 추가/ 삭제하며, top은 스택의 맨 위에 있는 데이터를 반환한다.<br>❗️**큐는 줄서는 사람들**을 생각하면 이해가 쉽다! First In First Out (FIFO)으로 가장 오래된 데이터부터 삭제된다. enqueue와 dequeue를 통해 요소를 추가/ 삭제하며, front는 맨 앞에 있는 데이터를 반환한다.
<br>

## 프로세스와 스레드란?

**프로세스(Process)는 운영 체제에서 실행 중인 프로그램**으로, 프로그램에 필요한 코드, 데이터, 메모리 등의 자원과 실행 상태 정보를 가지고 있다. 운영 체제는 각각의 프로세스에 **독립적인 메모리 공간을 할당**하고, 프로세스들을 관리한다. 여러 개의 프로세스는 동시에 실행될 수 있고, 각각의 프로세스는 **서로 간에 독립된 실행 흐름**을 가지게 된다. 이를 통해 여러 프로그램을 동시에 실행하거나, 프로그램 간에 데이터를 공유하거나 통신할 수 있는 것이다!<br>
**스레드(Thread)는 프로세스 내에서 실행되는 작업의 단위**로, 프로세스는 하나 이상의 스레드를 가질 수 있으며, 각각의 스레드는 독립적으로 실행될 수 있다. 스레드는 ❗️**프로세스 내부에서 메모리와 자원을 공유하는 특징을 가져 여러 작업을 병렬로 처리하거나 동시에 실행**할 수 있어 프로그램의 성능을 향상시키는 데 활용된다. 하지만 동시에 실행되는 스레드가 동일한 자원에 접근하고 수정할 때 예기치 않은 결과가 발생할 수 있기 때문에 **스레드 간의 동기화와 데이터 공유에 주의**해야 한다!<br>

**🤓 요약**: 프로세스와 스레드는 프로그램 실행의 단위를 나타내는 개념으로, 프로세스는 독립된 실행 환경을 갖고 스레드는 프로세스 내에서 실행되는 작업의 단위이다.
<br>

## CSR 과 SSR : 렌더링 방식의 차이

❓ Client-Side-Rendering & Server-Side-Rendering, 각 각 클라이언트와 서버에서 렌더링을 한다는 특징을 지니고 있다. 이렇게 클라이언트와 서버에서 렌더링 할 경우 어떤 차이점이 발생하게 될까?

**초기 로딩 속도**

- CSR은 초기 페이지 요청 시에 빈 HTML을 받고, 이후에 데이터를 요청하여 동적으로 콘텐츠를 렌더링 한다. 이때, 필요한 컴포넌트만 리렌더링 되기 때문에 속도가 그 이후부터는 빨라진다.
- SSR은 초기 페이지 요청 시에 이미 완전한 HTML을 받기 때문에 초기 로딩 속도가 빠르다. 하지만 페이지를 이동할때마다 서버에 요청을 해야해서 초기에만 로딩 속도가 빠르다.

**검색 엔진 최적화(SEO)**

- CSR은 클라이언트 측에서 동적으로 콘텐츠를 생성하기 때문에 검색 엔진이 페이지의 콘텐츠를 크롤링하기 어렵다.
- SSR은 서버 측에서 렌더링되어 전달되는 HTML이 이미 포함된 상태이므로 검색 엔진 (웹 봇)이 HTML 태그들을 바탕으로 콘텐츠를 크롤링할 수 있다.

**사용자 경험**

- CSR은 초기 로딩 이후에는 업데이트가 필요한 부분만 업데이트 해주기 때문에 사용자 경험이 향상된다.
- SSR은 초기 로딩 속도는 빠르지만 업데이트가 필요할 때마다 서버 요청이 필요하므로 효율적이지 않다.
  <br>

## React는 CSR, 그럼 Next는?

Next.js는 CSR과 SSR을 모두 지원하기 때문에 필요에 따라 CSR과 SSR을 조합하여 사용할 수 있다! CSR의 단점을 보완해주며 SEO를 향상시켜주고, 동적인 기능을 사용할 수 있다.
<br>Next에서 **getStaticProps와 getServerSideProps**는 데이터를 가져오는 방법을 제공하는 함수다. Next.js의 서버 사이드 렌더링(SSR) 기능을 활용하여 페이지를 렌더링하기 전에 데이터를 미리 가져올 수 있게 해준다.

- getStaticProps는 사이트가 처음 빌드될 때에 딱 한번! 데이터를 불러오는 것이다. 주로 정적인 데이터가 자주 변경되지 않는 경우에 사용한다.
- getServerSideProps는 매 요청마다 데이터를 불러와 페이지를 렌더링한다. 동적인 컨텐츠가 자주 변경되는 경우에 사용한다. (수정사항 있으면 바로 업데이트 해주는 느낌)

내 경우에는, 포트폴리오 웹사이트를 제작하는 과정에서 Next.js를 이용하여 진행하였다. 이때, 포트폴리오 소개나 형식을 수정할 경우를 위해, 동적인 업데이트를 위해 getServerSideProps를 사용해 주었다.
<br>

## SPA와 MPA : 구조와 동작 방식의 차이

❓ Single Page Application & Multiple Page Application으로
단일 페이지의 HTML 페이지와 여러개의 독립적인 HTML 페이지로 구성된 웹 어플리케이션을 나타낸다. 이렇게 다른 구조의 웹 어플리케이션은 어떤 차이를 만들어낼까?

SPA는 하나의 HTML 페이지가 로드되고 이후에는 동적으로 데이터를 가져와서 해당 페이지 내에서 콘텐츠를 업데이트하여 사용자 경험에 효율적이고, MPA는 서버로부터 완전한 HTML을 받아와 렌더링되어 검색 엔진이 쉽게 콘텐츠를 크롤링하고 인덱싱할 수 있다.

## CORS (Cross-Origin Resource Sharing)란?

웹 브라우저에서 실행되는 JS 코드가 동일 출처가 아닌 다른 출처의 리소스에 접근할 수 있도록 허용하는 **보안 매커니즘**. 웹 애플리케이션은 원래 동일 출처 정책에 따라 다른 출처의 리소스에 직접 접근할 수 없다. 서버는 HTTP 응답 헤더인 **Access-Control-Allow-Origin**을 설정하여 특정 출처에서 오는 요청을 허용할 수 있다. 이를 통해 **클라이언트와 서버 간의 상호 작용을 확장**하고, **보안을 유지하면서 웹 애플리케이션의 기능을 향상**시킬 수 있다.

## 테스트 코드 작성의 중요성!

테스트 코드를 통해 **버그 발생률을 줄일 수 있다**. 각 기능에 대한 테스트 케이스를 만들어 해당 기능이 예상대로 작동하는지 확인하고, 변경 사항이 이전 기능에 영향을 미치지 않도록 한다! 즉, **유지보수도 효율적**으로 관리할 수 있는데, 변경 사항이 기존 기능을 해치지 않는지 테스트 코드를 통해 확인할 수 있다는 점이다.
<br>

## CI (Continuous Integration), CD (Continuous Deployment)란?

우리가 협업 프로젝트를 진행하며, 깃(Git) 레포지토리에 개발자들이 작성한 코드를 머지(Merge)하고 푸시(Push)하고 풀(Pull)을 받아, **지속적으로 통합**하며 작업을 하는 과정이 **CI**에 해당된다. 이렇게 작업을 하며 Vercel 또는 다른 배포 도구를 통해 사이트를 배포할 수 있는데, 이때 **지속적으로 배포**되도록 하는 과정은 **CD**에 해당된다!<br>
즉, CI/CD를 통해 개발자들이 코드를 통합하고 테스트, 배포하는 일련의 번거로운 과정을 자동화하여, 더욱 빠르게 안정적인 소프트웨어를 제공할 수 있다.
<br>

## MSA (Microservices Architecture) 란 뭘까?

소프트웨어 시스템을 **작은 독립적인 서비스들로 분할하는 소프트웨어 아키텍처 디자인 패턴**이다! 기존의 모놀리식(Monolithic) 아키텍처에서는 모든 기능과 로직이 하나의 큰 애플리케이션으로 통합되어 있었지만, MSA는 이를 작은 단위의 독립적인 서비스들로 나누어서 개발하고, 서비스들이 상호 독립적으로 배포, 운영, 확장될 수 있도록 한다. 이를 통해 새로운 기능을 추가하거나 기존 기능을 수정할 때, 해당 기능과 관련된 서비스들만 수정하면 된다. 다른 서비스들과의 결합도가 낮아져 **유지보수와 개선이 용이**한 것이다! MSA는 주로 **대규모 시스템에서 유용**하다.<br>
❓ 그럼 프론트엔드 개발에서 MSA를 적용하는 경우는 어떻게 되는걸까?<br>❗️ 웹 애플리케이션의 각 기능을 독립적인 **마이크로 프론트엔드**로 분할! 이를 Micro Frontends 라고도 부른다고 한다. 각 마이크로 프론트엔드는 자체적인 기술 스택과 독립적으로 개발, 배포되며, 독립적인 서비스처럼 동작하게 된다.<br>

예를 들어, 한 웹 애플리케이션에는 유저 관리, 상품 목록, 결제 기능 등 다양한 기능이 포함되어 있을 수 있는데, 이러한 기능들을 각각 독립적인 마이크로 프론트엔드로 분할하여 별도의 레포지토리로 관리되고, 개발팀이 독립적으로 담당한다.<br>

❓ 마이크로 프론트엔드의 장점은?<br>❗️ 큰 규모의 웹 애플리케이션을 여러 개발 팀이 협업하여 개발할 때 유용하게 사용될 수 있다. 리액트, 뷰, 앵글러를 제각각 사용하는 개발자들의 협력도 가능하며, 유연하고 확장성 있는 아키텍처를 제공할 수 있다!<br>**#독립적인 개발, #별도 배포, #기술 다양성, #성능과 확장성**

# HTML

**HTML: Hypertext Markup Language**은 웹 페이지를 구성하는 데 사용되는 **마크업 언어**로, 웹 브라우저에게 **문서의 구조와 내용을 알려주는** 역할을 한다.

```
<!DOCTYPE html> // 문서의 형식을 정의하는 선언부
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is a paragraph of text.</p>
  <img src="image.jpg" alt="Image">
  <a href="https://www.example.com">Click here</a> to visit Example.com.
</body>
</html>
```

❗️ script 태그를 적용하고 싶다면? body 태그 안에 제일 밑에 추가해주는 것이 일반적으로 권장된다.<br>
❓ 이유는?

- 페이지 로딩 시간 개선: 스크립트 파일을 <body> 태그 안에 위치시키면 브라우저가 **페이지의 구조와 내용을 먼저 표시한 후 스크립트를 실행**하므로 사용자는 더 빠르게 페이지를 볼 수 있다.

- DOM 요소의 로딩 보장: 스크립트가 <body> 태그 안에 위치하면, 스크립트가 실행되기 전에 해당 스크립트 위에 있는 모든 DOM 요소가 로드된 상태이므로 스크립트가 실행되는 시점에는 HTML 문서의 모든 요소에 접근할 수 있으므로 예기치 않은 오류를 방지할 수 있다.

```
<script src="/examples/scripts/script_src.js" defer></script>
```

하지만 **defer** 속성을 사용하면 스크립트 파일이 다운로드되는 동안 HTML 문서의 파싱이 지연되지 않고 계속 진행되며, 스크립트 파일은 HTML 문서의 파싱이 완료된 후에 실행된다. 따라서 defer 속성을 사용하면 script 태그를 어디에 사용해도 파싱 지연을 방지하고 실행 순서를 보장해준다.
<br>

# CSS

**CSS: ⤵ Cascading Style Sheets**을 사용하여 HTML 요소의 스타일과 레이아웃을 지정한다. <br>❓ cascading: 계단식의, 폭포처럼<br>❗️ 스타일 규칙을 **우선순위를 가진채 계단식**으로 적용하고, **상위 요소에서 하위 요소로 폭포처럼** 퍼져나가는 즉, 상위 요소에 적용된 스타일이 하위 요소에도 적용된다!

**styled-components**는 JavaScript 코드 안에서 CSS를 작성하는 방식으로, 컴포넌트 단위로 스타일을 정의하고 적용. JavaScript 코드가 실행될 때 해당 스타일이 동적으로 생성되고, 최종적으로 브라우저에서 렌더링된다.<br>**Tailwind CSS**는 CSS 클래스를 사용하여 스타일을 적용하는 방식으로, 미리 정의된 클래스를 HTML 요소에 적용. Tailwind CSS는 사전에 정의된 클래스의 집합을 제공하며, 이를 조합하여 필요한 스타일을 쉽게 적용할 수 있다.<br>

❓ 그럼 이 두 방식은 브라우저 렌더링 과정을 거칠때 css와 같은 원리를 거칠까?<br>❗️ 그렇다! styled-components와 Tailwind CSS는 CSS 코드를 더 효율적이고 생산적으로 작성하고 관리할 수 있게 도와주는 도구다. 브라우저 렌더링의 원리는 역시 동일하게 적용된다!<br>

## CSS 애니메이션과 JS 애니메이션의 차이?

개발을 할때 주로 HTML을 통해 웹사이트 구조를, CSS를 통해 디자인을, JS를 통해 역동적임을 준다! 하지만 가끔 CSS의 keyframe이나 transition 속성을 이용해서 애니메이션을 주도록 구현할 때도 있는데, 그럼 JS로 애니메이션을 주는것과 어떻게 다른걸까?
쉽게 생각해서, 간단한 효과와 성능에 중점을 둘 때는 CSS 애니메이션을 사용하고, 더 복잡하고 동적인 애니메이션을 구현해야 할 때는 개발자가 제어할 수 있게 유연성을 제공하는 JS 애니메이션을 사용하는 것이 일반적이다. 하지만 JS 애니메이션을 사용할 때는 CSS 애니메이션보다 더 많은 CPU 자원을 사용할 수 있으므로, 성능 측면에서 주의해야 한다. 간단한 애니메이션은 CSS로 해보자!

## Flex와 Grid의 차이점은?

레이아웃 방향

- Flex는 단일 축 방향의 레이아웃을 구성하는데 사용되며, 주로 수평 방향으로 레이아웃을 정렬한다.
- Grid는 수평과 수직 방향으로 레이아웃을 정렬할 수 있다.

아이템 크기

- Flex는 아이템들의 크기가 자유롭게 유동적으로 바뀔 수 있다.
- Grid는 아이템들의 크기를 미리 정의하여 각 셀의 크기를 일정하게 유지한다.

따라서 **Flex는 유동적인 레이아웃 변화를 위해, Grid는 레이아웃 변화가 적을때** 사용하는게 (미리 정의된 구조를 유지하기 때문에) 좋다!

# Javascript

## 자바스크립트가 동적인 언어인 이유는?

우선 자바스크립트 언어는 몇가지 특징과 함께 동적인 프로그래밍 언어로 인식된다. 어떤 특징들이 자바스크립트 언어가 유동적인 언어라고 불리도록 한걸까?

- 동적 타입 시스템: 변수의 타입을 선언하지 않고도 값에 따라 동적으로 타입이 결정된다.
- 동적 객체 모델: 객체의 프로퍼티를 동적으로 추가, 삭제, 수정할 수 있다.
- 함수의 일급 객체: 자바스크립트에서는 함수가 다른 값과 동일한 권한과 기능을 갖는 객체로 간주된다! 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하고 반환 값으로 사용할 수 있다.
- 프로토타입 기반 상속: 객체가 다른 객체를 상속받을 수 있다. 즉, 객체의 프로퍼티와 메서드를 동적으로 상속하고 재사용이 가능하다!

## 자바스크립트는 동기적으로 진행된다!

Javascript Runtime Environment, 하나의 싱글 컨텍스트 스택: 싱글 쓰레드 (Single Thread)
![image](https://github.com/hastella/My_Study/assets/66244752/f15529d2-2759-4c4e-a442-fbcb6382ccc2)

### 메모리 힙 & 콜스택 (동기성)

메모리 힙은 동적으로 할당되는 데이터 (객체, 배열 등)가 저장되는 공간이고, 콜 스택은 함수의 호출과 실행 순서를 기록하는 자료구조!

위의 이미지와 같이, 함수를 실행할 때 어떤 순서대로 동작해줄지는 Call Stack에 의해 결정된다. 따라서, **자바스크립트는 기본적으로 동기적으로 진행된다.** 하지만, 동기적으로 함수가 진행되는 경우에는, 만일 함수 하나의 실행 속도가 길어지는 경우 다른 함수의 실행에도 지장을 주게 되기 때문에, 비동기적인 작업을 처리해야 할 때는 비동기 API 함수들을 사용해주는 것이 좋다.

자바스크립트 런타임 환경에서 제공해주는 다양한 API들을 사용할 수 있다.

Web APIs

- Dom API
- setTimeout
- setInterval
- fetch
- eventListener

위와 같은 웹 API들은 비동기적으로 실행한다. 비동기 API 함수들은 주로 시간이 걸리는 작업을 처리하는 데 사용되는데, 이를 통해 웹 애플리케이션에서 동시에 여러 작업을 처리하거나 더 나은 사용자 경험을 제공할 수 있다. 비동기 함수에 대한 자세한 설명은 아래 비동기 함수 섹션에 자세히 정리해보려고 한다.<br>

### 이벤트 루프 & 태스크 큐 (비동기성)

비동기처리 매커니즘에 관련된 개념으로, 이벤트 루프는 실행 중인 작업이 완료되면 테스크 큐에서 다음 작업을 가져와 실행하여 비동기 작업을 관리하고, 비동기 작업의 완료를 기다리는 동안에도 다른 작업을 처리할 수 있도록 도와준다!

## App

어플리케이션을 실행시킬 때 필요한 메모리의 구성요소는 아래와 같이 나눠진다.

- Code: 개발자 작성 코드
- Data: 데이터, 변수
- Stack: 함수를 호출하는 실행순서
- Heap: 객체
  <br>

## Variable 변수: 값을 저장하는 공간 : 자료를 저장할 수 있는 이름이 주어진 기억장소

어플리케이션을 실행하게 되면 총 세가지의 일들이 발생한다.

1. 입력 (input): 사용자에게 입력을 받는다. - 마우스 또는 키보드를 통해
2. 처리 (process): 필요한 데이터를 처리한다. - 파일을 통해
3. 출력 (output): 처리된 데이터를 출력한다.
   - 모니터를 통해 사용자에게 보여주거나
   - 파일 시스템, 쿠키, 스토리지 같은 곳에 저장하여
   - 네트워크 통신을 통해 다른 백엔드나 서버로 데이터를 보내주어

이 중, 처리 과정을 위해서는 데이터를 임시적으로 보관하기 위한 변수가 필요하다.
(= 사용자에게 입력받은 데이터를 보관하여 처리를 위한 데이터 보관, 변수 선언이 필요하다.)
<br>

## Data Type

- 원시 primitive (단일 데이터): number, string, boolean, null, undefined, symbol
- 객체 object (복합 데이터): 상태, 행동

이중 원시타입은 App의 구성요소중 Data와 Stack에 저장되고, 객체타입은 Heap에 저장된다.
Heap에는 데이터의 크기가 정해져있지 않고, 동적으로 데이터의 저장될 수 있는 '객체' 데이터가 보관된다.
<br>

## Object 객체: 연관된 데이터를 함께 묶어서 보관할 수 있는 복합 데이터

객체를 생성할 때는 중괄호나 생성자 함수를 통해 만들어줄 수 있다.

```
const obj = {};
const obj = new Object();
```

**property**는 key와 value의 조합이다.
property 중 값을 함수로 가지는 것을 method라고 한다.

```
person = {
  key: value, // property (프로퍼티 eg. 성별, 국적, 이름, 나이)
  speak() { // 함수를 value로, 메서드 이름인 speak()를 key값으로 가진다.
    console.log("hello")
  }
}
```

객체에 접근을 할때에는 점 또는 대괄호 표기법으로 접근할 수 있다.

```
점 표기법: person.key, person.speak()
대괄호 표기법: person[key]
```

선언된 객체 자체는 Heap 메모리 자체에 저장되어 있고, 메모리 셀 하나 안에 객체의 값이 들어갈 수 없기 때문에 셀 여러개를 거쳐 객체가 할당 된다.
Heap이 아닌 원시 타입을 저장해두는 Data, Stack 메모리 셀에는 객체의 변수명이 저장된다.
<br>

### Shallow Copy 얕은 복사 : 객체는 메모리 주소를 전달한다!!

자바스크립트에서 복사할 때에는 항상 얕은 복사가 이루어진다. Array.from, concat, slice, spread(...), Object.assign 등은 얕은 복사를 한다. 얕은 복사는 객체의 메모리 주소를 복사하기 때문에, **원본 객체의 값이 바뀌면 복사된 객체의 값도 바뀐다.** 따라서 인자로 전달된 객체가 있다면 함수 내에서 객체를 직접 수정하는 것은 ❗️절대❗️ 좋지않다.<br>
❓ [원본 객체의 값이 바뀌면 복사된 객체의 값도 바뀐다.] → 그럼 복사된 객체의 값이 바뀌면 원본 객체의 값이 바뀌기도 할까?? 하고 궁금해져서 현재 레포의 shallowANDdeepCopy.js 폴더에서 테스트 해본 결과 알아낸 사실은<br>❗️**얕은 복사는 1단계 (1depth)까지만 복사가 이루어지고, 2단계 (2depth)이상의 중첩된 객체는 동일한 참조를 공유하게 된다.** 즉, 2단계부터는 복사본의 프로퍼티 값을 바꾸면 원본 객체와 같은 참조값을 공유하기 때문에 원본값도 같이 바뀌게 된다...!!!
<br>

❓ 그렇다면 1단계, 2단계에 대한 복사 차이가 나지 않도록, 얕은 복사가 아닌 복사 후 원본과 복사본이 서로 아무런 영향을 주지 않도록 독립성을 가진 복사본을 만들고 싶다면 어떻게 해야할까?<br>❗️ 그럴땐 깊은 복사를 통해 독립성을 보장하며 복사해줄 수 있다!
<br>

### Deep Copy 깊은 복사

얕은 복사는 참조 (메모리 주소)를 복사한다면, 깊은 복사는 객체나 배열과 같은 복합 데이터 구조를 복사하는 과정에서 객체의 내부까지 **재귀적으로 복사**하여 원본과 완전히 독립된 새로운 객체를 생성하는 것!
깊은 복사를 수행하면 원본과 복사본 간의 **독립성**이 보장되며, 한쪽의 변경이 다른 쪽에 영향을 주지 않는다.<br>

🗂 #완벽한깊은복사, #lodash, #cloneDeep

## Function 함수: 특정한 일을 수행하는 코드의 집합

👍🏻 유지보수성, 재사용 가능, 높은 가독성

❗️함수의 이름은 함수를 참조하고 있다. <br>**(이름은 data/stack에 저장, 함수는 heap에 저장)**

**인자를 받기 위해 함수 내부에서 생성한 변수를 매개변수** 라고 한다. 이 때, 인자는 함수를 호출할 때 넘겨주는 실제 값이고, 매개변수는 이 값을 받기 위해 함수 내부에서 만들어내는 변수를 말한다. 즉, **매개변수는** 함수 내부에서만 스코프를 유지하는 **지역변수**이다.
<br>

### 함수의 선언식과 표현식

**선언식**은 호이스팅에 의해 선언부가 먼저 처리되므로 (메모리에 먼저 저장되기 때문에) 어디에서든 호출할 수 있는 특징을 가진다. 즉, 자바스크립트 코드가 실행되기 전에 함수를 모두 정의해 두기 때문에 코드의 어디에서든 호출될 수 있다.

```
functionName() // 함수 호출
function functionName(parameters) {
  // 함수 동작 내용
}
```

**표현식**은 변수에 함수를 할당하는 형태로 사용된다. 즉, 코드 실행 중에(런타임) 함수가 할당되기 때문에, 호이스팅되지 않는다. 때문에 변수에 할당되기 전에 호출하면 에러가 발생한다.

```
functionName() // 에러 발생
var functionName = function(parameters) {
  // 함수 동작 내용
};
```

<br>

## ⬆️ 🆙 Hoisting 호이스팅

JS 엔진 (번역기, Interpreter)이 코드를 실행하기 전에 변수, 함수, 클래스의 선언문을 **끌어 올리는 것** (찾는다)을 말한다.

❓ 그럼 여기서 끌어 올린다는 것은 뭘 말하는걸까?<br>
![image](https://github.com/hastella/My_Study/assets/66244752/bf82963c-0883-471a-be75-ba23ad770f59)

- **변수**의 선언만 코드의 최상단으로 옮겨 초기값은 할당되지 않고 undefined로 초기화된다. 초기화는 나중에 실행 단계에서 처리되기 때문에, 변수 선언부가 실행되기 전에 변수를 참조하면 undefined가 반환되어 에러가 발생하게 된다.

- **클래스**의 경우도 변수와 비슷한 동작을 수행하는데, 클래스 선언부가 호이스팅되어 메모리에 저장되지만, 클래스가 할당되는 부분은 따로 처리되지 않는다.

즉, 선언과 초기화를 분리한 후, **선언만 코드의 최상단**으로 옮긴다. 이 경우 할당된 값은 이후에 선언문을 만날때에 처리되기 때문에 선언문 이전에 호출하면 에러가 발생하게 된다.<br>

```

console.log(hi);
// ReferenceError: Cannot access 'hi' before initialization
let hi = "hi";

const cat = new Cat();
// ReferenceError: Cannot access 'Cat' before initialization
class Cat {}

```

변수 할당 시, let 은 재할당이 필수로 필요한 경우에
-> 가능한 const를 사용하는 것이 좋다!
<br>

### 🤓 요약

❗️**변수 (let, const)와 클래스는 호이스팅은 되지만 선언 이전에 호출하면 에러가 발생<br> ❗️함수 선언식은 호이스팅되며 선언 이전에도 호출 가능<br> -> 자바스크립트 엔진은 코드를 실행하기 전에 함수 선언문을 찾고, 찾은 함수 선언문을 메모리에 먼저 등록하기 때문<br> ❗️함수 표현식 (화살표 함수)은 특정 변수로 받는 것이기 때문에 표현식이 정의된 시점 이후부터 접근 가능**
<br>

## 💩 var의 단점은?

변수 선언하는 키워드가 없이 선언 & 할당이 가능해서 선언인지, 재할당인지 구분하기 어렵다.

```
something = "something";
console.log(something);
```

중복 선언이 가능하다.

```
var sangchu = "🐶";
var sangchu = "🐶🐶";
console.log(sangchu);
```

var과 다르게 let은 같은 변수명으로 재선언 할 경우 에러가 발생한다.

    let num = 0;
    let num = 1;
    console.log(num);
    // SyntaxError: Identifier 'num' has already been declared

원래대로라면 블록 스코프 외부의 변수의 값을 호출해 주어야 하지만 var는 블록 스코프를 무시하고, 블록 스코프 내부의 변수의 값을 호출해 준다.

```
var apple = "🍎";
{
  var apple = "사과";
}
console.log(apple); // 사과
```

의외로? 함수 레벨 스코프만 지원 된다.

```
function example() {
  var sangchu = "🐶";
}
console.log(sangchu); // ReferenceError: sangchu is not defined
```

함수 내에서 선언된 var를 외부에서 호출 시도할 경우 ReferenceError가 발생한다.
<br>

## var, let, const의 차이는?

**var**은 앞 주제 var의 단점에서 다루었듯이, 변수의 **재선언과 재할당이 가능**하다. 때문에 선언인지, 재할당인지 구분이 어렵다. 이러한 단점을 보완하기 위해 ES6에서 도입된 let과 const가 있는데 이 두 선언 방식은 var과 어떻게 다른걸까?<br>
**let**은 블록 스코프를 가지는 변수 선언 방식이다. 즉, 중괄호 {}로 둘러싸인 블록 내에서만 접근이 가능하다. 따라서 호이스팅은 발생하지만 선언 이전에 변수에 접근하면 ReferenceError가 발생한다. **변수의 재할당은 가능하지만 var과 다르게 재선언은 허용되지 않는다.**<br>
**const** 또한 let과 함께 ES6에 도입된 상수를 선언하는 방식이다. let과 동일한 블록 스코프를 가지며, 중괄호{} 안에서만 접근이 가능하다. 상수이기에 **재할당이 불가하고, 선언과 동시에 초기화 해야 한다.**

## ==과 ===의 차이는?

**== 는 값의 동등성**을 비교할 때 타입 변환을 수행하고, **=== 는 값과 타입의 일치성**을 엄격히 비교한다. 타입 변환으로 인한 예상치 못한 결과를 피하기 위해서는 일치 연산자인 ===를 사용하는 것이 권장된다!

## Class 클래스: 객체를 생성할 수 있는 템플릿 (틀)

- 객체지향 프로그래밍 (Object - oriented Programming)
  : 프로그래밍 할때, 서로 밀접하게 연관되어 있는 요소들을 객체로 구성해 나가면서 객체끼리 서로 호환 가능하게 하는 것.

- 인스턴스 (instance)
  : 클래스를 통해 만들어진 객체

🗂 #getter(get()), #setter(set()), #privateField(#), #extends(상속), #super, #static
<br>

## Higher-order function 고차함수

고차함수는 인자로 함수를 받거나 (콜백함수) 함수를 반환하는 함수이다. 고차함수가 콜백함수를 인자로 받았다면, 함수 안에서 콜백함수가 필요할 때 호출할 수 있는 권한인 있기 때문에 높은 권한이 있다 라고 해서 Higher-order function, 고차함수로 부른다.

순수함수: 함수 안에서 '불변성'을 유지하는 것

- 함수 안에서 전달받은 매개변수나 함수 밖에서의 특정한 상태를 함수 내부에서 수정하지 않고 전달받은 인자를 통해서 실행 후 새로운 값을 return 하는 것.
- 에러는 줄이고 가독성은 증가시킬 수 있다.
- 함수형 프로그래밍: 이러한 순수함수들을 서로 묶어서 연결해놓는 것.
  데이터 변경 ❌, 변수 사용 ❌, 조건문 ❌, 반복문 ❌

🗂 #map, #reduce, #filter
<br>

## Iteration 이터레이션 💫

이터레이션 프로토콜 (Iteration Protocol) : 순회가 가능한, 반복 / 순회하는 규격, 약속, 인터페이스
즉, 자바스크립트에서 이터레이션 프로토콜을 따르는 객체는

- for...of
- spread

연산자를 사용할 수 있다.

Iteration Protocol을 따르는 자바스크립트 자료구조: Array, String, Map, Set
❓ 이 프로토콜을 따른다는 것은❓

- Iterable (순회 가능한) 프로토콜을 따라야 한다.

  ```
  {

    [Symbol.iterator](): Iterator (순회하는) 프로토콜
                          {
                          next(): 다음 값 (객체를 리턴해준다.)
                          }

  }
  ```

- Iterable 하다는건 순회가 가능하다!
- [Symbol.iterator] 가 있으면 iterable 하다고 한다.
- 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 return 한다는 것은, 순회 가능한 객체이다.
- 순회가 가능하면 무엇을 할 수 있나? for...of, spread 를 사용할 수 있다.
  <br>
- 객체는 iterable하지 않다!
- Object.prototype[Symbol.iterator] 가 없다.
- 하지만 for...in은 사용 가능하다.

<br>

## Spread 연산자

모든 Iterable은 spread 된다.

- concat 처럼 spread로 배열을 합쳐줄 수 있다.

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat
let arr = arr1.concat(arr2);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// spread
arr = [...arr1, ...arr2];
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

<br>

## Destructuring Assignment 구조분해 할당

구조분해 할당을 이용해서 중복성을 줄일 수 있다!

```
const stella = { name: "Stella", age: 21, job: "developer" };

function display({ name, age, job }) {
  // const name = stella.name; const age = stella.age; const job = stella.job; 구조분해 할당을 이용해서 중복을 줄일 수 있다.
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
```

<br>

## Set 세트

배열과 비슷하지만 Set은 순서가 없으며, **중복이 불가능**하다!

🗂 #set.size, #set.has, #set.forEach, #set.add, #set.delete, #set.clear
<br>

## Map 맵

키와 값으로 이루어진 자료구조
key - values

- set처럼 순서가 전혀 중요하지 않다.
- 키값이 유일함을 가지고 있어야 한다.
- 키값만 다르다면 **중복이 가능**하다!

object 객체와 아주 유사하여 Map을 객체처럼, 객체를 Map처럼 사용할 수 있다.

무조건 키값으로 찾는다! - 키값이 유일한 ID값이기 때문에.
🗂 #map.size, #map.has, #map.get, #map.forEach, #map.set, #map.delete, #map.clear
<br>

## 콜백함수 (callback function) 란 무엇일까?

arr.filter( ) 함수를 생각해보자. 우리는 주로 filter( ) 메서드를 사용할때 ( )안에 함수를 입력값으로 넣어 어떤값을 filter 해줄지 선언해준다. 이때, ( )안에 선언되는 함수가 바로 콜백함수이다! <br>그럼 filter는? 콜백함수를 호출해줄지 아닐지를 결정하기 때문에 고차함수가 된다!
즉, 콜백함수는 다른 함수에 전달되어 나중에 호출되는 함수로, 비동기적인 작업이나 어떤 이벤트가 발생했을 때 처리해야 할 로직을 다른 함수에게 알려주기 위해 사용된다. 이때 콜백 함수는 함수의 **인자로 전달되어 호출될 때 실행**된다!
<br>

## 비동기: 동시에 발생하지 않는다!

❓비동기 함수란?<br>❗️함수의 실행 결과가 즉시 반환되지 않고, 특정 조건이 충족될 때까지 기다리는 함수이다. 비동기 함수는 애플리케이션의 성능을 향상시키고, 사용자 인터페이스의 반응성을 유지하는 데 유용하다.

비동기 작업은 시간이 걸리므로 해당 작업이 완료되면 처리할 코드를 지정해야 한다. 이를 위해 콜백 함수(다른 함수의 인자로 넘겨져서 호출되는 함수)를 사용하여 작업 완료 시 호출되는 함수를 정의한다. A 함수의 매개변수로 B 함수가 들어가 A 함수가 모두 동작하면, B 함수를 실행할 수 있다. <br>이러한 원리로 콜백함수를 이용해서 비동기를 구현했지만, 콜백 함수가 많아질수록 (작업이 길어질수록, 매개변수로 계속 넘겨줄수록) 코드 파악이 어려워진다. <br>예를 들어, A 함수가 콜백함수를 받아 다음 다음 함수인 E 함수까지 불러올 경우, A 함수의 코드 흐름을 보기 위해서는 E 함수의 코드까지 확인을 해주어야 한다. <br>이러한 현상을 **콜백 지옥**이라고 한다. 콜백 지옥은 콜백 함수가 많아지거나 중첩됨으로써 코드의 가독성과 유지보수성이 저하되는 상황을 의미한다.

**프로미스(Promise)나 async/await과 같은 비동기 제어 패턴을 사용하면 콜백 지옥을 피할 수 있다.** 프로미스는 비동기 작업을 구조화하여 콜백 지옥을 방지하고, async/await은 프로미스를 기반으로 하여 동기적인 스타일로 코드를 작성할 수 있게 해 준다. 이를 통해 비동기 작업을 보다 간결하고 가독성이 좋은 코드로 작성할 수 있다.

🤓 요약: 비동기 함수는 일반적으로 콜백함수나 Promise 객체를 반환한다.
**콜백 함수**는 비동기 작업이 완료되었을 때 호출되는 함수이며,<br>**Promise 객체**는 비동기 작업이 성공적으로 완료되었는지, 실패했는지 나타내는 객체이다.
<br>

### Promise 프로미스

프로미스(Promise)는 비동기 함수의 반환 값을 다루기 위한 자바스크립트 객체. 비동기 함수는 프로미스를 반환할 수 있으며, 프로미스는 비동기 작업의 결과나 실패를 나타낸다.

```
function runInDelay(seconds) => { // 콜백함수는 받지 않아도 된다.
  return new Promise(); // promise 객체를 생성해서 작업의 결과나 실패를 나타내준다.
}

runInDelay(2)
  .then('일 수행')
  .catch('에러 캐치')

```

❗️then, catch, finally❗️

The Promise object represents the eventual completion (or failure) of an asynchronous operation (비동기 수행) and its resulting value.

세가지 상태중 하나의 상태를 가진다.

1. 대기 중(pending): 비동기 작업이 진행 중인 상태
2. 이행(fulfilled): 비동기 작업이 성공적으로 완료되어 결과 값을 반환한 상태
3. 거부(rejected): 비동기 작업이 실패하거나 오류가 발생한 상태

프로미스는 new Promise() 생성자를 사용하여 생성되며, 이 생성자의 콜백 함수는 두 개의 인자를 받는다. 첫 번째 인자는 resolve 함수로 성공적인 결과를 반환하고 프로미스를 이행시키는 역할을 한다. 두 번째 인자는 reject 함수로 오류 또는 실패를 처리하고 프로미스를 거부하는 역할을 한다.

```
const promise = new Promise(function(resolve, reject)) {
  resolve(value); // 성공시 resolve 호출
  reject(error); // 실패시 reject 호출
}
```

**즉, 프로미스는 비동기 함수의 반환 값을 처리하기 위한 자바스크립트 객체이며, 비동기 작업의 성공과 실패를 나타낸다. 프로미스는 비동기 작업을 보다 편리하게 다룰 수 있도록 도와주는 패턴이며, .then()과 .catch()를 사용하여 결과와 오류를 처리할 수 있다.**
<br />

### async & await의 사용법과 Promise

async & await는 비동기적인 작업을 처리할 수 있는 문법으로, async 함수를 정의하면 함수 내부에서 await 키워드를 이용하여 비동기적으로 처리되는 작업이 완료될 때까지 기다린 후, 결과값을 반환하는 처리를 한다. async 함수는 항상 Promise 객체를 반환하며, await 키워드를 이용하여 비동기 처리 결과를 기다린다. async & await는 Promise를 기반으로 하며, **Promise를 보다 간결하게 사용할 수 있도록 해준다.**
❓ async/ await가 간결하다는 이유는? <br>❗️ 기존의 비동기 처리 방식은 콜백 함수를 사용하거나 Promise 객체의 then과 catch를 연속적으로 체이닝하여 작성하여, 코드가 길어지고 가독성이 떨어진다. 하지만 async/ await를 이용하여 비동기 작업을 **동기적인 코드와 유사한 구조**로 작성할 수 있다. 이로 인해 **코드가 더 간결**해지고, 비동기 작업을 보다 **직관적으로** 이해할 수 있는 것이다!

```
const promise = new Promise(function(resolve, reject)) {
  resolve(value); // 성공시 resolve 호출
  reject(error); // 실패시 reject 호출
}

async function myAsyncFunction() {
  try {
    // promise가 처리될 때까지 대기
    const result = await promise;
    console.log(result); // "Success!"
  } catch (error) {
    console.error(error); // 에러가 발생하면 에러 내용을 출력
  }
}

myAsyncFunction();
```

<br>

## JSON: Javascript Object Notation

💡 data interchange format<br>JSON은 텍스트 형식을 사용하며, 주로 서버와 클라이언트 간의 HTTP 통신을 위해 사용된다. JSON을 객체 형태로 변환할 수 있으며, 객체 형태를 JSON으로 변환할 수도 있다.

**JSON.parse(string)**: JSON을 객체로 변환
**JSON.stringify(객체 변수)**: 객체를 JSON으로 변환

❓ 그렇다면 연동 작업을 할때 fetch API response 데이터를 객체로 받고 싶을때는?
❗️ Response.json( )을 통해 객체형태로 변환할 수 있다!
<br>

## Response.json( ): JS 객체로 변환해준다.

json() 메소드를 사용할 때, 실제로 JSON 데이터를 얻는 것이 아니라, JSON 데이터를 입력으로 사용하여 JavaScript 객체의 형태로 파싱한 결과를 얻게 된다! 이때 Response.json() 메서드는 response가 JSON 형식으로 되어 있을 것으로 가정하고, 그에 맞게 파싱을 시도해준다.<br>
❗️ Note that despite the method being named json(), the result is **not JSON** but is instead the result of taking JSON as input and parsing it to produce a **JS object**.

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
<br>

## 프로토타입 객체란? : original, sample

❓ 프로토타입 객체를 사용하는 주된 이유는? ❗️**상속** 개념을 통한 **코드 재사용**<br>
프로토타입은 객체 간에 속성과 메서드를 공유하는 방식으로 동작하며, 이를 통해 상속 개념을 구현할 수 있다.
Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어와 달리 **자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어**이다. 클래스 기반 객체지향 프로그래밍 언어는 객체 생성 이전에 클래스를 정의하고 이를 통해 객체(인스턴스)를 생성한다. 하지만 프로토타입 기반 객체지향 프로그래밍 언어 (자바스크립트)는 클래스 없이도 객체를 생성할 수 있다.

JS 에서의 모든 객체들은 Object라는 프로토타입을 가지고 있다.

![image](https://github.com/hastella/My_Study/assets/66244752/fdcce75c-dc2a-4be1-b297-a21942bd8337)

객체에서 공통적으로 쓰이는 함수를 Object라는 프로토타입을 만들어, 손쉽게 **객체간 상속**을 할 수 있다. 이때, 모든 JS 객체는 개별적으로 프로토타입을 상속하는 것이 아닌, 동일한 (단 하나의) Object 프로토타입을 **상속**한다.
![image](https://github.com/hastella/My_Study/assets/66244752/1c40f2f7-7600-41a8-a593-9d7c349cb9a9)

![image](https://github.com/hastella/My_Study/assets/66244752/7579f0d6-7f3f-4770-90fd-97c8a5020cc9)

객체간 상속의 연결 고리는 **프로토타입 체인**으로 연결 되어 있다.
![image](https://github.com/hastella/My_Study/assets/66244752/8cd6b537-f96e-432e-9394-e0f96262289e)

### 객체 불변성을 위한 동결, 밀봉, 확장 금지

Object.freeze 오브젝트 동결 추가 ❌, 삭제 ❌, 수정 ❌, 속성 재정의 ❌ (writable: false, configurable: false 등을 재정의 하는 것 불가능)

Object.seal 오브젝트 밀봉 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌

Object.preventExtensions 오브젝트 확장 금지 수정 ✅, 삭제 ✅, 추가 ❌

🗂 #freeze, #seal, #preventExtensions

<br>

## 인스턴스 vs. 프로토타입 레벨

프로토타입 레벨의 함수는 인스턴스 레벨의 함수와 달리 메모리를 공유한다.

```
function Person(name, age) {
  // 생성자 함수는 대문자로 만들어 준다. (일반 함수와 구별하기 위해)
  this.name = name;
  this.age = age;

  this.printName = () => {   // 인스턴스 레벨의 함수: 해당 함수가 필요하지 않은 객체를 생성하는 경우에도, 같이 포함이 되어 불필요한 메모리 차지를 하게 된다.
    console.log(this.name);
  };
}

Person.prototype.printName = function() {  // 프로토타입 레벨의 함수: 해당 함수가 필요한 객체에만 함수를 추가해주어 함수를 공유하면서 메모리를 필요할때에만 차지할 수 있다.
  console.log(this.name);
};
```

인스턴스 레벨의 함수는 생성되는 모든 객체에 함수가 포함되어 메모리를 많이 차지하지만, 프로토타입 레벨의 함수는 메모리를 공유하고 있다가 필요할 때에만 할당되어 메모리를 적게 차지한다.
❗️그렇기 때문에 프로토타입 레벨의 함수를 사용하는 것이 좋다❗️

<br>
그럼 이때 프로토타입 레벨의 함수에서는 화살표 함수는 사용할 수 없나?
없다!

```
<!-- Person.prototype.printName = () => {
  // 프로토타입 레벨의 함수는 화살표 함수를 사용할 경우 this가 프로토타입 객체를 가리키게 된다.
  // 인스턴스의 속성을 정상적으로 참조하지 못하고 undefined를 출력하게 된다.
  // 따라서 화살표 함수가 아닌 일반 함수를 사용해야 한다.
  console.log(this.name);
}; -->
```

<br>

## Scope 스코프

변수를 참조할 수 있는 (접근할 수 있는) 유효한 범위이며, 식별자 (변수, 함수, 클래스 이름)가 유효한 범위를 나타낸다. 따라서, 선언된 위치에 따라 유효 범위가 결정된다.
{
블럭 안의 변수는 **블럭 안**에서만 유효
}

**지역 스코프**는 함수가 종료되면 메모리에서 사라진다.
변수, 함수, 클래스 이름 충돌을 방지할 수 있으며, 메모리를 절약해줄 수 있다.
❗️ 변수는 최대한 필요한 곳에서 정의해 주는것이 좋다 ❗️

🗂 #전역 변수, #전역 스코프, #지역 변수, #지역 스코프
<br>

## 🚀 Closure 클로저

**함수가 선언된 환경의 스코프 (렉시컬 환경)를 기억하여 함수가 스코프 밖에서 실행될 때에도 기억한 스코프에 접근할 수 있게 만드는 문법**

클로저를 통해 내부함수에서 외부함수로 접근이 가능하다.<br>
❓ 언제/ 어떻게 클로저를 활용하는걸까?<br>❗️ 캡슐화를 통해 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해<br>
Encapsulation: “the packing of 데이터 and 함수 (메서드) into one component”<br>**캡슐화**: 객체지향 프로그래밍의 개념 중 하나로, **데이터와 해당 데이터를 조작하는 메서드들을 하나의 단위로** 묶는 것. 이를 통해 데이터의 접근을 제어하고, 데이터를 보호하고, 코드의 모듈성을 높인다.<br>

```
function setCounter() {
  let count = 0
  function increase() {
    count++;
    console.log(count);
  }
  return increase
}

const incCounter = setCounter()
// 내부 함수를 통해 외부 함수 렉시컬 환경의 count 변수에 접근하여 조작할 수 있다.
incCounter()  // 1
incCounter()  // 2
incCounter()  // 3
```

<br>

## 🗑 Garbage Collector 가비지 컬렉터

JavaScript, Python, Java 는 가비지 컬렉터가 자동으로 메모리를 관리해준다.

```
// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지됨!
const global = 1;
{
const local = 1;
// 로컬 변수는 블록이 끝나면 메모리에서 사라짐 -> garbage collector
}
```

<br>

## Execution Context 실행 컨텍스트

**실행 컨텍스트란 JS 엔진이 자바스크립트 코드를 실행할때 컴퓨터로부터 할당받은 메모리 공간에 코드, 변수, 함수 등 필요한 정보들을 저장해 두는 공간**이다. 이 때, 코드의 실행 순서와 스코프를 기억해 준다!<br>
<img width="535" alt="Screen Shot 2023-07-13 at 5 50 09 PM" src="https://github.com/hastella/My_Study/assets/66244752/27a12d39-0241-4d4a-80d8-af417a8593b8">
사진출처: 생활코딩<br>

식별자가 선언된 각각의 블록은 **렉시컬 환경 Lexical Environment** 라는 내부 오브젝트를 가지고 있다.
❓ 렉시컬 환경 : 함수가 선언될 당시의 환경을 기억하는 것

- 환경 레코드 Environment Record : 각각의 블록이 어떤 데이터를 가지고 있는지?
- 외부 환경 참조 Outer Lexical Environment Reference : 각각의 블록의 부모는 누구인지?
  <br>

## This : JS에서 문맥에 따라 this가 가리키는 것이 달라진다.

자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체를 가리킨다. 정적으로 인스턴스가 만들어지는 시점에 this가 바인딩된다.

하지만 자바스크립트에서는 this가 다른 언어와 다르게 동작한다. JS에서는 누가 호출하냐에 따라서 this가 달라진다. this는 함수가 호출되는 시점에 **동적으로 바인딩**된다.
<br>

```
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이 이름 출력!: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름 출력!: ${this.name}`);
  };
}
```

```
const cat = new Cat("냥이");
const dog = new Dog("상츄");
cat.printName();
dog.printName();
```

```
dog.printName = cat.printName; // this가 cat을 가리키게 된다.
dog.printName(); // 고양이 이름 출력!: 상츄
cat.printName(); // 고양이 이름 출력!: 냥이
```

<br>

❓ 왜 이런 일이 발생할까?<br>❗️ JS에서는 함수를 호출할 때, 함수를 호출한 주체를 this로 바인딩한다.
그래서 dog.printName()을 호출하면 dog가 this가 되고, cat.printName()을 호출하면 cat이 this가 된다.
그래서 dog.printName = cat.printName;을 했을 때, dog.printName()을 호출하면 this가 cat을 가리키게 된다.
<br>
❓ 그럼 어떻게 this가 항상 자신의 인스턴스를 가리키게 할 수 있을까?<br>❗️ 화살표 함수! 화살표 함수는 this를 바인딩하지 않는다.
<br>

## → 화살표 함수

화살표 함수는 렉시컬 환경에서의 this를 기억한다. 즉, 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.

- 문법이 깔끔하다.
- 생성자 함수로 사용이 불가능 -> 무거운 프로토타입을 만들지 않는다.
- 함수 자체 arguments 인자를 가지고 있지 않는다.
- 화살표 함수 외부의 arguments를 참조만 한다.
- this에 대한 바인딩이 정적으로 결정된다.
- 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 된다.

<br>

## Strict Mode 엄격모드

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

**'use strict'**
리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드로 설정되어 있다.

```

"use strict";
var x = 1;
// delete x;
// SyntaxError: Delete of an unqualified identifier in strict mode.
// strict mode를 사용하지 않는 경우에는 에러 발생 x

function add(x) {
var a = 2;
b = a + x;
}
add(1);
// ReferenceError: b is not defined
// strict mode를 사용하지 않는 경우에는 에러 발생 x

```

애플리케이션의 최상위 컴포넌트 또는 개별 컴포넌트에 적용시켜 사용할 수 있다.

<br>

## ⬆️ 이벤트 버블링 Event Bubbling

DOM에서의 특정 요소의 이벤트가 발생한 뒤, 해당 이벤트가 그 요소의 조상들에게까지 전달되어 트리거 되는 현상이다.
div > span > button (click!)

**🎯타겟 엘리먼트 (Target Element)**

이벤트 버블링이 일어났을 때 최초로 이벤트를 발생시킨 요소를 타겟 엘리먼트(Target Element)라고 한다. 이는 event.target 을 통해 접근 가능하다.<br>
**this 와 event.target의 차이점**

- event.target: 최초로 이벤트를 발생시킨 엘리먼트를 가리킨다.
- this (=event.currentTarget): 현재 이벤트가 발생된 엘리먼트를 가리킨다.<br>

## ⬇️ 이벤트 캡쳐링 Event Capturing

DOM에서의 특정 요소의 이벤트 발생했을 때, 해당 이벤트가 최상단의 부모 요소로부터 전달되어져 내려오는 현상이다.
html > body > div > p

이벤트 버블링과 캡쳐링이 일어나는 경우, 발생시키는 요소에 아래 함수를 추가해 버블링 / 캡쳐링을 막을 수 있다.

```
event.stopPropagation()
```

<br>

## 이벤트 위임

개별적인 자식 요소에 이벤트 리스너를 추가하는 대신 부모 요소에 이벤트 리스너를 추가하는 것! **"event listener to a parent element"**

이벤트 리스너는 자식 요소에서 발생하는 이벤트를 감지하기 위해 이벤트 버블링 / 캡처링을 사용하여 이벤트가 발생하면 해당 이벤트는 DOM 트리를 따라 버블링 되며 부모 요소의 이벤트 리스너를 트리거한다.

```
<div id="parent">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

```
const parent = document.getElementById('parent');

parent.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});
```

각 버튼태그에 이벤트 리스너를 주는게 아니라 하나의 이벤트 리스너를 부모 요소에 줘서 적용시켜준다.

즉, 이벤트 위임을 사용하여 하나의 이벤트 리스너로 여러개의 자식 요소를 다룰 수 있다. 이는 코드를 더 간결하게 해주며 특히 많은 자식 요소를 다뤄야 할때 효율성을 높일 수 있다!
<br>

## 불변성을 유지하려면 어떻게 할까?

개발을 할때에는 코드의 안정성을 위해 불변성을 유지하는 것이 매우 중요하다! 그럼 어떠한 방식들로 불변성을 유지할 수 있을까?

우선 재할당이 필요없는 변수 값들은 **const, 상수로 선언**해주는 연습을 한다!<br>배열의 불변성을 위해서는? 객체와 마찬가지로 기존 배열을 수정하는 것이 아닌, 새로운 배열을 생성한 후 concat(), slice(), map(), filter() 등으로 새로운 배열을 반환해준다.<br>객체의 불변성을 위해서는? 기존 객체를 변경하는 것이 아닌 새로운 객체를 생성해서 진행한다. Object.assign()이나 전개 연산자를 사용하여 객체를 복사하고 변경 후 새로운 객체를 반환해준다. 또는 자바스크립트에서 제공하는 메서드를 사용할 수 있다.<br>

- 객체 불변성을 위한 동결, 밀봉, 확장 금지
  Object.freeze 오브젝트 동결: 추가 ❌, 삭제 ❌, 수정 ❌, 속성 재정의 ❌ (writable: false, configurable: false 등을 재정의 하는 것 불가능)<br>Object.seal 오브젝트 밀봉: 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌<br>Object.preventExtensions 오브젝트 확장 금지: 수정 ✅, 삭제 ✅, 추가 ❌

  🗂 #freeze, #seal, #preventExtensions

## Web Storage 웹 스토리지

브라우저에 저장되는 키-값으로, 클라이언트에서만 조정이 가능하며 해당 url에서만 접근이 가능하다.

- **로컬 스토리지**: 브라우저가 종료되도 유지되는 데이터
- **세션 스토리지**: 같은 탭 내에서만 유지되는 데이터

**쓰기 (setItem), 접근 (getItem), 삭제 (removeItem)**
<br>

## Access Token & Refresh Token

Access Token은 사용자를 인증하고 권한 부여를 확인하는 데 사용, Refresh Token은 Access Token의 갱신에 사용<br>
Access Token이 만료된 경우 Refresh Token을 사용하여 새로운 Access Token을 발급받는다!<br>
일반적인 흐름은 사용자가 로그인하여 Access Token과 Refresh Token을 받고, Access Token을 사용하여 API에 접근한다. Access Token이 만료되면 Refresh Token을 사용하여 새로운 Access Token을 받아와 유효 기간이 짧은 Access Token을 주기적으로 갱신할 수 있으며, 보안성을 강화할 수 있다.
<br>

# React

## 프론트엔드 개발자로서 React를 사용하는 이유!

React는 Facebook에서 개발된 프론트엔드 라이브러리로, 대규모의 생태계를 가지고 있다. 커뮤니티가 크고 다양한 라이브러리, 도구가 있어서 개인적으로는 공부하며 학습해 나가기에는 React가 수월하다고 생각해서 Vue가 아닌 React로 진행하고 있다. React를 충분히 학습하고 익힌 이후에 Vue도 학습해보고 싶다!

## Virtual DOM은 무엇이며 작동 원리는?

가상 DOM은 메모리 내에서 가상으로 렌더링되는 가벼운 복사본으로서, 변경된 부분만 실제 DOM에 적용하여 UI를 업데이트 한다. 이를 통해 효율적인 UI 업데이트를 가능하게 하며 성능 향상과 빠른 렌더링이 가능해진다.

## state를 직접 변경하지 않고 useState 훅을 이용하는 이유는?

useState는 React의 **불변성** 원칙과 성능 최적화를 지원하며, 코드의 가독성과 **유지보수성**을 향상시킨다!<br>
컴포넌트의 state는 불변성을 유지해야 React가 상태 변경을 감지하고 적절한 업데이트를 수행할 수 있는데, **상태를 직접 변경하면 React는 이전과 현재 상태의 차이를 판단하기 어려워지고, 업데이트를 제대로 수행할 수 없다.** <br>❓ 이유는? React는 가상 DOM을 사용하여 이전과 현재의 DOM 트리를 비교하여 변경 사항을 결정하는데, 상태를 직접 변경하면 React는 상태 업데이트를 추적하지 못하고, 가상 DOM 비교에 필요한 변경 사항을 정확히 파악할 수 없게 된다. <br>반면에, useState는 새로운 상태값과 해당 상태를 업데이트하는 함수를 제공하므로, 상태 변경이 어떻게 이루어지는지 명확하게 알 수 있고, 이를 통해 코드의 가독성과 유지보수성이 향상된다.

## 생명 주기 메서드

클래스형 컴포넌트에서 사용되는 주요 생명주기 메서드

- componentDidMount( ): 컴포넌트가 최초로 DOM에 마운트된 직후에 호출
- componentDidUpdate(prevProps, prevState): 컴포넌트가 업데이트되고 리렌더링된 후에 호출
- componentWillUnmount( ): 컴포넌트가 언마운트되어 DOM에서 제거되기 전에 호출

함수형 컴포넌트에서 사용되는 주요한 생명주기 훅

- useEffect( ): 컴포넌트가 마운트되거나 업데이트된 직후에 호출 (클래스형 컴포넌트의 componentDidMount + componentDidUpdate와 유사한 역할) - **비동기적**
- useLayoutEffect( ): useEffect()와 유사하지만, 렌더링 이후 DOM 업데이트 전에 **동기적**으로 호출

## HOC (Higher-Order Component)?

React에서 사용되는 디자인 패턴 중 하나로, 함수형 프로그래밍의 개념을 활용하여 컴포넌트를 감싸고, 새로운 컴포넌트를 반환하는 함수이다!<br>
❓ 언제 사용할까?<br>❗️ 컴포넌트간의 **로직을 재사용**하고, **공통 기능**을 구현하는 데 사용한다. 예를 들어, 여러 컴포넌트에서 동일한 인증 기능을 사용해야 한다면, HOC를 활용하여 인증 로직을 담당하는 HOC를 만들고 해당 로직을 재사용할 수 있다.<br>
❓ 어떻게 사용할까?<br>❗️ 기존 컴포넌트를 매개변수로 받아 새로운 기능을 추가한 새로운 컴포넌트를 반환. HOC는 고차 함수(higher-order function)로서, **컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수**라고 생각하면 된다!
<br>_이전에 구현해본 isLoggedIn 기능을 HOC로 어떻게 구현할지 한번 고민해보기_
<br>

## package.json 에서 "dependencies" 와 "devDependencies"

```
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },

  "devDependencies": {
    "eslint-config-react-app": "^7.0.1"
  }
```

React로 프로젝트 작업을 할 때, package.json 파일을 통해 프로젝트에 대한 정보와 의존성 패키지를 관리한다. 이때 "dependencies"와 "devDependencies"의 차이는 뭘까? <br>"dependencies"는 프로젝트를 배포할 때에도 함께 작동해야하는 의존성 패키지들의 묶음이고, "devDependencies"는 개발자가 프로젝트를 개발하고 테스트하는 동안 필요한 패키지들의 묶음이다. 즉 **"dependencies"는 프로덕션 환경에서 필요**한 패키지들을 나타내는 프로퍼티이며, **"devDependencies"는 개발 단계에서만 필요**한 패키지들을 나타내는 프로퍼티이다!
<br>

## 리액트에서 JSX 문법이 어떻게 사용될까?

JSX는 JavaScript 확장 문법으로 하나의 파일에서 자바스크립트와 html을 동시에 작성할 수 있다.
<br>

## Context API: 상태값을 전역적으로 관리해 줄때!

Context API는 React의 **상태 관리 패턴 중 하나로, 컴포넌트 트리 전체에서 데이터를 공유하기 위한 메커니즘을 제공**한다.

❓ 두 컴포넌트의 상태값을 공유해야 한다면?<br>❗️ state를 가장 근접한 부모 컴포넌트로 올린다! 그리고 자식 컴포넌트에게 props로 전달.<br>
하지만 아래, 아래의 자식 컴포넌트에 계속해서 전달 (prop drilling)해야 한다면 모든 컴포넌트마다 props로 전달하게 되어 비효율적이게 된다! 따라서 이를 해결하기 위해 Context API를 사용해 어플리케이션 전반적으로 필요한 경우에 사용해준다. (언어, 다크모드, 로그인 여부 등)
<br>

## React Hook

React 함수형 컴포넌트에서 상태 관리와 다른 React 기능을 사용할 수 있게 해주는 기능으로, React Hook을 통해 함수형 컴포넌트에서도 상태를 관리하고 생명주기 메서드와 유사한 동작을 수행할 수 있게 되었다.

- useState(): useState()는 상태를 관리하기 위한 훅으로, 함수형 컴포넌트 내에서 상태 변수와 해당 상태를 업데이트하는 함수를 제공한다.
- useEffect(): useEffect()는 생명주기 메서드와 유사한 동작을 수행하는 훅으로, 컴포넌트가 마운트, 업데이트, 언마운트될 때 특정 동작을 수행할 수 있다.

## 클래스형 컴포넌트 vs. 함수형 컴포넌트

- 상태관리<br>클래스형 컴포넌트: this.state를 사용하여 상태(state)를 관리. setState() 메서드를 호출하여 상태를 업데이트하고, 생명주기 메서드를 사용하여 상태 변화에 따른 작업을 수행할 수 있다.<br>함수형 컴포넌트: useState() 훅을 사용하여 상태를 관리. useState()는 상태값과 해당 상태를 업데이트하는 함수를 반환한다.
  <br>

- 컴포넌트 구성<br>클래스형 컴포넌트: 복잡한 컴포넌트 계층 구조에서는 컴포넌트 간의 계층 구조를 쉽게 구성. this.props를 통해 부모 컴포넌트로부터 전달된 속성값을 사용할 수 있다.<br>함수형 컴포넌트: 함수의 형태로 작성되기 때문에, 더 간단하고 읽기 쉬운 구조. 속성값은 함수의 인자로 전달되며, 부모 컴포넌트로부터 전달된 속성값을 사용할 수 있다.<br>최근 리액트에서는 함수형 컴포넌트와 Hooks 사용을 권장하고 있다!

## props와 state의 차이는?

**props는** 컴포넌트 간에 데이터를 전달하기 위한 메커니즘이고, 단방향으로 전달되어 자식 컴포넌트에서는 **읽기 전용**으로 사용된다! 반면에 **state는** 컴포넌트 내에서 **변경 가능**한 데이터를 관리하는 경우에 사용되며, 컴포넌트 내부에서 변경이 이루어지고 다시 렌더링되어 UI에 반영된다.

## Immer란 뭘까?

React Immer는 **불변성을 유지하면서 상태를 간편하게 업데이트**할 수 있도록 도와주는 라이브러리! React에서 상태를 업데이트할 때는 불변성을 유지하기 위해 새로운 객체를 생성하거나 배열을 복사하는 등의 작업을 해야하지만 Immer를 통해 번거로운 작업 없이 원본 상태를 직접 수정하는 것처럼 보이는 코드를 작성할 수 있다.

## Form을 만드는법!

Form에 있는 input 데이터는 사용자가 바로 수정하고 눈으로 확인 가능하기 때문에, uncontrolled component이며, React가 추구하는 원칙과 어긋난다. React의 UI 업데이트는 상태로부터 발생되어야 하기 때문이다! 그래서 Form을 사용할때는 항상 상태를 이용해서 value는 상태값을 출력하고 onChange가 발생할때마다 상태를 업데이트 해줘야 한다. 이 때, 상태는 개별적으로 관리해도 되지만 연관된 데이터라면 객체로 묶어서 관리할 수 있다. useState, useReducer, useImmer를 통해 모두 가능하다!

```
const [form, setForm] = useState({
    name: "",
    email: "",
});
```

## textArea에서 e.target.value값이 빈값인지 확인해주는 식
```
if (/^\s*$/.test(e.target.value)) {
    postActive.value = false;
  }
```
이런식으로 /^\s*$/.test(e.target.value) 을 통해 확인해줄 수 있다. 내 경우에는 빈값인 경우에는 등록 버튼을 비활성화 시켜주기 위해서 사용했다!

## Typescript를 사용하는 이유?

타입스크립트는 **정적 타입**을 지원하여 코드의 안정성을 높여준다. 변수, 함수, 객체 등에 타입을 주어 타입 실수를 방지하고 코드의 일관성을 유지할 수 있다. 컴파일 시점에 타입 오류를 확인하기 때문에 **런타임 에러를 줄이고 안정성을 향상**시켜준다! 뿐만 아니라 다른 동료 개발자들이 코드를 이해하기 쉽고 **유지보수**에 도움이 된다.<br>

## TypeScript + React의 조합의 장점!

정적 타입을 지원하는 typescript 언어와 react의 조합으로 우선 코드 작성중에 오류를 사전에 감지할 수 있으며, 타입을 명시적으로 지정하여 코드의 가독성 또한 높여주게 된다. 협업시에 개발자들끼리도 서로 코드를 이해하기에 도움이 된다. 정적 타입을 지정해줌으로써, 전반적인 코드의 안정성을 향상시켜 주는 것이다!
<br>

# Vue2

## new + Vue (전역 객체)을 통해 통해 인스턴스 생성

- el: Dom 요소 지정
- data: data 객체 정의
- computed: 함수로 정의, 계산된 값 리턴
- methods: 함수로 정의, 계산된 값 리턴

# Vue3

## createApp을 통해 인스턴스 생성

```
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

- mount: DOM 요소 지정

## .vue 확장자 파일안에 script/ template/ style

```
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>
```

script 태그 안에는 javascript 코드를!

```
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
```

template 안에는 html 코드를!

```
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
```



style 태그 안에는 css 코드를!
❓ **scoped** 의 역할은?
❗️ scoped가 적용되면 해당 클래스명의 css 스타일들은 현재 파일 내에서만 적용이 된다. 즉 다른 .vue 파일에서 이름만 같은 클래스명의 css 스타일을 사용할 수 있다.
<br>

## Pinia: Vue.js의 상태 관리 라이브러리 중 하나

Composition API를 활용하여 간편하게 상태를 관리할 수 있도록 도와준다!

### Pinia 사용 예시 코드

#### 1. pinia 설정

```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

#### 2. 상태 정의: Pinia에서는 상태(State)를 Store라는 개념으로 정의.

- Store는 모듈화된 형태로 각각의 상태와 상태 변경 메서드를 포함한다!

```
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
```

#### 3. 컴포넌트에서 사용:

```
<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore,
    }
  },
}
</script>
```
