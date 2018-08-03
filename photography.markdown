---
title: Photography
date: 2018-06-30 20:13:00 +02:00
permalink: "/photography/"
layout: page
artimages:
- image: "/uploads/IMG_0682.JPG"
  width: 100
  height: 100
- width: 100
  height: 100
  image: 
---

{% for image in page.artimages %}
<div class="col-4">
{% include lazyload.html image=image %}
</div>
{% endfor %}
