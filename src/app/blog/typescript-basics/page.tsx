import MarkdownContent from '@/components/markdown-content'

export const metadata = {
  title: 'TypeScript 기초부터 고급까지 | My Study Notes',
  description: 'TypeScript의 핵심 개념과 실전 활용법을 배워보자',
}

export default function TypeScriptBasicsPage() {
  const content = `# TypeScript 기초부터 고급까지

TypeScript의 핵심 개념과 실전 활용법을 배워보자

## 소개

TypeScript는 JavaScript에 정적 타입 시스템을 추가한 프로그래밍 언어입니다. Microsoft에서 개발했으며, JavaScript의 상위 집합(superset)으로, 모든 JavaScript 코드를 TypeScript 코드로 사용할 수 있습니다.

## 기본 타입

### 원시 타입 (Primitive Types)

\`\`\`typescript
// 문자열
let name: string = "홍길동";

// 숫자
let age: number = 25;

// 불리언
let isStudent: boolean = true;

// null과 undefined
let empty: null = null;
let notDefined: undefined = undefined;

// 심볼
let uniqueKey: symbol = Symbol("key");
\`\`\`

### 배열과 튜플

\`\`\`typescript
// 배열
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];

// 튜플 (고정된 길이의 배열)
let tuple: [string, number] = ["hello", 42];
\`\`\`

## 인터페이스와 타입

### 인터페이스 (Interface)

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email?: string; // 선택적 속성
}

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  name: "김철수",
  age: 30,
  email: "kim@example.com"
});
\`\`\`

### 타입 별칭 (Type Alias)

\`\`\`typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

function movePoint(point: Point, dx: number, dy: number): Point {
  return {
    x: point.x + dx,
    y: point.y + dy
  };
}
\`\`\`

## 제네릭 (Generics)

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

// 사용
let output1 = identity<string>("myString");
let output2 = identity<number>(42);

// 제네릭 인터페이스
interface GenericInterface<T> {
  value: T;
  getValue(): T;
}

// 제네릭 클래스
class GenericClass<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}
\`\`\`

## 고급 타입

### 유니온과 인터섹션

\`\`\`typescript
// 유니온 타입
type StringOrNumber = string | number;

// 인터섹션 타입
interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

// Person은 name과 age 속성을 모두 가짐
const person: Person = {
  name: "홍길동",
  age: 25
};
\`\`\`

### 조건부 타입

\`\`\`typescript
type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>;  // "yes"
type Test2 = IsString<number>;  // "no"

// 실전 예제: 배열 타입 추론
type Flatten<T> = T extends Array<infer U> ? U : T;

type ElementType = Flatten<number[]>;  // number
\`\`\`

## 실전 활용

### API 응답 타입 정의

\`\`\`typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

// API 함수 타입 정의
async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}
\`\`\`

### React 컴포넌트와 함께 사용

\`\`\`typescript
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} onClick={() => onSelectUser(user)}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
\`\`\`

## 결론

TypeScript는 JavaScript 프로젝트의 규모가 커질수록 그 가치가 더 빛납니다. 초기 설정 비용이 있지만, 장기적으로는 버그를 줄이고 개발 생산성을 높여줍니다.

- **장점**: 타입 안정성, IDE 지원, 리팩토링 용이성
- **단점**: 학습 곡선, 초기 설정 복잡성, 컴파일 시간

프로젝트의 규모와 팀의 상황에 맞게 TypeScript 도입을 고려해보세요! 🚀

---

*이 포스트는 2026-01-13에 작성되었습니다.*`

  return (
    <div className="min-h-screen pt-20 pb-20">
      <article className="container max-w-4xl">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
              typescript
            </span>
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
              javascript
            </span>
            <time className="text-gray-500 dark:text-gray-400">
              {new Date('2026-01-13').toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)] leading-tight">
            TypeScript 기초부터 고급까지
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            TypeScript의 핵심 개념과 실전 활용법을 배워보자
          </p>
        </header>

        {/* Post Content */}
        <MarkdownContent content={content} />

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-[var(--border)]">
          <a
            href="/blog"
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--secondary)] transition-colors font-medium"
          >
            ← 블로그 목록으로 돌아가기
          </a>
        </nav>
      </article>
    </div>
  )
}