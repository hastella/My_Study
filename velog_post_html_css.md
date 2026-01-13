# HTML/CSS 기초부터 실전까지 - 프론트엔드 개발자를 위한 완벽 가이드

프론트엔드 개발의 기초가 되는 HTML과 CSS에 대해 알아보겠습니다. 웹 개발의 시작점인 만큼 확실하게 이해하고 넘어가야 하는 중요한 부분입니다.

## HTML: Hypertext Markup Language

**HTML: Hypertext Markup Language**은 웹 페이지를 구성하는 데 사용되는 **마크업 언어**로, 웹 브라우저에게 **문서의 구조와 내용을 알려주는** 역할을 한다.

```html
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

❗️ script 태그를 적용하고 싶다면? body 태그 안에 제일 밑에 추가해주는 것이 일반적으로 권장된다.

❓ 이유는?

- **페이지 로딩 시간 개선**: 스크립트 파일을 `<body>` 태그 안에 위치시키면 브라우저가 **페이지의 구조와 내용을 먼저 표시한 후 스크립트를 실행**하므로 사용자는 더 빠르게 페이지를 볼 수 있다.

- **DOM 요소의 로딩 보장**: 스크립트가 `<body>` 태그 안에 위치하면, 스크립트가 실행되기 전에 해당 스크립트 위에 있는 모든 DOM 요소가 로드된 상태이므로 스크립트가 실행되는 시점에는 HTML 문서의 모든 요소에 접근할 수 있으므로 예기치 않은 오류를 방지할 수 있다.

```html
<script src="/examples/scripts/script_src.js" defer></script>
```

하지만 **defer** 속성을 사용하면 스크립트 파일이 다운로드되는 동안 HTML 문서의 파싱이 지연되지 않고 계속 진행되며, 스크립트 파일은 HTML 문서의 파싱이 완료된 후에 실행된다. 따라서 defer 속성을 사용하면 script 태그를 어디에 사용해도 파싱 지연을 방지하고 실행 순서를 보장해준다.

## CSS: Cascading Style Sheets

**CSS: ⤵ Cascading Style Sheets**을 사용하여 HTML 요소의 스타일과 레이아웃을 지정한다.

❓ cascading: 계단식의, 폭포처럼

❗️ 스타일 규칙을 **우선순위를 가진채 계단식**으로 적용하고, **상위 요소에서 하위 요소로 폭포처럼** 퍼져나가는 즉, 상위 요소에 적용된 스타일이 하위 요소에도 적용된다!

### CSS 라이브러리/프레임워크

**styled-components**는 JavaScript 코드 안에서 CSS를 작성하는 방식으로, 컴포넌트 단위로 스타일을 정의하고 적용. JavaScript 코드가 실행될 때 해당 스타일이 동적으로 생성되고, 최종적으로 브라우저에서 렌더링된다.

**Tailwind CSS**는 CSS 클래스를 사용하여 스타일을 적용하는 방식으로, 미리 정의된 클래스를 HTML 요소에 적용. Tailwind CSS는 사전에 정의된 클래스의 집합을 제공하며, 이를 조합하여 필요한 스타일을 쉽게 적용할 수 있다.

❓ 그럼 이 두 방식은 브라우저 렌더링 과정을 거칠때 css와 같은 원리를 거칠까?

❗️ 그렇다! styled-components와 Tailwind CSS는 CSS 코드를 더 효율적이고 생산적으로 작성하고 관리할 수 있게 도와주는 도구다. 브라우저 렌더링의 원리는 역시 동일하게 적용된다!

## CSS 애니메이션과 JS 애니메이션의 차이?

개발을 할때 주로 HTML을 통해 웹사이트 구조를, CSS를 통해 디자인을, JS를 통해 역동적임을 준다! 하지만 가끔 CSS의 keyframe이나 transition 속성을 이용해서 애니메이션을 주도록 구현할 때도 있는데, 그럼 JS로 애니메이션을 주는것과 어떻게 다른걸까?

쉽게 생각해서, 간단한 효과와 성능에 중점을 둘 때는 CSS 애니메이션을 사용하고, 더 복잡하고 동적인 애니메이션을 구현해야 할 때는 개발자가 제어할 수 있게 유연성을 제공하는 JS 애니메이션을 사용하는 것이 일반적이다. 하지만 JS 애니메이션을 사용할 때는 CSS 애니메이션보다 더 많은 CPU 자원을 사용할 수 있으므로, 성능 측면에서 주의해야 한다. 간단한 애니메이션은 CSS로 해보자!

## Flex와 Grid의 차이점은?

### 레이아웃 방향

- Flex는 단일 축 방향의 레이아웃을 구성하는데 사용되며, 주로 수평 방향으로 레이아웃을 정렬한다.
- Grid는 수평과 수직 방향으로 레이아웃을 정렬할 수 있다.

### 아이템 크기

- Flex는 아이템들의 크기가 자유롭게 유동적으로 바뀔 수 있다.
- Grid는 아이템들의 크기를 미리 정의하여 각 셀의 크기를 일정하게 유지한다.

따라서 **Flex는 유동적인 레이아웃 변화를 위해, Grid는 레이아웃 변화가 적을때** 사용하는게 (미리 정의된 구조를 유지하기 때문에) 좋다!

## 실전 HTML/CSS 팁

### 시맨틱 HTML 사용
```html
<!-- 좋음 -->
<header>헤더 영역</header>
<nav>네비게이션</nav>
<main>메인 콘텐츠</main>
<footer>푸터</footer>

<!-- 나쁨 -->
<div class="header">헤더 영역</div>
<div class="nav">네비게이션</div>
<div class="main">메인 콘텐츠</div>
<div class="footer">푸터</div>
```

### CSS 방법론 (BEM)
```css
/* Block Element Modifier */
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### 반응형 디자인
```css
/* 모바일 우선 */
.container {
  width: 100%;
}

/* 태블릿 */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}
```

### CSS 변수 활용
```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
  padding: var(--spacing);
}
```

HTML과 CSS는 프론트엔드 개발의 기본이자 핵심입니다. 이 두 가지를 잘 이해하고 활용할 수 있다면, 어떤 프론트엔드 프레임워크나 라이브러리를 사용하더라도 탄탄한 기반을 가질 수 있습니다.

다음 포스트에서는 JavaScript의 기초 개념들에 대해 알아보겠습니다! 🚀
