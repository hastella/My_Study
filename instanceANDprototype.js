function Person(name, age) {
  // 생성자 함수
  this.name = name;
  this.age = age;

  // this.printName = () => {
  //   // 인스턴스 레벨의 함수
  //   console.log(this.name);
  // };
}

// Person.prototype.printName = function () {
//   // 프로토타입 레벨의 함수
//   console.log(this.name);
// };

Person.prototype.printName = () => {
  // 프로토타입 레벨의 함수는 화살표 함수를 사용할 경우 this가 프로토타입 객체를 가리키게 된다.
  // 인스턴스의 속성을 정상적으로 참조하지 못하고 undefined를 출력하게 된다.
  // 따라서 화살표 함수가 아닌 일반 함수를 사용해야 한다.
  console.log(this.name);
};

const person1 = new Person("Stella", 25);
const person2 = new Person("Sangchu", 21);

person1.printName(); // Stella
person2.printName(); // Sangchu
