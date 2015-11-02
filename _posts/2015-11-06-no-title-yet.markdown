---
layout: post
title:  "No Title Yet"
date:   2015-10-28 13:00:00
categories: webcomponents shadowdom polyfills
---

I have been hearing three cool sounding terms a lot as of late: `polyfill`, `polymer`, and `Shadow DOM`. What I thought would be a couple hours of research turned into a couple of week's worth. I've aggregated what I've learned. It's a lot, but I hope it's presented in a digestable and welcoming manner. If you have any tips/suggestions, please let me know in the comments below!

##The Problem

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

-- Overview

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


###Templates

- The only part of WebComponents that is part of the W3C Living Document (HTML5)
- Largest amount of Cross-Browser Support
- Only remaining browser to Implement is IE, and it is currently in the works

- Inert
- Hidden from CSS and Selectors
- Flexible Placement


####Want to explore Templates further?

- Link 1
- Link 2
- Link 3


###Custom Elements

- Next 


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