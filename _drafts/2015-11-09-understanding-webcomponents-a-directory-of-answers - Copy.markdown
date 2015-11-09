---
ispost: 		true
layout: 		post
title:  		"Understanding WebComponents: A Directory of Answers"
date:   		2015-11-09 11:00:00
published:	 	"2015-11-09T11:00:00+01:00"
categories: 	seo, html5, webcomponents, template, custom elements, shadow, light, polyfill, polymer
description: 	"Search engine bots have issues reading most web pages. To improve search ranking, implement these tips to make your web page easier to read."
ogimg: 			"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
googleimg: 		"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
twitterimg: 	"http://dannyrb.com/assets/the-programmers-guide-to-better-seo-semantic-markup-and-html5/google-bot.png"
---

WebComponents were announced in 2011, but [until recently](http://blogs.windows.com/msedgedev/2015/07/15/microsoft-edge-and-web-components/) cross-browser support in the near future looked bleak. Given Microsoft's renewed commitment to WebComponents and [two recent, incredible meetings between browser vendors](http://www.2ality.com/2015/08/web-component-status.html), I thought I should finally give WebComponents the attention it deserves. Below is a collection of my notes, and where to find additional resources.


##Index &amp; Terms

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



##Foundation vs. Abstraction <a name="foundation-vs-abstraction">&nbsp;</a>


##WebComponents <a name="webcomponents">&nbsp;</a>

###Templates <a name="templates">&nbsp;</a>

###Custom Elements <a name="custom-elements">&nbsp;</a>

###Shadow DOM &amp; Light DOM <a name="shadow-dom-and-light-dom">&nbsp;</a>

####Shadow Root <a name="shadow-root">&nbsp;</a>

####Shadow Boundary <a name="shadow-boundary">&nbsp;</a>

####Shadow Host <a name="shadow-host">&nbsp;</a>

####DOM Subtrees <a name="dom-subtrees">&nbsp;</a>

###HTML Imports <a name="html-imports">&nbsp;</a>

##Polyfills <a name="polyfills">&nbsp;</a>

##Polymer <a name="polymer">&nbsp;</a>

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


<!-- ##What Next?

###Comparisons

- [Polymer VS Angular](http://www.binpress.com/blog/2014/06/26/polymer-vs-angular/)


###Resourcess

- [WebComponents.org](http://webcomponents.org/)
- [Definitive list of HTML5 Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)
- Link 3 -->