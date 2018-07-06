---
title: Cinematography
date: 2018-06-30 20:13:00 +02:00
permalink: "/cinematography/"
layout: page
sections:
- video: 
  width: 1000
  height: 600
  content: test content
---

{% for section in page.sections %}
<section>
    {% include lazyvid.html video=section %}
    {{ section.content }}
</section>
{% endfor %}

