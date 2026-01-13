---
layout: home
title: "My Study Notes"
description: "프론트엔드 개발 공부 기록"
---

# 🤓 My Study Notes

프론트엔드 개발자로서의 성장 과정을 기록하는 공간입니다.

## 📚 최근 포스트

<div class="posts">
  {% for post in site.posts limit: 5 %}
  <article class="post-preview">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}" class="read-more">더 읽기 →</a>
  </article>
  {% endfor %}
</div>

## 📂 카테고리

- Web 기본 개념
- HTML/CSS
- JavaScript
- React
- Vue.js

## 🔗 링크

- [GitHub 레포지토리](https://github.com/hastella/My_Study)
- [포트폴리오](https://hastella.github.io/)

---

*지속적인 학습과 성장의 여정을 함께 나누고 싶습니다.*

