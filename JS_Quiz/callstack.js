// 콜스택
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();

// First
// Third
// Second

// setTimeout이 실행되면서 콜스택에서 제거되고, 이후에 foo와 baz가 실행된다.
// setTimeout은 브라우저 API이기 때문에 콜스택에서 제거되고, 이후에 콜백큐에 들어간다.
// 콜백큐에 들어간 콜백은 콜스택이 비어있을 때, 콜스택으로 이동한다.
// 따라서 setTimeout의 콜백함수는 콜스택이 비어있을 때, 콜스택으로 이동되어 마지막으로 실행된다.
