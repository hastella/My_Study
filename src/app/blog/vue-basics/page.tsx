import MarkdownContent from '@/components/markdown-content'

export const metadata = {
  title: 'Vue.js 기초부터 실전까지 | My Study Notes',
  description: 'Vue.js의 기본 개념부터 실전 적용까지',
}

export default function VueBasicsPage() {
  const content = `# Vue.js 기초부터 실전까지

Vue.js의 기본 개념부터 실전 적용까지

## Vue.js 소개

Vue.js는 사용자 친화적인 API와 뛰어난 성능으로 많은 개발자들에게 사랑받는 프론트엔드 프레임워크입니다. Evan You가 개발했으며, React의 장점과 Angular의 구조화된 접근 방식을 결합한 현대적인 프레임워크입니다.

## 핵심 개념

### 반응성 시스템 (Reactivity System)

Vue의 핵심은 반응성 시스템입니다. 데이터가 변경될 때 자동으로 UI가 업데이트되는 방식으로 작동합니다.

\`\`\`javascript
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})

app.mount('#app')
\`\`\`

### 컴포넌트 시스템

Vue는 컴포넌트 기반 아키텍처를 사용합니다. 재사용 가능한 UI 조각들을 만들 수 있습니다.

\`\`\`javascript
// 컴포넌트 정의
const TodoItem = {
  template: \`<li>{{ todo.text }}</li>\`,
  props: ['todo']
}

// 앱에 등록
const app = Vue.createApp({
  components: {
    TodoItem
  }
})
\`\`\`

## 템플릿 문법

### 보간법 (Interpolation)

\`\`\`html
<div id="app">
  <p>{{ message }}</p>
  <p v-html="rawHtml"></p>
</div>
\`\`\`

### 디렉티브 (Directives)

\`\`\`html
<div id="app">
  <p v-if="seen">이제 나를 볼 수 있어요!</p>
  <p v-else>나를 볼 수 없어요...</p>

  <button v-on:click="counter += 1">클릭 {{ counter }} 회</button>

  <input v-model="message" placeholder="여기에 입력하세요">
  <p>입력값: {{ message }}</p>
</div>
\`\`\`

## Composition API vs Options API

### Options API (Vue 2 스타일)

\`\`\`javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('컴포넌트가 마운트되었습니다!')
  }
}
\`\`\`

### Composition API (Vue 3 권장)

\`\`\`javascript
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다!')
    })

    return {
      count,
      increment
    }
  }
}
\`\`\`

## Vue Router

SPA를 위한 공식 라우터 라이브러리입니다.

\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
\`\`\`

## Pinia (상태 관리)

Vue 3의 공식 상태 관리 라이브러리입니다.

\`\`\`javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

## 실전 예제

### 간단한 할일 앱

\`\`\`html
<div id="app">
  <h1>{{ title }}</h1>

  <input
    v-model="newTodo"
    @keyup.enter="addTodo"
    placeholder="새로운 할일을 입력하세요"
  >

  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      @click="toggleTodo(index)"
      :class="{ completed: todo.completed }"
    >
      {{ todo.text }}
    </li>
  </ul>
</div>
\`\`\`

\`\`\`javascript
const app = Vue.createApp({
  data() {
    return {
      title: 'Vue 할일 앱',
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
      }
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
    }
  }
})

app.mount('#app')
\`\`\`

## 결론

Vue.js는 다음과 같은 장점들로 많은 프로젝트에서 선택되고 있습니다:

- **학습 곡선이 완만함**: HTML, CSS, JavaScript만 알아도 시작할 수 있습니다
- **유연성**: 라이브러리부터 프레임워크까지 다양한 규모의 프로젝트에 적용 가능
- **풍부한 생태계**: 다양한 공식/커뮤니티 라이브러리 지원
- **성능**: 가상 DOM과 효율적인 반응성 시스템

Vue 3의 Composition API와 TypeScript 지원으로 더욱 강력해진 Vue.js를 배워보세요! 🚀

---

*이 포스트는 2024-01-17에 작성되었습니다.*`

  return (
    <div className="min-h-screen pt-20 pb-20">
      <article className="container max-w-4xl">
        {/* Post Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
              vue
            </span>
            <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
              javascript
            </span>
            <time className="text-gray-500 dark:text-gray-400">
              {new Date('2024-01-17').toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)] leading-tight">
            Vue.js 기초부터 실전까지
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Vue.js의 기본 개념부터 실전 적용까지
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
