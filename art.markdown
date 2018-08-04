---
title: Art
date: 2018-06-30 20:14:00 +02:00
permalink: "/art/"
is-image-gallery: true
artimages:
- image: "/uploads/IMG_0682.JPG"
  width: 100
  height: 100
- width: 100
  height: 100
  image: 
layout: page
---

{% for image in page.artimages %}
<div class="col-3">
{% include lazyload.html classes="modal-image" image=image %}
</div>
{% endfor %}