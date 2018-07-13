---
title: Cinematography
date: 2018-06-30 20:13:00 +02:00
permalink: "/cinematography/"
sections:
- file: "/uploads/mov_bbb.mp4"
  width: 1000
  height: 600
  content: test content
layout: page
---

{% for section in page.sections %}
<section>
    
    {{ section.content }}
</section>
{% endfor %}

