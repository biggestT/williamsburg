---
layout: default
lang: en
---



{% for coffee in site.categories['coffee'] %}
<div class="col-md-9 col-sm-9">
    <div class="row coffee-content padded">
        <div class="col-xs-12 coffee-title">
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
        <div class="col-lg-7 col-md-7 col-xs-12">
            <div class="caption en-content">
                <p>{{ coffee.text-en }}</p>
            </div>
        </div>
        <div class="col-lg-5 col-md-5 col-xs-12 coffee-image">
            <img class="img-responsive" src="images/{{ coffee.image }}" alt="...">
        </div>
    </div>
</div>
{% endfor %}

<div class="col-md-3 col-sm-3">
    <div class="affix coffee-side padded" role="complementary">
        <!-- <div class="container"> -->
        <ul>
            {% for coffee in site.categories['coffee'] %}
            <li>
                <a href="#{{ coffee.cid }}"> {{ coffee.name-en }} </a>
                <!-- <b> / </b> -->
            </li>
            {% endfor %}
        </ul>
        <!-- </div> -->
    </div>
</div>