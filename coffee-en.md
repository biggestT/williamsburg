---
layout: default
lang: en
---

{% for coffee in site.categories['coffee'] %}
<div class="row coffee-content">
    	<div class="col-lg-6 col-sm-12 coffee-image">
    		<img class="img-responsive" src="images/{{ coffee.image }}" alt="...">
    	</div>
    	<div class="col-lg-6 col-sm-12">
    		<div class="caption en-content">
    			<h1>{{ coffee.name-en }}</h1>
    			<h2>
    				<span class="glyphicon glyphicon-certificate"></span> {{ coffee.code }} 
    			</h2>
    			<h2>
    				<span class="glyphicon glyphicon-globe"></span> {{ coffee.origin-en }} 
    			</h2>
    			<p>{{ coffee.text-en }}</p>
    		</div>
    	</div>
</div>

{% endfor %}