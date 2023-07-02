const object1 = {
  name: "Stella",
  age: 25,
};
const lodash = require("lodash"); // lodash 모듈을 가져온다.
const object2 = lodash.cloneDeep(object1); // lodash 모듈의 cloneDeep 메소드를 사용하여 object1을 복사한다.
console.log(object1 === object2); // false, 동일한 내용을 가지고 있지만, 다른 메모리 주소를 가지고 있다. (완전히 독립됨)

console.log(object1); // { name: 'Stella', age: 25 }
console.log(object2); // { name: 'Stella', age: 25 }

object1.age = 21;
console.log(object1.age === object2.age); // false
