# my_study

### App

어플리케이션을 실행시킬 때 필요한 메모리의 구성요소는 아래와 같이 나눠진다.

- Code: 개발자 작성 코드
- Data: 데이터, 변수
- Stack: 함수를 호출하는 실행순서
- Heap: 객체
  <br>

### Variable 변수: 값을 저장하는 공간 : 자료를 저장할 수 있는 이름이 주어진 기억장소

어플리케이션을 실행하게 되면 총 세가지의 일들이 발생한다.

1. 입력 (input): 사용자에게 입력을 받는다. - 마우스 또는 키보드를 통해
2. 처리 (process): 필요한 데이터를 처리한다. - 파일을 통해
3. 출력 (output): 처리된 데이터를 출력한다.
   - 모니터를 통해 사용자에게 보여주거나
   - 파일 시스템, 쿠키, 스토리지 같은 곳에 저장하여
   - 네트워크 통신을 통해 다른 백엔드나 서버로 데이터를 보내주어

이 중, 처리 과정을 위해서는 데이터를 임시적으로 보관하기 위한 변수가 필요하다.
(= 사용자에게 입력받은 데이터를 보관하여 처리를 위한 데이터 보관, 변수 선언이 필요하다.)
<br>

### Data Type

- 원시 primitive (단일 데이터): number, string, boolean, null, undefined, symbol
- 객체 object (복합 데이터): 상태, 행동

이중 원시타입은 App의 구성요소중 Data와 Stack에 저장되고, 객체타입은 Heap에 저장된다.
Heap에는 데이터의 크기가 정해져있지 않고, 동적으로 데이터의 저장될 수 있는 '객체' 데이터가 보관된다.
<br>

### Object 객체: 연관된 데이터를 함께 묶어서 보관할 수 있는 복합 데이터

선언된 객체 자체는 Heap 메모리 자체에 저장되어 있고, 메모리 셀 하나 안에 객체의 값이 들어갈 수 없기 때문에 셀 여러개를 거쳐 객체가 할당 된다.
Heap이 아닌 원시 타입을 저장해두는 Data, Stack 메모리 셀에는 객체의 변수명이 저장된다.
<br>

### Function 함수: 특정한 일을 수행하는 코드의 집합

- 유지보수성
- 재사용 가능
- 높은 가독성

❗️함수의 이름은 함수를 참조하고 있다. (이름은 data/stack에 저장, 함수는 heap에 저장)
<br>

### Class 클래스: 객체를 생성할 수 있는 템플릿 (틀)

- 객체지향 프로그래밍 (Object - oriented Programming)
  : 프로그래밍 할때, 서로 밀접하게 연관되어 있는 요소들을 객체로 구성해 나가면서 객체끼리 서로 호환 가능하게 하는 것.

- 인스턴스 (instance)
  : 클래스를 통해 만들어진 객체

🗂 #getter(get()), #setter(set()), #privateField(#), #extends(상속), #super, #static
<br>


#### Shallow Copy 얕은 복사 : 객체는 메모리 주소를 전달한다!!

자바스크립트에서 복사할 때에는 항상 얕은 복사가 이루어진다. Array.from, concat, slice, spread(...), Object.assign 등은 얕은 복사를 한다. 얕은 복사는 객체의 메모리 주소를 복사하기 때문에, 원본 객체의 값이 바뀌면 복사된 객체의 값도 바뀐다. 따라서 인자로 전달된 객체가 있다면 함수 내에서 객체를 직접 수정하는 것은 ❗️절대❗️ 좋지않다.
<br>

### Higher-order function 고차함수

고차함수는 인자로 함수를 받거나 (콜백함수) 함수를 반환하는 함수이다. 고차함수가 콜백함수를 인자로 받았다면, 함수 안에서 콜백함수가 필요할 때 호출할 수 있는 권한인 있기 때문에 높은 권한이 있다 라고 해서 Higher-order function, 고차함수로 부른다.

순수함수: 함수 안에서 '불변성'을 유지하는 것

- 함수 안에서 전달받은 매개변수나 함수 밖에서의 특정한 상태를 함수 내부에서 수정하지 않고 전달받은 인자를 통해서 실행 후 새로운 값을 return 하는 것.
- 에러는 줄이고 가독성은 증가시킬 수 있다.
- 함수형 프로그래밍: 이러한 순수함수들을 서로 묶어서 연결해놓는 것.
  데이터 변경 ❌, 변수 사용 ❌, 조건문 ❌, 반복문 ❌

🗂 #map, #reduce, #filter
<br>

### Iteration 이터레이션 💫

이터레이션 프로토콜 (Iteration Protocol) : 순회가 가능한, 반복 / 순회하는 규격, 약속, 인터페이스
즉, 자바스크립트에서 이터레이션 프로토콜을 따르는 객체는

- for...of
- spread

연산자를 사용할 수 있다.

Iteration Protocol을 따르는 자바스크립트 자료구조: Array, String, Map, Set
❓ 이 프로토콜을 따른다는 것은❓

- Iterable (순회 가능한) 프로토콜을 따라야 한다.

  ```
  {

    [Symbol.iterator](): Iterator (순회하는) 프로토콜
                          {
                          next(): 다음 값 (객체를 리턴해준다.)
                          }

  }
  ```

- Iterable 하다는건 순회가 가능하다!
- [Symbol.iterator] 가 있으면 iterable 하다고 한다.
- 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 return 한다는 것은, 순회 가능한 객체이다.
- 순회가 가능하면 무엇을 할 수 있나? for...of, spread 를 사용할 수 있다.
  <br>
- 객체는 iterable하지 않다!
- Object.prototype[Symbol.iterator] 가 없다.
- 하지만 for...in은 사용 가능하다.

for...of를 이용하여 순회해도 되고, 또는 특정 값을 하나만 확인하고 싶다면 next()를 이용하여 수동적으로 다음값을 호출해 줄 수 있다.

<br>

### Spread 연산자

모든 Iterable은 spread 된다.

- concat 처럼 spread로 배열을 합쳐줄 수 있다.

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat
let arr = arr1.concat(arr2);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// spread
arr = [...arr1, ...arr2];
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

<br>

### Destructuring Assignment 구조분해 할당

구조분해 할당을 이용해서 중복성을 줄일 수 있다!

```
const stella = { name: "Stella", age: 21, job: "developer" };

function display({ name, age, job }) {
  // const name = stella.name; const age = stella.age; const job = stella.job; 구조분해 할당을 이용해서 중복을 줄일 수 있다.
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
```

<br>

### Set 세트

배열과 비슷하지만 Set은 순서가 없으며, **중복이 불가능**하다!

🗂 #set.size, #set.has, #set.forEach, #set.add, #set.delete, #set.clear
<br>

### Map 맵

키와 값으로 이루어진 자료구조
key - values

- set처럼 순서가 전혀 중요하지 않다.
- 키값이 유일함을 가지고 있어야 한다.
- 키값만 다르다면 **중복이 가능**하다!

object 객체와 아주 유사하여 Map을 객체처럼, 객체를 Map처럼 사용할 수 있다.

무조건 키값으로 찾는다! - 키값이 유일한 ID값이기 때문에.
🗂 #map.size, #map.has, #map.get, #map.forEach, #map.set, #map.delete, #map.clear
<br>

### 비동기: 동시에 발생하지 않는다!

Javascript Runtime Environment, 하나의 싱글 컨텍스트 스택: 싱글 쓰레드 (Single Thread)

![IMG_97279EFB9052-1](https://github.com/hastella/Javascript_Review/assets/66244752/97fcbc61-ce37-424d-ac51-40b0505b02f3)

함수를 실행할 때 어떤 순서대로 동작해줄지는 call Stack에 의해 결정된다. 따라서, **자바스크립트는 기본적으로 동기적으로 진행된다.** 하지만, 동기적으로 함수가 진행되는 경우에는, 만일 함수 하나의 실행 속도가 길어지는 경우 다른 함수의 실행에도 지장을 주게 되기 때문에, 비동기적인 작업을 처리해야 할 때는 비동기 API 함수들을 사용해주는 것이 좋다.

자바스크립트 런타임 환경에서 제공해주는 다양한 API들을 사용할 수 있다.

Web APIs
- Dom API
- setTimeout
- setInterval
- fetch
- eventListener



위와 같은 웹 API들은 비동기적으로 실행한다. 즉, 멀티 쓰레드 환경에서 발생해서 다양한 일들을 동시 다발성으로 처리해준다. 비동기 API 함수들은 특정 작업을 수행하고 그 결과를 기다리지 않고 즉시 반환해준다. 대신, 해당 작업은 백그라운드에서 비동기적으로 실행된다.
비동기 API 함수들은 주로 네트워크 요청, 파일 시스템 접근, 데이터베이스 쿼리 등과 같이 시간이 걸리는 작업을 처리하는 데 사용되는데, 이를 통해 웹 애플리케이션에서 동시에 여러 작업을 처리하거나 더 나은 사용자 경험을 제공할 수 있다.<br>
비동기 작업은 시간이 걸리므로 해당 작업이 완료되면 처리할 코드를 지정해야 한다. 이를 위해 콜백 함수(다른 함수의 인자로 넘겨져서 호출되는 함수)를 사용하여 작업 완료 시 호출되는 함수를 정의한다. A 함수의 매개변수로 B 함수가 들어가 A 함수가 모두 동작하면, B 함수를 실행할 수 있다. 이러한 원리로 콜백함수를 이용해서 비동기를 구현했지만, 콜백 함수가 많아질수록 (작업이 길어질수록, 매개변수로 계속 넘겨줄수록) 코드 파악이 어려워진다. 예를 들어, A 함수가 콜백함수를 받아 다음 다음 함수인 E 함수까지 불러올 경우, A 함수의 코드 흐름을 보기 위해서는 E 함수의 코드까지 확인을 해주어야 한다. <br>이러한 현상을 **콜백 지옥**이라고 한다. 콜백 지옥은 콜백 함수가 많아지거나 중첩됨으로써 코드의 가독성과 유지보수성이 저하되는 상황을 의미한다.

**프로미스(Promise)나 async/await과 같은 비동기 제어 패턴을 사용하면 콜백 지옥을 피할 수 있다.** 프로미스는 비동기 작업을 구조화하여 콜백 지옥을 방지하고, async/await은 프로미스를 기반으로 하여 동기적인 스타일로 코드를 작성할 수 있게 해 준다. 이를 통해 비동기 작업을 보다 간결하고 가독성이 좋은 코드로 작성할 수 있다.

<br>

#### Promise 프로미스

프로미스(Promise)는 비동기 함수의 반환 값을 다루기 위한 자바스크립트 객체. 비동기 함수는 프로미스를 반환할 수 있으며, 프로미스는 비동기 작업의 결과나 실패를 나타낸다.

❗️then, catch, finally❗️

The Promise object represents the eventual completion (or failure) of an asynchronous operation (비동기 수행) and its resulting value.

세가지 상태중 하나의 상태를 가진다.

1. 대기 중(pending): 비동기 작업이 진행 중인 상태
2. 이행(fulfilled): 비동기 작업이 성공적으로 완료되어 결과 값을 반환한 상태
3. 거부(rejected): 비동기 작업이 실패하거나 오류가 발생한 상태

프로미스는 new Promise() 생성자를 사용하여 생성되며, 이 생성자의 콜백 함수는 두 개의 인자를 받는다. 첫 번째 인자는 resolve 함수로 성공적인 결과를 반환하고 프로미스를 이행시키는 역할을 한다. 두 번째 인자는 reject 함수로 오류 또는 실패를 처리하고 프로미스를 거부하는 역할을 한다.

```
const promise = new Promise(function(resolve, reject)) {
  resolve(value); // 성공시 resolve 호출
  reject(error); // 실패시 reject 호출
}
```

**즉, 프로미스는 비동기 함수의 반환 값을 처리하기 위한 자바스크립트 객체이며, 비동기 작업의 성공과 실패를 나타낸다. 프로미스는 비동기 작업을 보다 편리하게 다룰 수 있도록 도와주는 패턴이며, .then()과 .catch()를 사용하여 결과와 오류를 처리할 수 있다.**
<br />

**📚 Promise.race & Promise.all & Promise.allSettled**

- Promise.race
  실행되는 Promise중 가장 빠른 하나를 호출하고 싶을 때

- Promise.all
  실행되는 Promise중 성공적인 결과값만 호출하고 싶을 때

- Promise.allSettled
  실행되는 Promise의 모든 결과값을 호출하고 싶을 때

🗂 #Promise.race, #Promise.all, #Promise.allSettled

<br>

#### async & await

프로미스의 개념을 사용한 문법이지만, 보다 가독성 있게 코드를 표현할 수 있다.
비동기로 사용할 함수앞에 async 키워드를 붙여주면, 해당 함수는 항상 프로미스를 반환하게 된다.
-> 비동기 함수를 호출하면서 호출코드 앞에 await를 붙여주면, 프로미스가 값을 반환하기를 기다렸다가 반환된 값을 변수에 할당해준다.

### JSON: Javascript Object Notation

서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷

- stringify(object): JSON
- parse(JSON): object

```

const stella = {
name: "stella",
age: 21,
eat: () => {
console.log("eat");
},
};

```

1. Object to JSON: **stringify**

Serializing (직렬화) : 데이터를 일렬로 늘어선 문자열로 변환하는 것

```

const json = JSON.stringify(stella); // JSON으로 변환
console.log(stella); // { name: 'stella', age: 21, eat: [Function: eat] }
console.log(json); // {"name":"stella","age":21}

```

함수 자체는 JSON에 포함되지 않음.
함수는 오브젝트에 있는 데이터가 아니기 때문에 제외됨.

2. JSON to Object: **parse**

Deserializing (역직렬화) : 일렬로 늘어선 문자열을 자바스크립트 객체로 변환하는 것

```

const obj = JSON.parse(json);
console.log(obj); // { name: 'stella', age: 21, eat: [Function: eat] }

```

🗂 #stringify, #parse
<br>

### Response.json()

JS 객체로 변환해준다.

❗️ Note that despite the method being named json(), the result is **not JSON** but is instead the result of taking JSON as input and parsing it to produce a **JS object**.

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
<br>

### Scope 스코프

- 변수를 참조할 수 있는 (접근할 수 있는) 유효한 범위
- 식별자 (변수, 함수, 클래스 이름) 가 유효한 범위
- 따라서, 선언된 위치에 따라 유효 범위가 결정된다.
  <br>
  {
  블럭 안의 변수는 **블럭 안**에서만 유효
  }
  <br>
- 지역 스코프는 함수가 종료되면 메모리에서 사라진다.
  변수, 함수, 클래스 이름 충돌을 방지할 수 있으며, 메모리를 절약해줄 수 있다.
  ❗️ 변수는 최대한 필요한 곳에서 정의해 주는것이 좋다 ❗️

🗂 #전역 변수, #전역 스코프, #지역 변수, #지역 스코프
<br>

### 🗑 Garbage Collector 가비지 컬렉터

JavaScript, Python, Java 는 가비지 컬렉터가 자동으로 메모리를 관리해준다.

```

// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지됨!
const global = 1;
{
const local = 1;
// 로컬 변수는 블록이 끝나면 메모리에서 사라짐 -> garbage collector
}

```

<br>

### Execution Context 실행 컨텍스트

코드의 실행 순서와 스코프를 기억!

식별자가 선언된 각각의 블록은 **렉시컬 환경 Lexical Environment** 라는 내부 오브젝트를 가지고 있다.
❓ 렉시컬 환경 : 함수가 선언될 당시의 환경을 기억하는 것

- 환경 레코드 Environment Record : 각각의 블록이 어떤 데이터를 가지고 있는지?
- 외부 환경 참조 Outer Lexical Environment Reference : 각각의 블록의 부모는 누구인지?
  <br>

### ⬆️ 🆙 Hoisting 호이스팅

JS 엔진 (번역기, Interpreter)이 코드를 실행하기 전, 변수, 함수, 클래스의 선언문을 **끌어 올리는 것**을 말한다.

- 변수의 선언과 초기화를 분리한 후, **선언만 코드의 최상단**으로 옮김<br>
  ![IMG_9516873227D0-1](https://github.com/hastella/Javascript_Review/assets/66244752/5950709d-f3a2-4557-aa64-6213790e4502)

- 변수(let, const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안된다.

```

console.log(hi);
// ReferenceError: Cannot access 'hi' before initialization
let hi = "hi";

const cat = new Cat();
// ReferenceError: Cannot access 'Cat' before initialization
class Cat {}

```

- 변수 할당 시, let 은 재할당이 필수로 필요한 경우에
  -> 가능한 const를 사용하는 것이 좋다!
  <br>

### 💩 var의 단점

1. 변수 선언하는 키워드가 없이 선언 & 할당이 가능함

- 선언인지, 재할당인지 구분하기 어렵다

```

something = "something";
console.log(something);

```

2. 중복 선언이 가능함

```

var poo = "💩";
var poo = "💩💩";
console.log(poo);

```

let은 같은 변수명으로 재선언 할 경우 에러가 발생한다.

    let num = 0;
    let num = 1;
    console.log(num);
    // SyntaxError: Identifier 'num' has already been declared

3. 블록 스코프를
   var apple = "🍎";
   {
   var apple = "사과";
   }
   console.log(apple); // 사과

원래대로라면 블록 스코프 외부의 변수의 값을 호출해 주어야 하지만 var는 블록 스코프를 무시하고, 블록 스코프 내부의 변수의 값을 호출해 준다.

4. 의외로? 함수 레벨 스코프만 지원 된다.

```

function example() {
var dog = "🐶";
}
console.log(dog); // ReferenceError: dog is not defined

```

함수 내에서 선언된 var를 외부에서 호출 시도할 경우 referenceError가 발생한다.
<br>

### Strict Mode 엄격모드

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

**'use strict'**
리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드로 설정되어 있다.

```

"use strict";
var x = 1;
// delete x;
// SyntaxError: Delete of an unqualified identifier in strict mode.
// strict mode를 사용하지 않는 경우에는 에러 발생 x

function add(x) {
var a = 2;
b = a + x;
}
add(1);
// ReferenceError: b is not defined
// strict mode를 사용하지 않는 경우에는 에러 발생 x

```

<br>

### Prototype 프로토타입

JS 에서는 객체 지향 프로그래밍을 위해 프로토타입을 사용하고 있다.

- 공통된 다양한 객체들의 비슷한 특징을 하나의 프로토타입으로 만들어 객체 지향 프로그래밍을 지향한다.

JS 에서의 모든 객체들은 Object라는 프로토타입을 가지고 있다.

<img width="208" alt="Screen Shot 2023-06-19 at 1 02 19 AM" src="https://github.com/hastella/Javascript_Review/assets/66244752/d4ca0bb3-54bb-4b6f-bfdc-06b7845be561">

모든 JS 객체는 내부에 숨겨진 Prototype을 가지고 있다.

- 객체에서 공통적으로 쓰이는 함수를 Object라는 프로토타입을 만들어, 손쉽게 객체간 상속을 할 수 있다.

모든 JS 객체는 개별적으로 프로토타입을 상속하는 것이 아닌, 동일한 (단 하나의) Object 프로토타입을 상속한다.
<img width="268" alt="Screen Shot 2023-06-19 at 1 08 56 AM" src="https://github.com/hastella/Javascript_Review/assets/66244752/ff8d03e3-b9d8-4ebf-92c1-6e74dd685ca7">

![IMG_B621B8D6F6F2-1](https://github.com/hastella/Javascript_Review/assets/66244752/aac23520-e2bc-4dbd-b8d0-9c383a310dcb)

객체간 상속의 연결 고리는 **프로토타입 체인**으로 연결 되어 있다.
![IMG_91FA0118BC3D-1](https://github.com/hastella/Javascript_Review/assets/66244752/0736decf-4c92-4c07-a630-b6e4a06f97db)

<br>

### 객체 불변성을 위한 동결, 밀봉, 확장 금지

- Object.freeze 오브젝트 동결
  추가 ❌, 삭제 ❌, 수정 ❌, 속성 재정의 ❌ (writable: false, configurable: false 등을 재정의 하는 것 불가능)

- Object.seal 오브젝트 밀봉
  수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌

- Object.preventExtensions 오브젝트 확장 금지
  수정 ✅, 삭제 ✅, 추가 ❌

🗂 #freeze, #seal, #preventExtensions
<br>

### 인스턴스 vs. 프로토타입 레벨

프로토타입 레벨의 함수는 인스턴스 레벨의 함수와 달리 메모리를 공유한다.
그렇기 때문에 인스턴스 레벨의 함수는 인스턴스마다 메모리를 할당받아서 메모리를 많이 차지하지만, **프로토타입 레벨의 함수는** 메모리를 공유하기 때문에 **메모리를 적게 차지**한다.
❗️그렇기 때문에 프로토타입 레벨의 함수를 사용하는 것이 좋다❗️
<br>

### 🚀 Closure 클로저

A closure is the combination of a **function** bundled tgt (enclosed) w/ references to its surrounding state (**lexical environment**)

:함수가 선언된 환경의 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 기억한 스코프에 접근할 수 있게 만드는 문법

- a closure gives you access to an outer function's scope from an inner function. **내부함수에서 외부함수 접근 가능**

**❗️클로저를 잘 알아야하는 이유는 유용하게 사용하기보단 알기 힘든 버그를 잘 수정하기 위해서❗️**
<br>

### This : JS에서 문맥에 따라 this가 가리키는 것이 달라진다.

자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체르 가리킨다. 정적으로 인스턴스가 만들어지는 시점에 this가 바인딩된다.

하지만 **자바스크립트에서는 this가** 다른 언어와 다르게 동작한다. JS에서는 누가 호출하냐에 따라서 this가 달라진다. this는 함수가 호출되는 시점에 **동적으로 바인딩**된다.
<br>

```

function Cat(name) {
this.name = name;
this.printName = function () {
console.log(`고양이 이름 출력!: ${this.name}`);
};
}

function Dog(name) {
this.name = name;
this.printName = function () {
console.log(`강아지 이름 출력!: ${this.name}`);
};
}

```

```

const cat = new Cat("냥이");
const dog = new Dog("상츄");
cat.printName();
dog.printName();

```

```

dog.printName = cat.printName; // this가 cat을 가리키게 된다.
dog.printName(); // 고양이 이름 출력!: 상츄
cat.printName(); // 고양이 이름 출력!: 냥이

```

<br>

❓ 왜 이런 일이 발생할까?
JS에서는 함수를 호출할 때, 함수를 호출한 주체를 this로 바인딩한다.
그래서 dog.printName()을 호출하면 dog가 this가 되고, cat.printName()을 호출하면 cat이 this가 된다.
그래서 dog.printName = cat.printName;을 했을 때, dog.printName()을 호출하면 this가 cat을 가리키게 된다.
<br>
❓ 그럼 어떻게 하면 this가 항상 자신의 인스턴스를 가리키게 할 수 있을까?
그럴 때 사용하는 것이 바로 화살표 함수이다. 화살표 함수는 this를 바인딩하지 않는다.
<br><br>

### → 화살표 함수

화살표 함수는 렉시컬 환경에서의 this를 기억한다. 즉, 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다.

- 문법이 깔끔하다.
- 생성자 함수로 사용이 불가능 -> 무거운 프로토타입을 만들지 않는다.
- 함수 자체 arguments 인자를 가지고 있지 않는다.
- 화살표 함수 외부의 arguments를 참조만 한다.
- this에 대한 바인딩이 정적으로 결정된다.
- 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 된다.

<br>

### ⬆️ 이벤트 버블링 Event Bubbling

DOM에서의 특정 요소의 이벤트가 발생한 뒤, 해당 이벤트가 그 요소의 조상들에게까지 전달되어 트리거 되는 현상이다.
div > span > button (click!)

**🎯타겟 엘리먼트 (Target Element)**

이벤트 버블링이 일어났을 때 최초로 이벤트를 발생시킨 요소를 타겟 엘리먼트(Target Element)라고 한다. 이는 event.target 을 통해 접근 가능하다.<br>
**this 와 event.target의 차이점**

- event.target: 최초로 이벤트를 발생시킨 엘리먼트를 가리킨다.
- this (=event.currentTarget): 현재 이벤트가 발생된 엘리먼트를 가리킨다.<br>

### ⬇️ 이벤트 캡쳐링 Event Capturing

DOM에서의 특정 요소의 이벤트 발생했을 때, 해당 이벤트가 최상단의 부모 요소로부터 전달되어져 내려오는 현상이다.
html > body > div > p

이벤트 버블링과 캡쳐링이 일어나는 경우, 발생시키는 요소에 아래 함수를 추가해 버블링 / 캡쳐링을 막을 수 있다.

```
event.stopPropagation()
```

<br>

### 이벤트 위임

Event delegation is a technique in web development where you attach an **event listener to a parent element** instead of individual child elements.
The event listener then listens for events that occur on the child elements by using event bubbling or capturing. When an event occurs, it "bubbles" up the DOM tree, triggering the event listener on the parent element.

```
<div id="parent">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

```
const parent = document.getElementById('parent');

parent.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});
```

instead of attaching event listeners to each button individually, we attach a single event listener to the parent div element.

By using event delegation, we can handle events on multiple child elements using a single event listener, which simplifies the code and improves performance, especially when dealing with a large number of child elements.
