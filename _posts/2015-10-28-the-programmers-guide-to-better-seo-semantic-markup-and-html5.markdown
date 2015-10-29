---
layout: post
title:  "The Programmer's Guide to Better SEO: Semantic Markup and HTML5"
date:   2015-10-28 13:00:00
categories: seo html5
---

**Disclaimer:** Content is king. Provide value, make yourself accessible, make your website easy to navigate and easy to understand for your users. Everything detailed below is about Search Engine _OPTIMIZATION_, and is not worth a thought until you have something worth optimizing.

<hr /><br />


**Search Engines.** Their goal is to provide quality, up-to-date, and relevant content. To accomplish this, they send out little bots that [crawl and index](https://www.google.com/insidesearch/howsearchworks/crawling-indexing.html) trillions of web pages. Bots read these pages to better understand their content, and to help ensure they're serving up the best possible results. _How_ they weigh pages is a little bit of a mystery, but one thing is for sure:

> Bots need to be able to _read_ your web pages to properly index them.

Unfortunately, most websites are uneccessarily hard for these bots to read. Because of this, the bots are forced to make "best guesses" about the content; often causing less than optimal page rank (and thereby hurting SEO).

##Semantic vs. Non-Semantic

Humans can see web page styles. This allows us to group content and understand each element's context _regardless of the underlying DOM elements_. Robots lack this ability. When a bot reads a web page, it ignores all of the styling and uses the HTML tags to understand what it's looking at.

<figure class="w-3 pull-l">
	<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}non-semantic-layout.png" alt="a layout riddled with div elements" />
</figure>

###Non-Semantic
With all of the styling ripped away, and using non-semantic elements (like `<span>` and `<div>`), this is what a bot would see. Going off of this structure alone, the bot is forced to make "best guesses" about the context of the page's content. 

> Do you know where to find the unique content on this page? Do you know which content isn't relevant?

I'm sure you can make some educated guesses. But it's hard to know for sure.

<figure class="w-3 pull-r">
	<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}semantic-layout.png" alt="a more semantic layout" />
</figure>

###Semantic
By using semantic elements, how and where to find the different kinds of information on our web page becomes much clearer. Bots can now find: 

- Content unique to our page
- Where one article stops and another begins
- The components that make up each article
- Etc.

We can use semantic elements (basically "more descriptive `<div>` tags) to provide context and clarity. But what elements do we have at our disposal? What are the rules that govern when and how we should use them?


##Being Semantically Correct

There are two different kinds of semantic elements: [Sectioning Elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements) and.. uh.. [All of the other ones](http://www.w3schools.com/tags/default.asp). Where Sectioning Elements are more descriptive versions of the classic `<div>`, and the remaining elements imply or add additional behavior (`<a href=""></a>`, `<p></p>`, etc.)

###Sectioning Elements

`<main>` `<article>` `<section>` `<nav>` `<aside>` `<header>` `<footer>` `<address>`

For sectioning elements, there are only a few non-obvious rules regarding their usage:

- `<main>` Represents the main content of the page. There should only be one. You should not place &lt;main&gt; inside another semantic element.
- `<article>` Should make sense if distributed outside the context of the page. Can contain other articles. Should have a heading.
- `<aside>` Much like a [play's aside](https://en.wikipedia.org/wiki/Aside), content in an aside breaks away from the normal flow. It is usually related, and expands on something. Commonly contains `<figures>`, groups of `<nav>`s and quotes.
- `<address>` Should contain the author's contact information. Author of... the website, of the article, of the comment, etc.

The remaining sectioning elements can be used any number of ways so long as their meaning is preserved. For example: your webpage can have a `<footer>`, but an `<artical>` can also have a `<footer>`.

####Still Confused? 
[Tree House](https://teamtreehouse.com/) has a great article that [examines each sectioning element](http://blog.teamtreehouse.com/use-html5-sectioning-elements), and HTML5 Doctor has a [great flow-chart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png) that walks you through picking the right element.

###Other Semantic Elements

Most of HTML's elements are semantic, but arguably the most important ones (in order) are:

1. Title: `<title>`
2. Headers `<h1>` through `<h6>`
3. Hyperlinks `<a>`
4. Emphasis `<b>` and `<strong>`

Google bots are reading your web page trying to figure out [which keywords best correlate with your content](https://support.google.com/webmasters/answer/35255?hl=en). Like humans, they look to the `<title>` of the document, and at the main headings (`<h1>`, `<h2>`, and `<h3>`). They'll likely assume emphasized and bold words are important, and that any other web pages you link to are related to your content.

It is less common to see these elements missused. Switching out an `<aside>` with an `<article>` makes no visual difference, but swap a hyperlink `<a>` for `<span>` and you will immediately notice.

> `<aside>` == Ignorance ==> `<article>`

> `<a>` == Willfull Ignorance ==> `<span>`


###Still Confused?

[HTML5Doctor](http://html5doctor.com/) has a list of all HTML elements, as well as descriptions and examples of how and when to use them.


##FAQ

**_Why not `<insert-any-name-here>` elements?_**

Actually... The [newest W3C spec for WebComponents](http://www.w3.org/wiki/WebComponents/) leaves room for programmers to create their own DOM Elements. Projects like [Google's Polymer](https://www.polymer-project.org/1.0/) seeks to implement the new spec, and groups like [webcomponents.org](http://webcomponents.org/) are helping facilitate discussion and education on the topic.

**_Why should I take the time to care about Semantic Markup?_**

Going through your application and replacing lame duck `<div>`s with cool, hip-happenin' Sectioning Elements is a quick process. It nets you increased SEO, makes your website more accessible to modern screen readers, and you're creating easier to maintain code.


**_What does a google bot look like?_**

<figure class="w-3" style="margin: 0 auto;">
	<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}google-bot.png" alt="not an actual google bot" />
</figure>


##Next Steps

**MicroData &amp; [Schema.org](http://www.schema.org/)**

Semantic Markup on steroids. MicroData introduces additional tags search engines can use to pull specific data from your page. Not a part of the W3C spec, but standardized by the major search engines. [Here is a treehouse post on MicroData](http://blog.teamtreehouse.com/writing-semantic-microformats-amp-microdata-in-html-markup)


**MetaData &amp; Social Share**

Your website's metadata is important. It tells social websites how to [format specific pages when they're shared](http://www.quicksprout.com/2013/03/25/social-media-meta-tags-how-to-use-open-graph-and-cards/), it helps to further define your [page's keywords and relevance](http://webdesign.tutsplus.com/articles/meta-tags-and-seo--webdesign-9683) for SEO, and [so](http://secretsaucehq.com/blog/social-media/the-ultimate-guide-to-social-media-meta-tags/). [much](https://github.com/antistatique/electron2015/issues/3). [more](http://blog.hubspot.com/marketing/seo-tactics-2015).


##Resources & More Reading: 
- Overview: [W3Schools Semantic Elements][W3Schools]
- In-Depth: [HTML5 Doctor: Let's Talk Semantics][HTML5Doctor]
- Official: [W3C][W3C]

[W3Schools]:    http://www.w3schools.com/html/html5_semantic_elements.asp
[HTML5Doctor]: 	http://html5doctor.com/lets-talk-about-semantics/
[W3C]: 			http://www.w3.org/TR/html5/dom.html#dom
