---
ispost: 		true
layout: 		post
title:  		"How To Use Google Analytics' API To Share Your Traffic"
date:   		2015-11-20 11:00:00
published:	 	"2015-11-20T11:00:00+01:00"
categories: 	seo, html5
description: 	"Search"
ogimg: 			""
googleimg: 		""
twitterimg: 	""
---

What started as an interesting and fun side project turned into hours of me swearing at my computer. It's my hope that the guide below will help save some developers the headache of trying to decipher Google's terrible (and often outdated) documentation.


##Sharing Your Traffic

One of the most difficult components of working with Google's APIs is authentication. Thankfully, Google has a number of [client libraries](https://developers.google.com/discovery/libraries?hl=en) that make this easier.

For this guide, we'll be using:

1. Google's [PHP Client Library](https://developers.google.com/api-client-library/php/)
2. Google's [Javascript Client Library](https://developers.google.com/api-client-library/javascript/start/start-js)

We're doing this for a couple of reasons. First, I eventually want to package this code into a reusable HTML WebComponent. Second, the Javascript API cannot generate it's own Auth Token; it needs to be passed one from a server side call.


###Installing PHP Client Library

You need a local PHP server for this to work well. If you don't already, look into setting one up using either:

- [XAMPP](https://www.apachefriends.org/index.html)
- [Or add PHP to IIS](http://php.iis.net/)

After installing a local server, make sure you have composer installed:

- [Get Composer!](https://getcomposer.org/doc/00-intro.md)

Next. open up a new command prompt window. Navigate to your product directory and use this command:

**composer require google/apiclient:^2.0.0@RC**

If you receive an error, you may want to try:

**composer require google/apiclient:^2@RC**

Or check out the GitHub Repository for [Google's PHP API Client](https://github.com/google/google-api-php-client) as the install instructions may have changed.


###Google Developers Console

This is where you manage permissions and account associations for all of Google's APIs. We need to navigate to the [Developer Console](https://console.developers.google.com/project) and create a reference to the project that will be pulling our analytics data.

<figure class="w-1">
	<a href="#">
		<img src="http://www.placehold.it/400x200"  alt="" />
	</a>
</figure>

Next, we need to turn on API Access to Google Analytics for this project.

<figure class="w-1">
	<a href="#">
		<img src="http://www.placehold.it/400x200"  alt="" />
	</a>
</figure>



####Creating a Service Account

adasdasdasdasdasd

<figure class="w-1">
	<a href="#">
		<img src="http://www.placehold.it/500x150"  alt="" />
	</a>
</figure>

.json file..

**Security concern**


###Giving Your Service Account Access to Site Data

For our example, we're granting view rights to all sites owned by this account.


###Querying Data

I need a better way to find this...

https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/management/profiles/list?hl=en#try-it

~all
~all

Find ID...


##Code


##Resources

Most of these use deprecated functions, but they provided a lot of clarity to the process for me. I hope they can help, and if you have specific questions, please feel free to reach out.

- [Google Calendar API with PHP -- Service Account](http://www.daimto.com/google-calendar-api-with-php-service-account/)
- [Google Analytics OAuth2 -- PHP](http://www.daimto.com/google-oauth2-php/)
- [Google Analytics API Authentication with C#](http://www.daimto.com/googleanalytics-authentication-csharp/)