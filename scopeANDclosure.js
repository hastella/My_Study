// function outerFunction() {
//   let outerVariable = "I am outer";
//
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//
//   return innerFunction;
// }

// const closure = outerFunction();
// outerFunction의 실행 컨텍스트가 종료되었지만, outerVariable은 innerFunction의 렉시컬 환경에 남아있기 때문에 참조할 수 있다.
// 클로저를 활용하기 위한 패턴
// closure(); // 출력: I am outer
// outerFunction();

function outerFunction() {
  // 외부 함수의 변수 선언
  var outerVariable = "I am outer";

  console.log(outerVariable); // 출력: I am outer
}

var closure = outerFunction(); // 출력: I am outer
// outerFunction();
// closure(); // TypeError: closure is not a function

function setCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const incCounter = setCounter(); // 내부 함수를 통해 외부 함수 렉시컬 환경의 count 변수에 접근하여 조작할 수 있다.
incCounter();
incCounter();
incCounter();
