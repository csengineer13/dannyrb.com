---
ispost: 		true
layout: 		post
title: 			"The Template Tag: A Refresher"
date: 			2015-11-05 11:00:00
published:	 	"2015-11-05T11:00:00+01:00"
categories: 	webcomponents, template, polyfills
description: 	"The only remaining browser has begun to implement the template tag. With full cross-browser support in the near future, it's time for a template tag refresher."
ogimg: 			"http://dannyrb.com/assets/the-template-tag-a-refresher/fb-final-jpg.jpg"
googleimg: 		"http://dannyrb.com/assets/the-template-tag-a-refresher/fb-final-jpg.jpg"
twitterimg: 	"http://dannyrb.com/assets/the-template-tag-a-refresher/twitter-final-jpg.jpg"
---

The `<template>` specification was [introduced in 2011](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell), along with the other three specs that make up WebComponents. Since then, `<template>` has become a part of the [W3C Living Document](http://www.w3.org/TR/html5/scripting-1.html#the-template-element), and has full support in Chrome, Firefox, Opera, Safari, and Android. To boot, Edge has just announced [upcoming support](https://dev.modern.ie/platform/status/templateelement/). 

In light of that announcement, let's refresh (:

##Native Templates

Before the `<template>` tag was introduced we still had templates, but to get them to work, we had to abuse existing functionality. The two most common techniques were:


1. Hide the DOM off screen
{% highlight html %}
<div class="hidden-template" id="template-22">
    <!-- My template's contents -->
</div>
{% endhighlight %}


<ol start="2">
	<li>Abusing the <code>&lt;script&gt;</code> tag</li>
</ol>
{% highlight html %}
<script id="simple-template" type="text/x-handlebars-template">
  // My template's contents
</script> 
{% endhighlight %}

Both of these techniques are not ideal. The first is clunky and can be accidentally modified by DOM manipulation. The latter exposes us to potential cross-site scripting attacks. The `<template>` element seeks to solve these issues, and also provides additional benefits.


###The Anatomy of a Template

The anatomy of a template is simple. It is any set of markup, styles, and javascript that is wrapped in `<template>` tags. A template can even include another template! Here is a basic example:

{% highlight html %}
<template id="simple">
    <style>
        span { color: purple; }
    </style>

    <img src="http://placehold.it/50x50" />
    <span>Hello World!</span>

    <script>
        function boom(){
            alert("BOOM!");
        }
        boom();
    </script>
</template>
{% endhighlight %}

###The Properties of a Template

**_Flexible placement_**

This code can live anywhere inside the `<head>` or `<body>`. It's also important to note that you can place it as a child for a `<select>` or `<table>` element.

**_Inert_**

This means that the Javascript and CSS play no role in modifying the page. The code is not active until the template has been cloned and added to the page.

**_Hidden from CSS and Selectors_**

Your template's content cannot be selected or modified with CSS or query selectors. This is to protect it from accidental changes, and for performance reasons.

####But.. How do we use our template?

Chiggity-check this out:

{% highlight javascript %}
function addSimple(){
    // Grab our template
    var t = document.querySelector('template#simple').content;

    // Optional -- Modify template

    // Clone and add
    var clone = document.importNode(t, true);
    document.getElementById("simple-target").appendChild(clone);
}
{% endhighlight %}

Simple enough. We're:

- Grabbing a reference to our template's content. 
- We create a deep-copy clone of the template's content
- and then we insert it into our existing DOM.

###Simple Template Example

<iframe src="http://lug.io/examples/web-components-examples/templates/simple/"></iframe>

Notice that even though our `span` style is defined in our template, it doesn't affect the existing `span` until it is cloned and added. Also, the JS is not executed until the template is added. Even the `<image>` isn't fetched pre-load. Basically, adding the template is like a _live_ copy & paste into your DOM.


###Can I data-bind? Data-binding is fun!

Nope. The closest we can get to this is using DOM manipulation techniques to change our templates to create "fake" data-binding. Here is a slightly more intense example that demonstrates this:

{% highlight html %}
<form id="data-binding-form" onsubmit="return addRow()">
    <label for="name-field">Name:</label>
    <input type="text" name="name" id="name-field" />

    <label for="age-field">Age:</label>
    <input type="text" name="age" id="age-field" />

    <label for="gender-field">Gender:</label>
    <input type="text" name="gender" id="gender-field" />

    <input type="submit" name="Submit" value="Submit"/>
</form>

<table id="persons-table">
<thead>
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Chester Examplefield</td>
    <td>92</td>
    <td>Female</td>
</tr>
<!-- Our Row Template -->
<template id="table-row">
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
</tr>
</template>
<!-- End Row Template -->
</tbody>
</table>
{% endhighlight %}

Please Note:

- Our template is _inside_ our table
- The template's row is not visible on the screen


{% highlight javascript %}
// ADD ROW
function addRow()
{
    // Grab our template
    var t = document.querySelector('template#table-row').content;

    // Optional -- Modify template
    var form = document.querySelector('#data-binding-form');

    var age = form.querySelector("#age-field").value; 		
    //var age = $("#data-binding-form #age-field"); // Equiv
    var name = form.querySelector("#name-field").value;
    var gender = form.querySelector("#gender-field").value;

    t.querySelector("td:first-child").innerHTML = name;
    t.querySelector("td:nth-child(2)").innerHTML = age;
    t.querySelector("td:last-child").innerHTML = gender;

    // Clone/activate template & add to page
    var clone = document.importNode(t, true);
    $("#persons-table tr:last").after(clone);   // .after() is using jQuery

    // Vanilla JS of .after();
    //var allRows = document.querySelectorAll("table tr");
    //var lastRow = allRows[allRows.length- 1];

    //lastRow.parentNode.insertBefore(clone, lastRow.nextSibling);

    return false; // Stop submit event from bubbling up
}
{% endhighlight %}

Please Note:

- We grab a reference to the template's content
- We pull values from our form fields
- We update the template's content with our values
- We clone the _now modified_ template
- We add the clone to the page

###"Data-Binding" Example

<iframe style="min-height: 300px" src="http://lug.io/examples/web-components-examples/templates/table/"></iframe>

You get the idea. Not super intuitive, but it works. This is likely where we'll see _abstractions_ like [polymer](https://www.polymer-project.org/1.0/) pick up the slack and introduce more developer friendly ways to do data-binding.

###Support

Until we get full cross-browser support, it's fairly safe to rely on Polyfills for `<template>` as they're simple and performant. Here are some examples of polyfill use:

- [WebComponents.js](https://github.com/webcomponents/webcomponentsjs) (Google-Backed)
- [Polyfill To Add IE Support](http://stackoverflow.com/questions/16055275/html-templates-javascript-polyfills)
- [Example Polyfill Use](http://jsfiddle.net/brianblakely/h3EmY/) (IE6/7 Support)

Even so, unless your target browser support is IE11+, you probably shouldn't be using `<template>` in production. If anyone has any sources that show otherwise, please let me know! (:

##Next Steps?

Templates lay the groundwork for the real meat and potatoes of [WebComponents](http://webcomponents.org/). To fully leverage their power, you may want to check out:

- [Continuing your education on the `<template>` tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/)
- [Annnddd some more education](http://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element)
- Learning about [Custom Elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) (_hint_ they use templates)
- Learn more about [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill)

###Resources

- This article in Markdown format [on GitHub](https://github.com/csengineer13/dannyrb.com/blob/master/_posts/2015-11-05-the-template-tag-a-refresher.markdown)
- "Simple Template" [Example on GitHub](https://github.com/lug-io/WebComponents-Examples/blob/master/templates/simple/index.html)
- "Data-Bind Template" [Example on GitHub](https://github.com/lug-io/WebComponents-Examples/blob/master/templates/table/index.html)
- Track [`<template>`s browser support](http://caniuse.com/#search=template)


###FAQ

Questions from [this reddit thread](https://www.reddit.com/r/web_design/comments/3rmu57/html5s_template_tag_a_refresher/) and comments below will eventually be aggregated here