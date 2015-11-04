---
layout: post
title:  "No Title Yet"
date:   2015-10-28 13:00:00
categories: webcomponents shadowdom polyfills
---

<!-- 
HTML is a living breathing standard. It grows and adjusts to better supply the developers that use it with the tools they need.

1. Non-descriptive markup


Current markup is limited and not very descriptive. (I talked a little bit about why this is bad [last week](http://127.0.0.1:4000/posts/the-programmers-guide-to-better-seo-semantic-markup-and-html5/).) Even with [HTML5's Semantic Elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements), and Google backed [Schema.org](http://schema.org/), developers are often left with no choice but to use nested `<div>`s and `<span>`s.

2. No Native Templates

It's common to build a toolkit of reusable UI components.

See: ["DRY" Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)


3. Conflicting Styles

4. No bundling

5. No Standard

Because we have no native way to accomplish the above, numerous 3rd party libraries have stepped up to provide this functionality.


##The Solution: WebComponents

WebComponents are a collection of standards that make it possible for us to bundle markup and styles into custom HTML elements. These custom elements fully encapsulate their HTML and CSS. This means simpler CSS that only applies to your element, and outside JS can't interfere with your element's inner workings. This paves the way for custom components that can be [easily shared across projects](https://customelements.io/)!

-- Why it's important to learn "FOUNDATION" before Abstraction

When we talk about Web Components, we're actually talking about the following four things:

<table class="link-table">
	<tbody>
	<tr>
		<td>Templates:</td>
		<td><a href="http://www.w3.org/TR/html5/scripting-1.html#the-template-element">W3C Spec</a></td>
		<td><a href="http://www.html5rocks.com/en/tutorials/webcomponents/template/">HTML5 Rocks</a></td>
	</tr>
	<tr>
		<td>Custom Elements:</td>
		<td><a href="http://w3c.github.io/webcomponents/spec/custom/">W3C Spec</a></td>
		<td><a href="http://www.html5rocks.com/en/tutorials/webcomponents/customelements/">HTML5 Rocks</a></td>
	</tr>
	<tr>
		<td>Imports:</td>
		<td><a href="http://w3c.github.io/webcomponents/spec/imports/">W3C Spec</a></td>
		<td><a href="http://www.html5rocks.com/en/tutorials/webcomponents/imports/">HTML5 Rocks</a></td>
	</tr>
	<tr>
		<td>Shadow DOM:</td>
		<td><a href="http://w3c.github.io/webcomponents/spec/shadow/">W3C Spec</a></td>
		<td><a href="http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/#disqus_thread">HTML5 Rocks</a></td>
	</tr>
	</tbody>
</table>

<br />
For an explanation and implementations of the above, please continue reading (:

-->


###Native Templates

The anatomy of a template is simple. It is any chunk of HTML, CSS, JS that is wrapped in `<template></template>` tags. A template can even include another template! Here is a basic example:

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

####The Properties of a Template

**_Flexible placement_**

This code can live anywhere inside the `<head>` or `<body>`. It's also important to note that you can place it as a child for a `<select>` or `<table>` element.

**_Inert_**

This means that the javascript and css plays no role in modifying the page. The code is not active until the template has been cloned and added to the page.

**_Hidden from CSS and Selectors_**

Your template's content cannot be selected or modified with css or query selectors. This is to protect it from accidental changes, and for performance reasons.

####But.. How do we use our template?

Chiggity-check this out:

{% highlight javascript %}
function addSimple(){
    // Grab our template
    var t = document.querySelector('template#simple').content;

    // Optional -- Modify template

    // Clone and add
    var clone = document.importNode(t, true);
    $("#simple-target").append(clone);
}
{% endhighlight %}

Simple enough. We're:

- Grabbing a reference to our template's content. 
- We create a deep-copy clone of the template
- and then we insert it into our existing DOM.

####Simple Template Example

<iframe src="http://lug.io/examples/web-components-examples/templates/simple/"></iframe>

Notice that even though our `span` style is defined in our template, it doesn't affect the existing `span` until it is cloned and added. Also, the JS is not executed until the template is added. Even the `<image>` isn't fetched pre-load. Basically, adding the template is like a _live_ copy & paste into your DOM.


####Can I data-bind? Data-binding is fun!

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

	t.querySelectorAll("td:first-child")[0].innerHTML = name;
	t.querySelectorAll("td:nth-child(2)")[0].innerHTML = age;
	t.querySelectorAll("td:last-child")[0].innerHTML = gender;

	// Clone/activate template & add to page
	var clone = document.importNode(t, true);
	$("#persons-table tr:last").after(clone);

	return false; // Stop submit event from bubbling up
}
{% endhighlight %}

Please Note:

- We grab a reference to the template's content
- We pull values from our form fields
- We update the template's content with our values
- We clone the _now modified_ template
- We add the clone to the page

####"Data-Binding" Example

<iframe style="min-height: 300px" src="http://lug.io/examples/web-components-examples/templates/table/"></iframe>

You get the idea. Not super intuitive, but it works. This is likely where we'll see _abstractions_ like [polymer](https://www.polymer-project.org/1.0/) pick up the slack and introduce more developer friendly ways to do data-binding.

####Support
`<template>` is the only part of WebComponents that is:

- Part of the [W3C Living Document](http://www.w3.org/TR/html5/scripting-1.html#the-template-element) (HTML5).
- All but IE support (and IE has announced [upcomming support](https://dev.modern.ie/platform/status/templateelement/)).

Until we get full cross-browser support, it's fairly safe to rely on Polyfills for `<template>` as they're simple and performant. Here are some examples of polyfill use:

- [WebComponents.js](https://github.com/webcomponents/webcomponentsjs) (Google Backed)
- [Found in a quick search](http://ironlasso.com/template-tag-polyfill-for-internet-explorer/)

####Want to explore Templates further?

- [Mozilla's MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [HTML5 Rocks!](http://www.html5rocks.com/en/tutorials/webcomponents/template/)
- [Polyfill To Add IE Support](http://stackoverflow.com/questions/16055275/html-templates-javascript-polyfills)

###Custom Elements

The high notes

- Must have a dash in name
- Extend existing (is="")

###Imports

- FireFox currently does not intend to implement
- Functionality competes with ES6 module loader (hence the "on hold" status)
- May go away entirely

####Want to learn more about Import?

- Link 1
- Link 2
- Link 3


###Shadow DOM

- The most complex part of WebComponents for vendors to implement
- The most hotly debated WebComponents Spec
- Due to complexity, less than ideal polyfills
- Most likely the last part of WebComponents to be widely available in production

- Shadow Root
- Shadow Boundary
- Shadow Host
- DOM Subtrees



##Abstractions
What is an abstraction -- javascript to JQuery
Why it's important to learn about the implementation (correct term?) first.


###Abstractions and about them
- Polymer
- X-Tag
- Bosonic

[KendoUI, jQueryUI, Angular, Brackets]

###DOM Virtualization Frameworks
How different from abstractions, while attempting to accomplish the same thing

- React (DOM Virtualization)(not actually an abstraction)


##Support

Please don't leave (:

[Introduced in 2011](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell), and we still lack major cross-browser support. Given that the initial wave of motivation and drive has subsided, it makes sense that most would start wondering if WebComponents are _ever_ going to happen. 

###Reasons to hope

####1. News from Edge
The biggest dragger of feets thus far has been Microsoft. In recent Edge news, efforts to build out support for WebComponents has been announced, and the desire for an implementaton has been acknowledged. [4 of the 5 most requested feature for edge?](http://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/) **WebComponent Related!**

####2. Recent Meetings
Two recent face-to-face meetings between representatives from Google, Mozilla, Apple, Microsoft, and others. During those two meetings, the two most contentious specifications (Shadow DOM and Custom Elements) moved much closer to cross-browser consensus.

- Meeting 1 [on 2015/04/24](http://www.w3.org/2015/04/24-webapps-minutes.html)
- Meeting 2 [on 2015/07/21](http://www.w3.org/2015/07/21-webapps-minutes.html)

There is a little more information on "Recent Developments" on this [blog: here](http://www.2ality.com/2015/08/web-component-status.html).


###Current Native Support
Native support for WebComponents is sketchy, but every vendor has at least begun to implement WebComponents. You can see current vendor committments: [here](http://jonrimmer.github.io/are-we-componentized-yet/#code).

<figure class="w-1">
	<a href="http://jonrimmer.github.io/are-we-componentized-yet/">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}availability-grid.png" alt="" />
		<figcaption>This image is courtesy of Jon Rimmer. You can find a more up-to-date version of this chart at it's project page: http://jonrimmer.github.io/are-we-componentized-yet/</figcaption>
	</a>
</figure>

####According to [CanIUse.com](http://www.caniuse.com)
- [Templates](http://caniuse.com/#feat=template)
- [Custom Elements](http://caniuse.com/#feat=custom-elements)
- [Imports](http://caniuse.com/#feat=imports)
- [Shadow DOM](http://caniuse.com/#feat=shadowdom)


###Current Support with [Polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill)

[WebComponents.org](http://webcomponents.org/polyfills/) and [HTML5Please.com](http://html5please.com/#Web Components) suggest using a set of polyfills called [webcomponents.js](https://github.com/WebComponents/webcomponentsjs) to add native support for WebComponents. Below is an image of the support their polyfill set adds:

<figure class="w-1">
	<a href="https://github.com/WebComponents/webcomponentsjs#browser-support">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}polyfill-support.png" alt="" />
		<figcaption></figcaption>
	</a>
</figure>

###But.. Can I use it in production?

About polyfills: 


##What Next?

###Comparisons

- [Polymer VS Angular](http://www.binpress.com/blog/2014/06/26/polymer-vs-angular/)


###Resourcess

- [WebComponents.org](http://webcomponents.org/)
- [Definitive list of HTML5 Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)
- Link 3