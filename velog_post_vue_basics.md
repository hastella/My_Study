# Vue.js 기초부터 실전까지 - React의 대안으로 떠오르는 프론트엔드 프레임워크

Vue.js는 사용자 친화적인 API와 뛰어난 성능으로 많은 개발자들에게 사랑받는 프론트엔드 프레임워크입니다. 이번 포스트에서는 Vue2와 Vue3의 차이점을 중심으로 Vue.js의 기초 개념들을 알아보겠습니다.

## Vue2 vs Vue3: 가장 큰 차이점

### Vue2: new + Vue (전역 객체)을 통해 인스턴스 생성

```javascript
import Vue from 'vue'

new Vue({
  el: '#app',  // DOM 요소 지정
  data: {      // 데이터 객체 정의
    count: 0
  },
  computed: {  // 계산된 속성 (함수로 정의)
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {   // 메서드 (함수로 정의)
    increment() {
      this.count++
    }
  }
})
```

### Vue3: createApp을 통해 인스턴스 생성

```javascript
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')  // mount: DOM 요소 지정
```

## Vue3의 주요 특징

### Composition API
Vue3의 가장 큰 특징 중 하나는 Composition API의 도입입니다. 이는 React의 Hooks와 유사한 개념으로, 더 유연한 코드 조직화를 가능하게 합니다.

```javascript
// Composition API 사용
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다!')
    })

    return {
      count,
      doubleCount,
      increment
    }
  }
}
```

### `<script setup>` 문법 (Vue3.2+)
Vue3.2부터 도입된 `<script setup>`은 더 간결한 Composition API 사용을 가능하게 합니다.

```vue
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

// 반응성 데이터
const count = ref(0)

// 계산된 속성
const doubleCount = computed(() => count.value * 2)

// 함수
const increment = () => {
  count.value++
}
</script>
```

## .vue 파일 구조

Vue 컴포넌트는 `.vue` 확장자를 사용하며, 세 가지 주요 섹션으로 구성됩니다:

### `<template>`: HTML 템플릿
```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
```

### `<script>`: JavaScript 로직
```vue
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

const title = "My Vue App"
const count = ref(0)

const increment = () => {
  count.value++
}
</script>
```

### `<style>`: CSS 스타일링
```vue
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
```

## Scoped 스타일링

`<style scoped>`를 사용하면 해당 컴포넌트에서만 스타일이 적용됩니다. 이는 CSS 클래스의 이름 충돌을 방지하고, 컴포넌트 기반의 모듈화된 스타일링을 가능하게 합니다.

## Pinia: Vue.js의 상태 관리 라이브러리

Pinia는 Vue3의 공식 상태 관리 라이브러리로, Composition API를 활용하여 간편하게 상태를 관리할 수 있도록 도와줍니다.

### 기본 사용법:

```javascript
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
})
```

```vue
<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>
```

## Vue2와 Vue3의 비교

| 특징 | Vue2 | Vue3 |
|------|------|------|
| 인스턴스 생성 | `new Vue()` | `createApp()` |
| 상태 관리 | Vuex | Pinia (권장) |
| API 스타일 | Options API | Composition API |
| 성능 | 좋음 | 더 좋음 (Tree-shaking, Proxy 기반 반응성) |
| 번들 크기 | 상대적으로 큼 | 더 작음 (Tree-shaking) |
| TypeScript 지원 | 제한적 | 뛰어남 |

## Vue 생태계

Vue.js는 강력한 생태계를 가지고 있습니다:

- **Vue Router**: 공식 라우팅 라이브러리
- **Vuex/Pinia**: 상태 관리
- **Vue CLI/Vite**: 빌드 도구
- **Nuxt.js**: Vue 기반의 풀스택 프레임워크
- **Vuetify**: Material Design 컴포넌트 라이브러리
- **Element Plus**: Vue3용 컴포넌트 라이브러리

## Vue.js 선택의 장점

1. **학습 곡선이 낮음**: HTML, CSS, JavaScript만으로 시작 가능
2. **유연성**: 점진적 채택이 가능 (기존 프로젝트에 부분적으로 적용 가능)
3. **성능**: 가볍고 빠른 렌더링
4. **커뮤니티**: 활발한 한국 커뮤니티
5. **다양한 옵션**: Options API와 Composition API 중 선택 가능

Vue.js는 React만큼 강력하면서도 더 접근하기 쉬운 프론트엔드 프레임워크입니다. 특히 기존 프로젝트에 점진적으로 도입할 수 있는 유연성이 큰 장점입니다! 🚀
