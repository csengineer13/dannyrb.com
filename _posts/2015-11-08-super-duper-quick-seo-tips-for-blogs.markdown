---
ispost: 		true
layout: 		post
title:  		"Super Duper Quick SEO Tips For Blogs"
date:   		2015-11-08 11:00:00
published:	 	"2015-11-08T11:00:00+01:00"
categories: 	seo, html5, blogs, microdata, schema.org, semantic
description: 	"A quick summary of what your blog should include to optimize itself for search engines and social shared."
ogimg: 			""
googleimg: 		""
twitterimg: 	""
---

A quick, no explanation reference on how to optimize blog posts and blogs for search engines.

##Meta Tags

Meta tags go in the `<head>` of an HTML document. They add additional information/context to the current web page or website.

- OpenGraph: Facebook tags
- Schema.org: Bing, Yahoo, Google, etc.
- Twitter: ... Twitter

{% highlight html %}
<!-- Update your html tag to include the itemscope and itemtype attributes. -->
<html itemscope itemtype="http://schema.org/Article">

<!-- Place this data between the <head> tags of your website -->
<title>Page Title. Maximum length 60-70 characters</title>
<meta name="description" content="Page description. No longer than 155 characters." />

<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="The Name or Title Here" />
<meta itemprop="description" content="This is the page description" />
<meta itemprop="image" content="http://www.example.com/image.jpg" />

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@publisher_handle" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description less than 200 characters" />
<meta name="twitter:creator" content="@author_handle" />
<!-- Twitter summary card with large image must be at least 280x150px -->
<meta name="twitter:image:src" content="http://www.example.com/image.html" />

<!-- Open Graph data -->
<meta property="og:title" content="Title Here" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.example.com/" />
<!-- 1200 x 630 For optimal sharing -->
<meta property="og:image" content="http://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />
<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
<meta property="article:section" content="Article Section" />
<meta property="article:tag" content="Article Tag" />
<meta property="fb:admins" content="Facebook numberic ID" />

{% endhighlight %}
HERE: [As a GitHub Gist](https://gist.github.com/csengineer13/8a2d374558ba2cef2d3d)


If you want to see if you've set these correctly, you can check to see how each of the appropriate vendors reads your webpage.

- OpenGraph Validator: [HERE](https://developers.facebook.com/tools/debug/)
- Twitter Card Validator: [HERE](https://cards-dev.twitter.com/validator)
- Schema.org Validator: [HERE](https://developers.google.com/structured-data/testing-tool/)

###More Reading

- OpenGraph Guide: [HERE](http://ogp.me/)
- Twitter Guide: [Here](https://dev.twitter.com/cards/overview)
- Schema.org Guide: [Here](http://www.internetmarketingninjas.com/blog/search-engine-optimization/schema-org-guide-beginners-cheatsheet/)


##Semantic Markup

Does your websites HTML markup contain a large number of `<div>` elements?!?! Use HTML tags that are more semantic/descriptive of the content they contain! `<div>s` can be replaced with...

`<article>`
`<aside>`
`<details>`
`<figure>`
`<figcaption>`
`<footer>`
`<header>`
`<main>`
`<nav>`
`<section>`
`<summary>`
`<time>`

Mostly self explanatory, but there are _a couple_ rules to how these should be used. For some direction, try reading my [more in-depth post on HTML5's sectioning elements](http://127.0.0.1:4000/posts/the-programmers-guide-to-better-seo-semantic-markup-and-html5/).

##Other Stuff

- Make it easy to share content
- HAVE AMAZING CONTENT (and original)
- `alt` tags for images
- Sign up for Google's [webmaster tools](https://www.google.com/webmasters/tools/home)
- Make your website mobile friendly
- Increase page load times
- URLs should contain key words to content on page
- Add SSL to your website


**But most importantly.. Provide solid, original content, and a great user experience.**