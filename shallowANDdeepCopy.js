// 얕은 복사
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const obj2 = Object.assign({}, obj);
obj.b.c = 3;
// console.log("shallowCopy", obj2); // 3으로 바뀌어있음, 얕은 복사로 인해 원본 객체의 값이 바뀌면 복사된 객체의 값도 바뀐다.

// 깊은 복사
const deepCopy = (origin) => {
  const result = {};
  for (let key in origin) {
    if (origin[key] !== null && typeof origin[key] === "object") {
      result[key] = deepCopy(origin[key]);
    } else {
      result[key] = origin[key];
    }
  }
  return result;
};
// 원본 객체의 모든 속성을 반복하면서 속성의 값을 확인합니다.
// 속성 값이 원시 타입인 경우, 값을 복사하여 새로운 객체에 할당합니다.
// 속성 값이 객체인 경우, 재귀적으로 깊은 복사를 수행하여 새로운 객체에 할당합니다.
// 모든 속성의 복사가 완료되면, 새로운 객체를 반환합니다.

const obj3 = deepCopy(obj);
obj3.b.d.e = 10;
console.log("deepCopy", obj3);
console.log("deepCopy", obj);

// 완벽한 깊은복사
const object1 = {
  name: "Stella",
  age: 25,
};
const lodash = require("lodash"); // lodash 모듈을 가져온다.
const object2 = lodash.cloneDeep(object1); // lodash 모듈의 cloneDeep 메소드를 사용하여 object1을 복사한다.
// console.log(object1 === object2); // false, 동일한 내용을 가지고 있지만, 다른 메모리 주소를 가지고 있다. (완전히 독립됨)
//
// console.log(object1); // { name: 'Stella', age: 25 }
// console.log(object2); // { name: 'Stella', age: 25 }

object1.age = 21;
// console.log(object1.age === object2.age); // false
