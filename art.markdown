---
title: Art
date: 2018-06-30 20:14:00 +02:00
layout: page
permalink: /art/
artimages: 
    -   image: ''
        width: 100
        height: 100
---

{% for image in page.artimages %}
<div class="col-3">
    {% include lazyload.html image=image %}
</div>
{% endfor %}

