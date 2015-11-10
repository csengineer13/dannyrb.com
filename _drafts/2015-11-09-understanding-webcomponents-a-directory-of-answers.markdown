---
ispost: 		true
layout: 		post
title:  		"Understanding WebComponents: A Directory of Answers"
date:   		2015-11-09 11:00:00
published:	 	"2015-11-09T11:00:00+01:00"
categories: 	seo, html5
description: 	"Search"
ogimg: 			"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
googleimg: 		"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
twitterimg: 	"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
---

WebComponents were announced in 2011, but [until recently](http://blogs.windows.com/msedgedev/2015/07/15/microsoft-edge-and-web-components/) cross-browser support seemed unlikely. Given Microsoft's renewed commitment to WebComponents and [two recent meetings between browser vendors](http://www.2ality.com/2015/08/web-component-status.html), I thought I should finally turn my attention to WebComponents. Below is a collection of my notes, and where to find additional resources.


##Index &amp; Terms

- [Why WebComponents?]({{ page.url }}#why-webcomponents)
- [Foundation vs. Abstraction]({{ page.url }}#foundation-vs-abstraction)
- [WebComponents]({{ page.url }}#webcomponents)
	- [Templates]({{ page.url }}#templates)
	- [Custom Elements]({{ page.url }}#custom-elements)
	- [Shadow DOM &amp; Light DOM]({{ page.url }}#shadow-dom-and-light-dom)
		- [Shadow Root]({{ page.url }}#shadow-root)
		- [Shadow Boundary]({{ page.url }}#shadow-boundary)
		- [Shadow Host]({{ page.url }}#shadow-host)
		- [DOM Subtrees]({{ page.url }}#dom-subtrees)
	- [HTML Imports]({{ page.url }}#html-imports)
- [Polyfill]({{ page.url }}#polyfills)
- [Polymer]({{ page.url }}#polymer)
- [News &amp; Support]({{ page.url }}#news)



##Why WebComponents? <a name="why-webcomponents">&nbsp;</a>



##Foundation vs. Abstraction <a name="foundation-vs-abstraction">&nbsp;</a>

lorem ipsum



##WebComponents <a name="webcomponents">&nbsp;</a>

lorem ipsum

####References &amp; Resources

- [WebComponents.org](http://webcomponents.org/) (The Mothership)
- [Component Kitchen's Interactive Tutorial](https://component.kitchen/tutorial)
- [CSS-Tricks Guide](https://css-tricks.com/modular-future-web-components/)
- [Gallery of OpenSource WebComponents](https://customelements.io/)
- [How To Enable WebComponents in FireFox](https://developer.mozilla.org/en-US/docs/Web/Web_Components)



###Templates <a name="templates">&nbsp;</a>

lorem ipsum

####References &amp; Resources

- [W3C Spec](http://www.w3.org/TR/html5/scripting-1.html#the-template-element) (Living Document)
- [HTML5's Template Tag: A Refresher](http://dannyrb.com/posts/the-template-tag-a-refresher/)
- [Creating Reusable Markup With The HTML Template Element](http://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element)
- [Templates: Standardizing Client-Side Templating](http://www.html5rocks.com/en/tutorials/webcomponents/template/)



###Custom Elements <a name="custom-elements">&nbsp;</a>

lorem ipsum

####References &amp; Resources

- [W3C Spec](http://www.w3.org/TR/custom-elements/)
- [How To Create Custom HTML Elements](http://blog.teamtreehouse.com/create-custom-html-elements-2)
- [Custom Elements: Defining New Elements In HTML](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/)



###Shadow DOM &amp; Light DOM <a name="shadow-dom-and-light-dom">&nbsp;</a>

Have you ever looked at the source code of a web page? That's the page's `Light DOM`.

####Shadow Root <a name="shadow-root">&nbsp;</a>

sad asdsd

####Shadow Boundary <a name="shadow-boundary">&nbsp;</a>

####Shadow Host <a name="shadow-host">&nbsp;</a>

####DOM Subtrees <a name="dom-subtrees">&nbsp;</a>

####References &amp; Resources

- [W3C Spec](http://www.w3.org/TR/shadow-dom/)
- [Working With Shadow DOM](http://blog.teamtreehouse.com/working-with-shadow-dom)
- [Shadow DOM 101](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)



###HTML Imports <a name="html-imports">&nbsp;</a>

HTML Imports allow you to include HTML documents within other HTML documents. You can already do this using AJAX, but this makes it easier to load self-contained components. 

However, it is **_decently unlikely_** that HTML Imports will _ever_ have full cross-browser support. [Firefox has announced it will not ship HTML Imports](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/), citing the following reasons:

- Javascript Module Loading (in ES6) will work better and be preferred
- HTML Import is easily polyfilled

So you're probably wondering: 

> "How do I use Javascript Modules with WebComponents?"

The best resource I've been able to find is [Building Web Components Using ES6 Classes](https://www.polymer-project.org/1.0/articles/es6.html) (On Polymer's site, but with vanilla components). It's worth noting that the tutorial uses an interesting tool called [vulcanize](https://github.com/polymer/vulcanize) to flatten multiple dependency requests into a single request.

Even so, ES6 classes and module loader are not yet available without using a transpiler. If you desparately want to use these features today, you would need to incorporate [babel](https://babeljs.io/) or [SystemJS](https://github.com/systemjs/systemjs) into your build process.


####Summary

If you want the most future proof and most widely support option in place, read Polymer's tutorial on [building Web Components using ES6 classes](https://www.polymer-project.org/1.0/articles/es6.html), and incorporate a transpiler like [babel](https://babeljs.io/) into your build process.

If you just want to mess around, [WebComponents.js](http://webcomponents.org/polyfills/) provides quick and easy polyfill'd support for HTML Imports.

####References &amp; Resources

- [W3C Spec](http://www.w3.org/TR/html-imports/) (Working Draft)
- [HTML Inports #include for the web](http://www.html5rocks.com/en/tutorials/webcomponents/imports/)
- [An Introduction to HTML Imports](http://blog.teamtreehouse.com/introduction-html-imports)



##Polyfills <a name="polyfills">&nbsp;</a>

A polyfill is downloadable code (usually javascript) that adds functionality to websites that we expect the browser to provide natively.

####References &amp; Resources

- [What is a Polyfill? + History](https://remysharp.com/2010/10/08/what-is-a-polyfill)
- [Using Modernizr to Polyfill](http://html5doctor.com/using-modernizr-to-detect-html5-features-and-provide-fallbacks/)
- [Comprehensive List of HTML5 Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)



##Polymer <a name="polymer">&nbsp;</a>

####References &amp; Resources

- [Getting Started With Polymer](https://www.polymer-project.org/1.0/docs/start/getting-the-code.html)
- [Polymer with ES6 Classes: Example](http://codepen.io/mikkokam/pen/jPMLJN/)
- [Build an ES6 App With Polymer Starter Kit](http://www.code-labs.io/codelabs/polymer-es2015/#0)



##News &amp; Support <a name="news">&nbsp;</a>

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

