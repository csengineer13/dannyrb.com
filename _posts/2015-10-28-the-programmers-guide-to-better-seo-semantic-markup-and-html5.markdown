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
	<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}non-semantic-layout.png" alt="" />
</figure>

###Non-Semantic
With all of the styling ripped away, and using non-semantic elements (like `<span>` and `<div>`), this is what a bot would see. Going off of this structure alone, the bot is forced to make "best guesses" about the context of the page's content. 

> Do you know where to find the unique content on this page? Do you know which content isn't relevant?

I'm sure you can make some educated guesses. But it's hard to know for sure.

<figure class="w-3 pull-r">
	<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}semantic-layout.png" alt="" />
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
- `<address>`

The remaining sectioning elements can be used any number of ways so long as their meaning is preserved. For example: your webpage can have a `<footer>`, but an `<artical>` can also have a `<footer>`.

####Still confused? 
[Tree House](https://teamtreehouse.com/) has a great article that [examines each sectioning element](http://blog.teamtreehouse.com/use-html5-sectioning-elements), and HTML5 Doctor has a [great flow-chart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png) that walks you through picking the right element.

###Other Semantic Elements

- H1 through H6
- Links
- Paragraph
- Basically.. Don't abuse them


##FAQ

// Why not `<zoidberg>`?


##Next Steps



- HTML5 "Flow" Tags
- MicroData & Schema.org
- MetaData
- [asdasd](https://www.google.com/webmasters/markup-helper/u/0/)
- [asdasd](MicroFormats? http://html5doctor.com/microformats/)



##Resources & More Reading: 
- Overview: [W3Schools Semantic Elements][W3Schools]
- In-Depth: [HTML5 Doctor: Let's Talk Semantics][HTML5Doctor]
- Official: [W3C][W3C]

[W3Schools]:    http://www.w3schools.com/html/html5_semantic_elements.asp
[HTML5Doctor]: 	http://html5doctor.com/lets-talk-about-semantics/
[W3C]: 			http://www.w3.org/TR/html5/dom.html#dom
