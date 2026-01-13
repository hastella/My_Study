---
title: "객체지향 프로그래밍의 세계 - OOP와 자료구조 이해"
date: "2023-09-04"
categories: ["programming", "oop"]
tags: ["객체지향프로그래밍", "OOP", "클래스", "객체", "상속", "캡슐화", "스택", "큐", "자료구조"]
excerpt: "객체지향 프로그래밍의 핵심 개념과 스택/큐 자료구조의 차이점을 이해하고 실무 적용 방법을 알아봅니다."
---

# 🏗️ 객체지향 프로그래밍의 세계

프로그래밍 패러다임 중 가장 널리 사용되는 **객체지향 프로그래밍(Object-Oriented Programming)**에 대해 깊이 있게 알아보겠습니다. OOP는 단순한 프로그래밍 방식이 아니라, 복잡한 문제를 해결하는 사고방식입니다.

## 🎯 객체지향 프로그래밍이란?

**객체지향 프로그래밍**은 프로그램을 구성하는 요소들을 **객체(Object)**로 모델링하고, 이 객체들 간의 상호작용을 통해 프로그램을 구축하는 방식입니다.

> 프로그래밍 할 때 서로 밀접하게 연관되어 있는 요소들을 객체로 구성해 나가면서 객체끼리 서로 호환 가능하게 하는 것

### OOP의 핵심 철학

OOP는 현실 세계를 프로그래밍으로 모델링하는 방법입니다:
- **현실 세계의 사물** = 객체(Object)
- **사물의 특성** = 속성(Property)
- **사물의 행동** = 메소드(Method)

## 🏛️ OOP의 4대 핵심 개념

### 1. 클래스 (Class)

**클래스**는 객체를 생성하기 위한 템플릿이자 설계도입니다.

```javascript
// JavaScript 클래스 예시
class Person {
  // 속성 (Property)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메소드 (Method)
  introduce() {
    return `안녕하세요, 저는 ${this.name}이고 ${this.age}살입니다.`;
  }
}
```

**클래스의 구성 요소:**
- **속성(Property)**: 객체의 상태를 나타내는 데이터
- **메소드(Method)**: 객체의 행동을 정의하는 함수

### 2. 객체 (Object)

**객체**는 클래스의 실제 인스턴스입니다. 메모리에 할당된 구체적인 데이터입니다.

```javascript
// 객체 생성
const person1 = new Person("홍길동", 25);
const person2 = new Person("김철수", 30);

// 객체 사용
console.log(person1.introduce()); // "안녕하세요, 저는 홍길동이고 25살입니다."
console.log(person2.introduce()); // "안녕하세요, 저는 김철수이고 30살입니다."
```

### 3. 캡슐화 (Encapsulation)

**캡슐화**는 객체의 내부 구현을 외부로부터 감추고, 필요한 인터페이스만을 노출하는 개념입니다.

```javascript
class BankAccount {
  #balance = 0; // private 속성

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance; // 외부에서 잔액 확인은 가능하지만 직접 수정은 불가능
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
// account.#balance = 10000; // ❌ 직접 접근 불가능
```

**캡슐화의 이점:**
- **정보 은닉**: 내부 구현 세부사항 숨김
- **보안성**: 외부에서의 무분별한 접근 방지
- **유지보수성**: 내부 변경이 외부에 미치는 영향 최소화

### 클래스 vs 캡슐화

혼동하기 쉬운 개념이지만 차이가 있습니다:

| 개념 | 설명 |
|------|------|
| **클래스** | 객체를 생성하기 위한 템플릿/설계도 |
| **캡슐화** | 데이터와 메소드를 하나의 단위로 묶는 프로그래밍 개념 |

> 클래스는 캡슐화를 실현하는 데 사용될 수 있는 구현 방법 중 하나입니다.

### 4. 상속 (Inheritance)

**상속**은 기존 클래스로부터 새로운 클래스를 생성하는 개념입니다.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name}이(가) 소리를 냅니다.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name}이(가) 멍멍 짖습니다.`; // 메소드 오버라이딩
  }

  fetch() {
    return `${this.name}이(가) 공을 물어옵니다.`;
  }
}

const dog = new Dog("바둑이");
console.log(dog.speak()); // "바둑이이(가) 멍멍 짖습니다."
console.log(dog.fetch());  // "바둑이이(가) 공을 물어옵니다."
```

**상속의 이점:**
- **코드 재사용**: 기존 코드 활용
- **계층 구조**: 자연스러운 분류 체계 구축
- **유지보수성**: 공통 로직을 한 곳에서 관리

## 📚 자료구조: 스택 vs 큐

프로그래밍에서 자주 사용되는 두 가지 선형 자료구조의 차이점을 알아보겠습니다.

### 스택 (Stack) - LIFO

**스택**은 **Last In First Out (LIFO)** 방식의 자료구조입니다.

> **프링글스 통**을 생각해보세요! 마지막에 넣은 과자가 가장 먼저 나옵니다.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // 요소 추가 (맨 위에)
  push(element) {
    this.items.push(element);
  }

  // 요소 제거 (맨 위에서)
  pop() {
    return this.items.pop();
  }

  // 맨 위 요소 확인 (제거하지 않음)
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push('A'); // ['A']
stack.push('B'); // ['A', 'B']
stack.push('C'); // ['A', 'B', 'C']

console.log(stack.pop()); // 'C' (마지막에 넣은 것이 먼저 나옴)
```

**스택의 활용 예시:**
- 함수 호출 스택
- 브라우저 히스토리 (뒤로가기)
- 수식 계산 (괄호 매칭)

### 큐 (Queue) - FIFO

**큐**는 **First In First Out (FIFO)** 방식의 자료구조입니다.

> **줄 서서 기다리는 사람들**을 생각해보세요! 먼저 온 사람이 먼저 나갑니다.

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // 요소 추가 (맨 뒤에)
  enqueue(element) {
    this.items.push(element);
  }

  // 요소 제거 (맨 앞에서)
  dequeue() {
    return this.items.shift();
  }

  // 맨 앞 요소 확인 (제거하지 않음)
  front() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue('A'); // ['A']
queue.enqueue('B'); // ['A', 'B']
queue.enqueue('C'); // ['A', 'B', 'C']

console.log(queue.dequeue()); // 'A' (먼저 넣은 것이 먼저 나옴)
```

**큐의 활용 예시:**
- 프린터 작업 대기열
- 이벤트 루프 (JavaScript)
- 너비 우선 탐색 (BFS)

### 스택 vs 큐 비교

| 특징 | 스택 (Stack) | 큐 (Queue) |
|------|-------------|-----------|
| **원칙** | LIFO (Last In First Out) | FIFO (First In First Out) |
| **추가 연산** | push() | enqueue() |
| **제거 연산** | pop() | dequeue() |
| **비유** | 프링글스 통 | 줄 서는 사람들 |
| **주요 용도** | 함수 호출, 브라우저 히스토리 | 작업 대기열, 이벤트 처리 |

## 💡 OOP의 실무 적용

### OOP 설계 원칙 (SOLID)

좋은 OOP 코드를 작성하기 위한 5가지 원칙:

1. **단일 책임 원칙 (SRP)**: 클래스는 하나의 책임만 가져야 함
2. **개방-폐쇄 원칙 (OCP)**: 확장에는 열려있고, 수정에는 닫혀 있어야 함
3. **리스코프 치환 원칙 (LSP)**: 자식 클래스는 부모 클래스를 대체할 수 있어야 함
4. **인터페이스 분리 원칙 (ISP)**: 인터페이스는 작고 구체적이어야 함
5. **의존성 역전 원칙 (DIP)**: 구체적인 클래스보다 추상화에 의존해야 함

### JavaScript에서의 OOP

현대 JavaScript에서는 클래스 기반 OOP와 프로토타입 기반 OOP를 모두 지원합니다:

```javascript
// 클래스 기반 (ES6+)
class User {
  constructor(name) {
    this.name = name;
  }
}

// 프로토타입 기반
function User(name) {
  this.name = name;
}

User.prototype.getName = function() {
  return this.name;
};
```

## 🚀 마무리하며

객체지향 프로그래밍은 단순한 기술이 아니라 **문제를 해결하는 사고방식**입니다. OOP를 잘 활용하면:

- **유지보수성 향상**: 코드의 구조가 명확해짐
- **재사용성 증가**: 객체와 클래스를 재활용할 수 있음
- **확장성 향상**: 새로운 요구사항에 쉽게 대응

자료구조에 대한 이해도 프로그래밍의 기본기입니다. 스택과 큐는 간단해 보이지만, 실제 프로그래밍에서 다양한 문제 해결에 사용됩니다.

다음 글에서는 프로세스와 스레드, 그리고 CSR/SSR의 차이에 대해 알아보겠습니다. OOP의 개념을 실제 프로젝트에 적용해보며 더 깊이 이해해보세요! 💪
