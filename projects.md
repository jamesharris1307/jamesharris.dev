---
layout: default
title: Projects
---

<div class="projects-list">
  {% assign sorted_projects = site.projects | sort: 'start_date' | reverse %}
  {% for project in sorted_projects %}
    <article class="project-item">
      <h2 class="project-item__title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h2>
      
      <div class="project-meta">
        <span class="project-date">Started: {{ project.start_date | date: "%B %Y" }}</span>
      </div>

      <p class="project-description">
        {{ project.description }}
      </p>

      <div class="project-tags">
        {% for tag in project.technologies %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </article>
    {% unless forloop.last %}<hr class="project-divider">{% endunless %}
  {% endfor %}
</div>