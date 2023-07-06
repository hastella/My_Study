## 🤓 고민하고 공부하며 기록하는 페이지!

# 👾 프로그램이란?

프로그램은 컴퓨터에게 특정 작업을 수행하도록 지시하는 '코드 덩어리'! **명령어와 데이터의 집합**이다. 프로그래머로서 프로그램을 개발할 때 어떻게 메모리를 가장 효율적으로 사용하며 개발할 수 있을지를 고민해 봐야한다고 생각된다.

# CS

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

- 캡슐화 (Encapsulation): 객체 내부에 있는 속성은 외부에서 직접 접근할 수 없으므로 이는 객체의 내부 구현을 외부로부터 감추고, 객체의 일관성과 보안성을 높여준다.

- 상속 (Inheritance): 상속은 기존의 클래스로부터 새로운 클래스를 생성하는 개념이다. 상속을 통해 기존 클래스의 속성과 메소드를 재사용하고 확장할 수 있어 코드 재사용성과 유지보수성을 향상시킨다.

## 자료구조 stack과 queue의 차이는?

stack과 queue 모두 일렬로 정렬된 데이터를 다루는 자료구조이다. <br>우선 **스택은 프링글스** 통을 생각하면 이해가 쉽다! Last In First Out으로, 가장 최근에 추가된 데이터가 가장 먼제 삭제된다. push와 pop을 통해 요소를 추가/ 삭제하며, top은 스택의 맨 위에 있는 데이터를 반환한다.<br>**큐는 줄서는 사람들**을 생각하면 이해가 쉽다! First In First Out으로 가장 오래된 데이터부터 삭제된다. enqueue와 dequeue를 통해 요소를 추가/ 삭제하며, front는 맨 앞에 있는 데이터를 반환한다.
<br>

## 프로세스와 스레드란?

- 프로세스(Process)는 운영 체제에서 실행 중인 프로그램으로, 프로그램에 필요한 코드, 데이터, 메모리 등의 자원과 실행 상태 정보를 가지고 있다. 운영 체제는 각각의 프로세스에 **독립적인 메모리 공간을 할당**하고, 프로세스들을 관리한다. 독립된 실행 환경을 가지므로, 여러 개의 프로세스는 동시에 실행될 수 있고, 각각의 프로세스는 **서로 간에 독립된 실행 흐름**을 가지게 된다. 이를 통해 여러 프로그램을 동시에 실행하거나, 프로그램 간에 데이터를 공유하거나 통신할 수 있는 것이다!
- 스레드(Thread)는 프로세스 내에서 실행되는 작업의 단위로, 프로세스는 하나 이상의 스레드를 가질 수 있으며, 각각의 스레드는 독립적으로 실행될 수 있다. 스레드는 **프로세스 내부에서 메모리와 자원을 공유**하는 특징을 가져 **여러 작업을 병렬로 처리하거나 동시에 실행**할 수 있어 프로그램의 성능을 향상시키는 데 활용된다. 하지만 동시에 실행되는 스레드가 동일한 자원에 접근하고 수정할 때 예기치 않은 결과가 발생할 수 있기 때문에 스레드 간의 동기화와 데이터 공유에 주의해야 한다!<br>

**🤓 요약**: 프로세스와 스레드는 프로그램 실행의 단위를 나타내는 개념으로, 프로세스는 독립된 실행 환경을 갖고 스레드는 프로세스 내에서 실행되는 작업의 단위이다.

## CSR 과 SSR : 렌더링 방식의 차이

❓ Client-Side-Rendering & Server-Side-Rendering로 각 각 클라이언트와 서버에서 렌더링을 한다는 특징을 지니고 있다. 이렇게 클라이언트와 서버에서 렌더링 할 경우 어떤 차이점이 발생하게 될까?

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

## SPA와 MPA : 구조와 동작 방식의 차이

❓ Single Page Application & Multiple Page Application으로
단일 페이지의 HTML 페이지와 여러개의 독립적인 HTML 페이지로 구성된 웹 어플리케이션을 나타낸다. 이렇게 다른 구조의 웹 어플리케이션은 어떤 차이를 만들어낼까?

SPA는 하나의 HTML 페이지가 로드되고 이후에는 동적으로 데이터를 가져와서 해당 페이지 내에서 콘텐츠를 업데이트하여 사용자 경험에 효율적이고, MPA는 서버로부터 완전한 HTML을 받아와 렌더링되어 검색 엔진이 쉽게 콘텐츠를 크롤링하고 인덱싱할 수 있다.

# HTML, CSS

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

**CSS: ⤵ Cascading Style Sheets**을 사용하여 HTML 요소의 스타일과 레이아웃을 지정한다. <br>❓ cascading: 계단식의, 폭포처럼<br>❗️ 스타일 규칙을 **우선순위를 가진채 계단식**으로 적용하고, **상위 요소에서 하위 요소로 폭포처럼** 퍼져나가는 즉, 상위 요소에 적용된 스타일이 하위 요소에도 적용된다!

**styled-components**는 JavaScript 코드 안에서 CSS를 작성하는 방식으로, 컴포넌트 단위로 스타일을 정의하고 적용. JavaScript 코드가 실행될 때 해당 스타일이 동적으로 생성되고, 최종적으로 브라우저에서 렌더링된다.<br>**Tailwind CSS**는 CSS 클래스를 사용하여 스타일을 적용하는 방식으로, 미리 정의된 클래스를 HTML 요소에 적용. Tailwind CSS는 사전에 정의된 클래스의 집합을 제공하며, 이를 조합하여 필요한 스타일을 쉽게 적용할 수 있다.<br>

❓ 그럼 이 두 방식은 브라우저 렌더링 과정을 거칠때 css와 같은 원리를 거칠까?<br>❗️ 그렇다! styled-components와 Tailwind CSS는 CSS 코드를 더 효율적이고 생산적으로 작성하고 관리할 수 있게 도와주는 도구다. 브라우저 렌더링의 원리는 역시 동일하게 적용된다!<br>

# Javascript

### App

어플리케이션을 실행시킬 때 필요한 메모리의 구성요소는 아래와 같이 나눠진다.

- Code: 개발자 작성 코드
- Data: 데이터, 변수
- Stack: 함수를 호출하는 실행순서
- Heap: 객체
  <br>

### Variable 변수: 값을 저장하는 공간 : 자료를 저장할 수 있는 이름이 주어진 기억장소

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

### Data Type

- 원시 primitive (단일 데이터): number, string, boolean, null, undefined, symbol
- 객체 object (복합 데이터): 상태, 행동

이중 원시타입은 App의 구성요소중 Data와 Stack에 저장되고, 객체타입은 Heap에 저장된다.
Heap에는 데이터의 크기가 정해져있지 않고, 동적으로 데이터의 저장될 수 있는 '객체' 데이터가 보관된다.
<br>

### Object 객체: 연관된 데이터를 함께 묶어서 보관할 수 있는 복합 데이터

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

#### Shallow Copy 얕은 복사 : 객체는 메모리 주소를 전달한다!!

자바스크립트에서 복사할 때에는 항상 얕은 복사가 이루어진다. Array.from, concat, slice, spread(...), Object.assign 등은 얕은 복사를 한다. 얕은 복사는 객체의 메모리 주소를 복사하기 때문에, 원본 객체의 값이 바뀌면 복사된 객체의 값도 바뀐다. 따라서 인자로 전달된 객체가 있다면 함수 내에서 객체를 직접 수정하는 것은 ❗️절대❗️ 좋지않다.<br>
❓ 그럼 얕은 복사가 아닌 복사 후 원본과 복사본이 서로 아무런 영향을 주지 않도록 독립성을 가진 복사본을 만들고 싶다면 어떻게 해야할까?<br>❗️ 그럴땐 깊은 복사를 통해 독립성을 보장하며 복사해줄 수 있다!
<br>

#### Deep Copy 깊은 복사

얕은 복사는 참조 (메모리 주소)를 복사한다면, 깊은 복사는 객체나 배열과 같은 복합 데이터 구조를 복사하는 과정에서 객체의 내부까지 **재귀적으로 복사**하여 원본과 완전히 독립된 새로운 객체를 생성하는 것!
깊은 복사를 수행하면 원본과 복사본 간의 **독립성**이 보장되며, 한쪽의 변경이 다른 쪽에 영향을 주지 않는다.<br>

🗂 #완벽한깊은복사, #lodash, #cloneDeep

### Function 함수: 특정한 일을 수행하는 코드의 집합

👍🏻 유지보수성, 재사용 가능, 높은 가독성

❗️함수의 이름은 함수를 참조하고 있다. <br>**(이름은 data/stack에 저장, 함수는 heap에 저장)**

**인자를 받기 위해 함수 내부에서 생성한 변수를 매개변수** 라고 한다. 이 때, 인자는 함수를 호출할 때 넘겨주는 실제 값이고, 매개변수는 이 값을 받기 위해 함수 내부에서 만들어내는 변수를 말한다. 즉, **매개변수는** 함수 내부에서만 스코프를 유지하는 **지역변수**이다.
<br>

#### 함수의 선언식과 표현식

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

### ⬆️ 🆙 Hoisting 호이스팅

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

#### 🤓 요약

❗️**변수 (let, const)와 클래스는 호이스팅은 되지만 선언 이전에 호출하면 에러가 발생<br> ❗️함수 선언식은 호이스팅되며 선언 이전에도 호출 가능<br> -> 자바스크립트 엔진은 코드를 실행하기 전에 함수 선언문을 찾고, 찾은 함수 선언문을 메모리에 먼저 등록하기 때문<br> ❗️함수 표현식 (화살표 함수)은 특정 변수로 받는 것이기 때문에 표현식이 정의된 시점 이후부터 접근 가능**
<br>

### 💩 var의 단점

1. 변수 선언하는 키워드가 없이 선언 & 할당이 가능함

- 선언인지, 재할당인지 구분하기 어렵다

```

something = "something";
console.log(something);

```

2. 중복 선언이 가능함

```

var poo = "💩";
var poo = "💩💩";
console.log(poo);

```

let은 같은 변수명으로 재선언 할 경우 에러가 발생한다.

    let num = 0;
    let num = 1;
    console.log(num);
    // SyntaxError: Identifier 'num' has already been declared

3. 블록 스코프를
   var apple = "🍎";
   {
   var apple = "사과";
   }
   console.log(apple); // 사과

원래대로라면 블록 스코프 외부의 변수의 값을 호출해 주어야 하지만 var는 블록 스코프를 무시하고, 블록 스코프 내부의 변수의 값을 호출해 준다.

4. 의외로? 함수 레벨 스코프만 지원 된다.

```

function example() {
var dog = "🐶";
}
console.log(dog); // ReferenceError: dog is not defined

```

함수 내에서 선언된 var를 외부에서 호출 시도할 경우 referenceError가 발생한다.
<br>

### Class 클래스: 객체를 생성할 수 있는 템플릿 (틀)

- 객체지향 프로그래밍 (Object - oriented Programming)
  : 프로그래밍 할때, 서로 밀접하게 연관되어 있는 요소들을 객체로 구성해 나가면서 객체끼리 서로 호환 가능하게 하는 것.

- 인스턴스 (instance)
  : 클래스를 통해 만들어진 객체

🗂 #getter(get()), #setter(set()), #privateField(#), #extends(상속), #super, #static
<br>

### Higher-order function 고차함수

고차함수는 인자로 함수를 받거나 (콜백함수) 함수를 반환하는 함수이다. 고차함수가 콜백함수를 인자로 받았다면, 함수 안에서 콜백함수가 필요할 때 호출할 수 있는 권한인 있기 때문에 높은 권한이 있다 라고 해서 Higher-order function, 고차함수로 부른다.

순수함수: 함수 안에서 '불변성'을 유지하는 것

- 함수 안에서 전달받은 매개변수나 함수 밖에서의 특정한 상태를 함수 내부에서 수정하지 않고 전달받은 인자를 통해서 실행 후 새로운 값을 return 하는 것.
- 에러는 줄이고 가독성은 증가시킬 수 있다.
- 함수형 프로그래밍: 이러한 순수함수들을 서로 묶어서 연결해놓는 것.
  데이터 변경 ❌, 변수 사용 ❌, 조건문 ❌, 반복문 ❌

🗂 #map, #reduce, #filter
<br>

### Iteration 이터레이션 💫

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

### Spread 연산자

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

### Destructuring Assignment 구조분해 할당

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

### Set 세트

배열과 비슷하지만 Set은 순서가 없으며, **중복이 불가능**하다!

🗂 #set.size, #set.has, #set.forEach, #set.add, #set.delete, #set.clear
<br>

### Map 맵

키와 값으로 이루어진 자료구조
key - values

- set처럼 순서가 전혀 중요하지 않다.
- 키값이 유일함을 가지고 있어야 한다.
- 키값만 다르다면 **중복이 가능**하다!

object 객체와 아주 유사하여 Map을 객체처럼, 객체를 Map처럼 사용할 수 있다.

무조건 키값으로 찾는다! - 키값이 유일한 ID값이기 때문에.
🗂 #map.size, #map.has, #map.get, #map.forEach, #map.set, #map.delete, #map.clear
<br>

### 비동기: 동시에 발생하지 않는다!

Javascript Runtime Environment, 하나의 싱글 컨텍스트 스택: 싱글 쓰레드 (Single Thread)
![image](https://github.com/hastella/My_Study/assets/66244752/f15529d2-2759-4c4e-a442-fbcb6382ccc2)

함수를 실행할 때 어떤 순서대로 동작해줄지는 call Stack에 의해 결정된다. 따라서, **자바스크립트는 기본적으로 동기적으로 진행된다.** 하지만, 동기적으로 함수가 진행되는 경우에는, 만일 함수 하나의 실행 속도가 길어지는 경우 다른 함수의 실행에도 지장을 주게 되기 때문에, 비동기적인 작업을 처리해야 할 때는 비동기 API 함수들을 사용해주는 것이 좋다.

자바스크립트 런타임 환경에서 제공해주는 다양한 API들을 사용할 수 있다.

Web APIs

- Dom API
- setTimeout
- setInterval
- fetch
- eventListener

위와 같은 웹 API들은 비동기적으로 실행한다. 비동기 API 함수들은 주로 시간이 걸리는 작업을 처리하는 데 사용되는데, 이를 통해 웹 애플리케이션에서 동시에 여러 작업을 처리하거나 더 나은 사용자 경험을 제공할 수 있다.<br>
비동기 작업은 시간이 걸리므로 해당 작업이 완료되면 처리할 코드를 지정해야 한다. 이를 위해 콜백 함수(다른 함수의 인자로 넘겨져서 호출되는 함수)를 사용하여 작업 완료 시 호출되는 함수를 정의한다. A 함수의 매개변수로 B 함수가 들어가 A 함수가 모두 동작하면, B 함수를 실행할 수 있다. <br>
이러한 원리로 콜백함수를 이용해서 비동기를 구현했지만, 콜백 함수가 많아질수록 (작업이 길어질수록, 매개변수로 계속 넘겨줄수록) 코드 파악이 어려워진다. <br>예를 들어, A 함수가 콜백함수를 받아 다음 다음 함수인 E 함수까지 불러올 경우, A 함수의 코드 흐름을 보기 위해서는 E 함수의 코드까지 확인을 해주어야 한다. <br>이러한 현상을 **콜백 지옥**이라고 한다. 콜백 지옥은 콜백 함수가 많아지거나 중첩됨으로써 코드의 가독성과 유지보수성이 저하되는 상황을 의미한다.

**프로미스(Promise)나 async/await과 같은 비동기 제어 패턴을 사용하면 콜백 지옥을 피할 수 있다.** 프로미스는 비동기 작업을 구조화하여 콜백 지옥을 방지하고, async/await은 프로미스를 기반으로 하여 동기적인 스타일로 코드를 작성할 수 있게 해 준다. 이를 통해 비동기 작업을 보다 간결하고 가독성이 좋은 코드로 작성할 수 있다.

<br>

#### Promise 프로미스

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

#### async & await

프로미스의 개념을 사용한 문법이지만, 보다 가독성 있게 코드를 표현할 수 있다.
비동기로 사용할 함수앞에 async 키워드를 붙여주면, 해당 함수는 항상 프로미스를 반환하게 된다.
-> 비동기 함수를 호출하면서 호출코드 앞에 await를 붙여주면, 프로미스가 값을 반환하기를 기다렸다가 반환된 값을 변수에 할당해준다.
<br>

### JSON: Javascript Object Notation

💡 data interchange format<br>
JSON은 텍스트 형식을 사용하며, 주로 서버와 클라이언트 간의 HTTP 통신을 위해 사용된다. JSON을 객체 형태로 변환할 수 있으며, 객체 형태를 JSON으로 변환할 수도 있다.

**JSON.parse(string)**: JSON을 객체로 변환
**JSON.stringify(객체 변수)**: 객체를 JSON으로 변환

❓ 그렇다면 연동 작업을 할때 fetch API response 데이터를 객체로 받고 싶을때는?
❗️ Response.json( )을 통해 객체형태로 변환할 수 있다!
<br>

### Response.json( ): JS 객체로 변환해준다.

json() 메소드를 사용할 때, 실제로 JSON 데이터를 얻는 것이 아니라, JSON 데이터를 입력으로 사용하여 JavaScript 객체의 형태로 파싱한 결과를 얻게 된다! 이때 Response.json() 메서드는 response가 JSON 형식으로 되어 있을 것으로 가정하고, 그에 맞게 파싱을 시도해준다.<br>
❗️ Note that despite the method being named json(), the result is **not JSON** but is instead the result of taking JSON as input and parsing it to produce a **JS object**.

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
<br>

### 프로토타입 객체란? : original, sample

❓ 프로토타입 객체를 사용하는 주된 이유는? ❗️**상속** 개념을 통한 **코드 재사용**
프로토타입은 객체 간에 속성과 메서드를 공유하는 방식으로 동작하며, 이를 통해 상속 개념을 구현할 수 있다.
Java, C++과 같은 클래스 기반 객체지향 프로그래밍 언어와 달리 **자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어**이다. 클래스 기반 객체지향 프로그래밍 언어는 객체 생성 이전에 클래스를 정의하고 이를 통해 객체(인스턴스)를 생성한다. 하지만 프로토타입 기반 객체지향 프로그래밍 언어 (자바스크립트)는 클래스 없이도 객체를 생성할 수 있다.

JS 에서의 모든 객체들은 Object라는 프로토타입을 가지고 있다.

![image](https://github.com/hastella/My_Study/assets/66244752/fdcce75c-dc2a-4be1-b297-a21942bd8337)

객체에서 공통적으로 쓰이는 함수를 Object라는 프로토타입을 만들어, 손쉽게 **객체간 상속**을 할 수 있다. 이때, 모든 JS 객체는 개별적으로 프로토타입을 상속하는 것이 아닌, 동일한 (단 하나의) Object 프로토타입을 **상속**한다.
![image](https://github.com/hastella/My_Study/assets/66244752/1c40f2f7-7600-41a8-a593-9d7c349cb9a9)

![image](https://github.com/hastella/My_Study/assets/66244752/7579f0d6-7f3f-4770-90fd-97c8a5020cc9)

객체간 상속의 연결 고리는 **프로토타입 체인**으로 연결 되어 있다.
![image](https://github.com/hastella/My_Study/assets/66244752/8cd6b537-f96e-432e-9394-e0f96262289e)

<br>

### 인스턴스 vs. 프로토타입 레벨

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

### Scope 스코프

변수를 참조할 수 있는 (접근할 수 있는) 유효한 범위이며, 식별자 (변수, 함수, 클래스 이름)가 유효한 범위를 나타낸다. 따라서, 선언된 위치에 따라 유효 범위가 결정된다.
{
블럭 안의 변수는 **블럭 안**에서만 유효
}

**지역 스코프**는 함수가 종료되면 메모리에서 사라진다.
변수, 함수, 클래스 이름 충돌을 방지할 수 있으며, 메모리를 절약해줄 수 있다.
❗️ 변수는 최대한 필요한 곳에서 정의해 주는것이 좋다 ❗️

🗂 #전역 변수, #전역 스코프, #지역 변수, #지역 스코프
<br>

### 🚀 Closure 클로저

클로저를 통해 내부함수에서 외부함수로 접근이 가능하다.
❓ 언제/ 어떻게 클로저를 활용하는걸까?
❗️ 캡슐화를 통해 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해

:함수가 선언된 환경의 스코프 (렉시컬 환경)를 기억하여 함수가 스코프 밖에서 실행될 때에도 기억한 스코프에 접근할 수 있게 만드는 문법

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

### 🗑 Garbage Collector 가비지 컬렉터

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

### Execution Context 실행 컨텍스트

실행 컨텍스트란 JS 엔진이 자바스크립트 코드를 실행할때 컴퓨터로부터 할당받은 메모리 공간에 코드, 변수, 함수 등 필요한 정보들을 저장해 두는 공간이다. 이 때, 코드의 실행 순서와 스코프를 기억해 준다!

식별자가 선언된 각각의 블록은 **렉시컬 환경 Lexical Environment** 라는 내부 오브젝트를 가지고 있다.
❓ 렉시컬 환경 : 함수가 선언될 당시의 환경을 기억하는 것

- 환경 레코드 Environment Record : 각각의 블록이 어떤 데이터를 가지고 있는지?
- 외부 환경 참조 Outer Lexical Environment Reference : 각각의 블록의 부모는 누구인지?
  <br>

### This : JS에서 문맥에 따라 this가 가리키는 것이 달라진다.

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

### → 화살표 함수

화살표 함수는 렉시컬 환경에서의 this를 기억한다. 즉, 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.

- 문법이 깔끔하다.
- 생성자 함수로 사용이 불가능 -> 무거운 프로토타입을 만들지 않는다.
- 함수 자체 arguments 인자를 가지고 있지 않는다.
- 화살표 함수 외부의 arguments를 참조만 한다.
- this에 대한 바인딩이 정적으로 결정된다.
- 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 된다.

<br>

### Strict Mode 엄격모드

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

<br>

### ⬆️ 이벤트 버블링 Event Bubbling

DOM에서의 특정 요소의 이벤트가 발생한 뒤, 해당 이벤트가 그 요소의 조상들에게까지 전달되어 트리거 되는 현상이다.
div > span > button (click!)

**🎯타겟 엘리먼트 (Target Element)**

이벤트 버블링이 일어났을 때 최초로 이벤트를 발생시킨 요소를 타겟 엘리먼트(Target Element)라고 한다. 이는 event.target 을 통해 접근 가능하다.<br>
**this 와 event.target의 차이점**

- event.target: 최초로 이벤트를 발생시킨 엘리먼트를 가리킨다.
- this (=event.currentTarget): 현재 이벤트가 발생된 엘리먼트를 가리킨다.<br>

### ⬇️ 이벤트 캡쳐링 Event Capturing

DOM에서의 특정 요소의 이벤트 발생했을 때, 해당 이벤트가 최상단의 부모 요소로부터 전달되어져 내려오는 현상이다.
html > body > div > p

이벤트 버블링과 캡쳐링이 일어나는 경우, 발생시키는 요소에 아래 함수를 추가해 버블링 / 캡쳐링을 막을 수 있다.

```
event.stopPropagation()
```

<br>

### 이벤트 위임

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

### Web Storage 웹 스토리지

브라우저에 저장되는 키-값으로, 클라이언트에서만 조정이 가능하며 해당 url에서만 접근이 가능하다.

- **로컬 스토리지**: 브라우저가 종료되도 유지되는 데이터
- **세션 스토리지**: 같은 탭 내에서만 유지되는 데이터

**쓰기 (setItem), 접근 (getItem), 삭제 (removeItem)**
<br>
