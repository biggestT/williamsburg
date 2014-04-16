---
layout: default
lang: en
---
<div id="coffee-nav" class="navbar navbar-fixed-bottom">
    <div class="navbar-inner">
        <div class="row">
            <div class="container">
                {% for coffee in site.categories['coffee'] %}
                <li>
                    <a href="#{{ coffee.cid }}"> {{ coffee.name-en }} </a>
                    <!-- <b> / </b> -->
                </li>
                {% endfor %}
            </div>
        </div>
</div>
</div>


{% for coffee in site.categories['coffee'] %}

<div class="row coffee-content">
    <div class="col-lg-12 coffee-title">
        <a id="{{ coffee.cid }}" class="coffee-anchor">
            <h1>{{ coffee.name-en }}</h1>
            <h2>
                <span class="glyphicon glyphicon-certificate"></span> {{ coffee.code }} 
            </h2>
            <h2>
                <span class="glyphicon glyphicon-globe"></span> {{ coffee.origin-en }} 
            </h2>
        </a>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 coffee-image">
        <img class="img-responsive" src="images/{{ coffee.image }}" alt="...">
    </div>
    <div class="col-lg-8 col-md-8 col-sm-12">
        <div class="caption en-content">
            <p>{{ coffee.text-en }}</p>
        </div>
    </div>
</div>


{% endfor %}