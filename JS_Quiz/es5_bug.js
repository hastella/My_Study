// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("The index of this number is: " + i);
//   }, 3000);
// }

// The index of this number is: 4 가 네번 출력된다.
// 이유는 setTimeout 함수 내부에서 사용되는 i 변수가 클로저에 의해 접근되기 때문입니다. setTimeout 함수는 비동기적으로 실행되기 때문에 for 루프가 완료된 이후에 setTimeout 콜백이 실행됩니다. 따라서 setTimeout 함수가 호출될 때 i 변수는 이미 arr.length인 4가 되어 있습니다.

// 아래와 같이 출력하고 싶다면 어떻게 해야할까?
// The index of this number is: 0
// The index of this number is: 1
// The index of this number is: 2
// The index of this number is: 3

// IIFE(즉시실행함수)를 사용하여 클로저를 생성합니다. IIFE 내부의 함수는 index라는 매개변수를 가지며, 이렇게 하면 각 setTimeout 함수가 고유한 index 값을 가질 수 있습니다. 따라서 올바른 인덱스가 출력됩니다.
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function (index) {
    console.log("The index of this number is: " + i);
  }, 3000);
}
