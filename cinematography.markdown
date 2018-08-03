---
title: Cinematography
date: 2018-06-30 20:13:00 +02:00
permalink: "/cinematography/"
sections:
- file: "/uploads/mov_bbb.mp4"
  width: 320
  height: 176
  content: test content
layout: page
---

{% for section in page.sections %}
<section>
    {% include lazyvid.html video=section %}
    {{ section.content }}
</section>
{% endfor %}

