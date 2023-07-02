// 변수 선언과 클래스 선언은 hoisting이 일어나지 않는다. 왜냐하면 변수와 클래스는 선언만 호이스팅이 되고, 초기화는 안된다.

// 함수 선언은 hoisting이 일어난다.

// 1. 변수 선언
// console.log(hi);
// // ReferenceError: Cannot access 'hi' before initialization
// let hi = "hi";

// 2. 클래스 선언
// const cat = new Cat();
// // ReferenceError: Cannot access 'Cat' before initialization
// class Cat {}

// 3. 함수 선언
console.log(hi()); // hi
function hi() {
  return "hi";
}
