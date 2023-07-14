// map

const myArr = ["a", "b", "c"];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map((letter) => myMap[letter]);
console.log(result); // [1, 2, 3]

// myArr 배열 요소를 이용해 myMap 객체의 값을 가져온다.
// myArr 배열의 요소가 myMap 객체의 키가 되어 myMap 객체의 값을 가져온다.
// myArr.map은 myArr의 배열 요소가 0번째부터 순서대로 letter 매개변수에 할당된다.
// myMap[letter]는 myMap 객체의 letter 키에 해당하는 값을 가져온다.
// 가져온 값을 result라는 새로운 배열에 담아준다.
