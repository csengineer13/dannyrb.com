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

##Semantic Markup: Speaking the Same Language

What's wrong with this code?

Two images: Non-Semantic vs Semantic

http://www.w3schools.com/html/html5_semantic_elements.asp

<!-- {% highlight html %}

<div>
	<div class="js-link" target="home">Home</div>
	<div class="js-link" target="about">About</div>
</div>
<div class="js-link ad-bar" target="affiliat-1">Drink more Chipmunk Milk!</div>
<div>
	<div class="myh">Chipmunks Love Candy</div>
	<div class="byline">By: Joe Shmo</div>
	<div>Chipmunks do love candy, but they get tired of it quickly. My independent 
	research shows that...<div class="js-link" target="article-1">Read More</div></div>
</div>
<div>Chipmonk Co. Copyright 2015</div>

{% endhighlight %}

{% highlight html %}

<header>
	<nav>
		<ul>
			<li><a href="/home">Home</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>
<section class="top-add">Drink more Chipmunk Milk!</section>
<main>
	<article>
		<h1>Chipmunks Love Candy</h1>
		<div class="byline">By: Joe Shmo</div>
		<p>Chipmunks do love candy, but they get tired of it quickly. My independent 
		research shows that... <a href="/posts/chipmunks-love-candy">Read More</a></p>
	</article>
</main>
<footer>Chipmonk Co. Copyright 2015</footer>

{% endhighlight %} -->


- HTML5 "Flow" Tags
- MicroData & Schema.org
- MetaData
- https://www.google.com/webmasters/markup-helper/u/0/



##Resources & More Reading: 
- Overview: [W3Schools Semantic Elements][W3Schools]
- In-Depth: [HTML5 Doctor: Let's Talk Semantics][HTML5Doctor]
- Official: [W3C][W3C]

[W3Schools]:    http://www.w3schools.com/html/html5_semantic_elements.asp
[HTML5Doctor]: 	http://html5doctor.com/lets-talk-about-semantics/
[W3C]: 			http://www.w3.org/TR/html5/dom.html#dom
