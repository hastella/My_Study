---
layout: default
title: My Study Notes
---

<section class="home-hero">
  <h1 class="hero-title">My Study Notes</h1>
  <p class="hero-subtitle">프론트엔드 개발자로서의 성장 과정을 기록하는 공간</p>
  <p class="hero-description">
    안녕하세요! 프론트엔드 개발 공부를 하며 정리한 내용들을 공유하려고 합니다.<br>
    지속적인 학습과 성장의 여정을 함께 나누고 싶습니다.
  </p>
</section>

<section class="section" id="posts">
  <h2 class="section-title">📚 최근 포스트</h2>
  <p class="section-subtitle">최근 작성한 공부 내용을 확인해보세요</p>

  <div class="posts-grid">
    {% for post in site.posts limit: 6 %}
    <article class="post-card fade-in">
      <span class="post-category">
        {% if post.categories contains 'frontend' %}프론트엔드
        {% elsif post.categories contains 'javascript' %}JavaScript
        {% elsif post.categories contains 'react' %}React
        {% elsif post.categories contains 'vue' %}Vue.js
        {% else %}웹개발
        {% endif %}
      </span>
      <h3 class="post-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <p class="post-meta">{{ post.date | date: "%Y년 %m월 %d일" }}</p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      <a href="{{ post.url }}" class="read-more">더 읽기</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section" id="categories">
  <h2 class="section-title">📂 스터디 카테고리</h2>
  <p class="section-subtitle">주제별로 정리된 학습 내용들을 살펴보세요</p>

  <div class="categories-grid">
    <div class="category-card fade-in">
      <span class="category-icon">🌐</span>
      <h3 class="category-title">Web 기본 개념</h3>
      <p class="category-description">인터넷과 웹의 기초부터 브라우저 동작 원리까지 웹의 근본적인 개념들을 다룹니다.</p>
    </div>

    <div class="category-card fade-in">
      <span class="category-icon">🎨</span>
      <h3 class="category-title">HTML/CSS</h3>
      <p class="category-description">웹 페이지의 구조를 만들고 아름다운 디자인을 적용하는 방법을 학습합니다.</p>
    </div>

    <div class="category-card fade-in">
      <span class="category-icon">⚡</span>
      <h3 class="category-title">JavaScript</h3>
      <p class="category-description">프론트엔드 개발의 핵심 언어로 동적인 웹 페이지를 만들 수 있는 기술을 익힙니다.</p>
    </div>

    <div class="category-card fade-in">
      <span class="category-icon">⚛️</span>
      <h3 class="category-title">React</h3>
      <p class="category-description">현대적인 UI 라이브러리로 컴포넌트 기반의 효율적인 웹 애플리케이션을 개발합니다.</p>
    </div>

    <div class="category-card fade-in">
      <span class="category-icon">🟢</span>
      <h3 class="category-title">Vue.js</h3>
      <p class="category-description">직관적이고 배우기 쉬운 프론트엔드 프레임워크로 빠른 개발을 경험해보세요.</p>
    </div>
  </div>
</section>

<section class="section" id="about">
  <h2 class="section-title">👋 소개</h2>
  <div style="text-align: center; max-width: 700px; margin: 0 auto;">
    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary);">
      프론트엔드 개발에 대한 열정으로 가득한 개발자입니다.<br>
      새로운 기술을 배우고 적용하는 것을 즐기며, 배운 지식을 정리하고 공유하는 것을 중요하게 생각합니다.
    </p>
    <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-top: 1.5rem;">
      이 블로그는 제 학습 여정을 기록하고, 같은 길을 걷는 개발자들에게 도움이 되고자 만들어졌습니다.<br>
      함께 성장하는 여정이 되길 바랍니다! 🚀
    </p>
  </div>
</section>

