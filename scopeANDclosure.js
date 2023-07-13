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

// setCounter() 함수를 호출하면, setCounter() 함수 내부에 정의된 count 변수와 increase() 함수가 생성됩니다. 그러나 setCounter() 함수는 increase() 함수를 반환하고 종료하게 됩니다.

// 따라서, setCounter() 함수 자체를 호출하는 것은 내부에 정의된 increase() 함수를 실행시키지 않습니다. 단지 increase() 함수를 참조할 수 있는 값을 반환하는 것입니다.

// const incCounter = setCounter();는 setCounter() 함수를 호출하여 반환된 increase() 함수를 incCounter 변수에 할당하는 것을 의미합니다. 이렇게 incCounter 변수에 할당된 increase() 함수를 호출하면, increase() 함수가 실행되고 count 변수의 값이 증가하여 출력됩니다.

// 즉, incCounter()를 호출할 때마다 increase() 함수가 실행되며, 그 안에서 count 변수의 값이 증가하고 출력됩니다. incCounter()를 여러 번 호출하면 count 변수의 값이 계속 증가하게 됩니다.

// 따라서, setCounter() 함수를 호출하는 것과 incCounter() 함수를 호출하는 것은 서로 다른 동작을 수행하며, incCounter()를 호출해야 increase() 함수가 실행되어 count 변수의 값이 변경되고 출력됩니다.
