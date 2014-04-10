---
layout: default
lang: ch
---

{% for coffee in site.categories['coffee'] %}
<div class="row coffee-title">
	<h1>{{ coffee.name-ch }}</h1>
	<h2>{{ coffee.code }}</h2>
</div>
<div class="row coffee-content">
	<div class="col-lg-6 col-xs-6 coffee-image">
		<img class="img-responsive coffee-image" src="images/{{ coffee.image }}"></img>
	</div>
	<div class="col-lg-6 col-xs-6">
		<p>
			Origin:
			<b>{{ coffee.origin-ch }}</b>  
		</p>
		<p>{{ coffee.text-ch }}</p>
	</div>
</div>

{% endfor %}