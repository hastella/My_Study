---
layout: home
title: "My Study Notes"
description: "프론트엔드 개발 공부 기록"
---

<div class="hero-section">
  <h1>🤓 My Study Notes</h1>
  <p class="hero-description">프론트엔드 개발자로서의 성장 과정을 기록하는 공간입니다.<br>지속적인 학습과 성장의 여정을 함께 나누고 싶습니다.</p>
</div>

## 📚 최근 포스트

<div class="posts">
  {% for post in site.posts limit: 6 %}
  <article class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%Y년 %m월 %d일" }}</p>
    <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    <a href="{{ post.url }}" class="read-more">더 읽기 →</a>
  </article>
  {% endfor %}
</div>

## 📂 카테고리

<div class="categories-section">
  <h2>📂 스터디 카테고리</h2>
  <div class="categories-grid">
    <div class="category-item">
      <h3>🌐 Web 기본 개념</h3>
      <p>인터넷과 웹의 기초부터 브라우저 동작 원리까지</p>
    </div>
    <div class="category-item">
      <h3>🎨 HTML/CSS</h3>
      <p>웹 페이지의 구조와 스타일링 기법</p>
    </div>
    <div class="category-item">
      <h3>⚡ JavaScript</h3>
      <p>프론트엔드 개발의 핵심 언어</p>
    </div>
    <div class="category-item">
      <h3>⚛️ React</h3>
      <p>현대적인 UI 라이브러리</p>
    </div>
    <div class="category-item">
      <h3>🟢 Vue.js</h3>
      <p>직관적인 프론트엔드 프레임워크</p>
    </div>
  </div>
</div>

## 🔗 유용한 링크

<div class="links-section">
  <h2>🔗 관련 링크</h2>
  <div class="links-grid">
    <div class="link-item">
      <a href="https://github.com/hastella/My_Study" target="_blank" rel="noopener">
        <strong>📁 GitHub 레포지토리</strong><br>
        <small>전체 코드와 자료 확인</small>
      </a>
    </div>
    <div class="link-item">
      <a href="https://hastella.github.io/" target="_blank" rel="noopener">
        <strong>👨‍💻 포트폴리오</strong><br>
        <small>프로젝트와 경험 소개</small>
      </a>
    </div>
    <div class="link-item">
      <a href="https://developer.mozilla.org/ko/" target="_blank" rel="noopener">
        <strong>📚 MDN Web Docs</strong><br>
        <small>웹 개발 공식 문서</small>
      </a>
    </div>
    <div class="link-item">
      <a href="https://ko.javascript.info/" target="_blank" rel="noopener">
        <strong>📖 JavaScript Info</strong><br>
        <small>모던 JavaScript 가이드</small>
      </a>
    </div>
  </div>
</div>

