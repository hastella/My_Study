function outerFunction() {
  let outerVariable = "I am outer";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
// outerFunction의 실행 컨텍스트가 종료되었지만, outerVariable은 innerFunction의 렉시컬 환경에 남아있기 때문에 참조할 수 있다.
// 클로저를 활용하기 위한 패턴
closure(); // 출력: I am outer
