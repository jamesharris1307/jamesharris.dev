---
layout: default
title: My Blog
---

# My Essays

<div class="essay-list">
  {% for post in site.posts %}
    <article class="essay-item">
      <span class="essay-item__date">{{ post.date | date: "%B %d, %Y" }}</span>
      
      <h2 class="essay-item__title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      
      <p class="essay-item__description">
        {{ post.description }}
      </p>
    </article>
    <hr>
  {% endfor %}
</div>