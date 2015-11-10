---
ispost: 		  true
layout: 		  post
title:  		  "How To Use Google Analytics' API To Share Your Traffic"
date:   		  2015-11-10 11:00:00
published:	 	"2015-11-10T11:00:00+01:00"
categories: 	seo, html5
description: 	"Search"
ogimg: 			  ""
googleimg: 		""
twitterimg: 	""
---

This is a "proof of concept" post on open sourcing your website's traffic data. A number of enhancements, both visual and performance wise, can be made. This post walks you through getting the data into your hands, so you can do with it what you will (:

**Finished Product:** [Example Here](http://dannyrb.com/traffic/)

**Project on GitHub:** [Click Here](https://github.com/csengineer13/google-analytics-traffic)


##Sharing Your Traffic

One of the most difficult components of working with Google's APIs is authentication. Thankfully, Google has a number of [client libraries](https://developers.google.com/discovery/libraries?hl=en) that make this easier.

For this guide, we'll be using:

1. Google's [PHP API Client Library](https://developers.google.com/api-client-library/php/)
2. Google's [Embeded API](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)

We're doing this for a couple of reasons. First, I eventually want to package this code into a reusable HTML WebComponent. Second, the Javascript API cannot generate it's own Auth Token; it needs to be passed one from a server side call.

It's worth noting that we could swap out the PHP portion of the code with any of Google's other [API Client Libraries](https://developers.google.com/discovery/libraries?hl=en).


###Installing PHP API Client Library

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

This is where you manage permissions and account associations for all of Google's APIs. We need to navigate to the [Developer Console](https://console.developers.google.com/project) and **create a reference to the project that will be pulling our analytics data.**

<figure class="w-1 pad-me">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}create-project-google-dev-console.png"  alt="example of creating a new project in google developer console" />
</figure>

Next, we need to **turn on API Access to Google Analytics** for this project. From your new project's dashboard, navigate to "API", then "Analytics". You should see this screen. Click "Enable" to turn on support for the Analytic's API.

<figure class="w-1 pad-me">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}enable-api-google-dev-console.png"  alt="example of adding API permissions in google developer console" />
</figure>



###Service Accounts

Okay, now Google requires an authenticated account to access account specific data. We don't want our users to have to authenticate (they couldn't see our data anyway). To get around this, Google uses [Service Accounts](https://developers.google.com/identity/protocols/OAuth2ServiceAccount).

Think of our Service Account as just another user account. We need to:

- Create it ;)  (It has it's own e-mail address)
- Grant it account permissions in Google Analytics
- Use it's credentials to authenticate before requesting data

####Create A Service Account

To create a service account, we head back to the Google Developer Console, and access the project we created in our previous steps. You **select "Credentials", "Add Credentials", and then "Service Account".** You should see your newly created service account as pictured below! Make sure to **save the e-mail address of your new account** in a text file. We'll be using it in the next steps.

<figure class="w-1 pad-me">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}add-service-account-google-dev-console.png"  alt="example of adding a service account in google developer console" />
</figure>

**Note:** In the last step, you should have been forced to download a JSON Key file. If you don't have one, or you've lost yours, you can generate a new file by viewing the details of your service account and clicking "Generate New JSON Key"


####Give Our Service Account Permissions

Next, we need to make sure our Service Account has permission to read the data we want to query. We can give it permission by logging in to our Google Analytics account, navigating to "Admin", under "Account" selecting "User Management", and finally by **adding "Read &amp; Analyze" permissions for our Service Account using its e-mail address.**

<figure class="w-1 pad-me">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}add-permisions.png"  alt="example of adding a service account in google developer console" />
</figure>



###Querying Data

And finally... Lets write some code. Here is the general run-down of what we need to do:

- Use _server-side_ library to authenticate our service account
- Authentication process provides us an _access token_
- Pass _access token_ to _client-side_ api
- Query for data using embedded _client-side_ api
- Render charts using built in functions


####Server-Side Code

{% highlight php %}
<?php
// MUST be using composer
require_once '/path/to/vendor/autoload.php';
session_start();	 	

$client = new Google_Client();	 	
// Name of proj in GoogleDeveloperConsole
$client->setApplicationName("Example Project");

// Generated in GoogleDeveloperConsole --> Credentials --> Service Accounts
$client->setAuthConfig('/some/secure/path/example-project-c0a14bc34a03.json');
$client->addScope(Google_Service_Analytics::ANALYTICS_READONLY);

// Grab token if it's set
if (isset($_SESSION['service_token'])) {
 	$client->setAccessToken($_SESSION['service_token']);
}

// Refresh if expired
if ($client->isAccessTokenExpired()) {
	$client->refreshTokenWithAssertion();
}

// Pin to Session
$_SESSION['service_token'] = $client->getAccessToken();

$myToken = $client->getAccessToken();
?>
{% endhighlight %}

**_Note:_**

- The `require_once` is referencing a file generated by Composer. 
- `setApplicationName()` is being passed the name of our project
- `setAuthConfig()` is passed the location of our JSON Key file
	- Please put this in a secure place


####Client-Side Code
{% highlight html %}
<body>
<!-- Load Google's Embed API Library -->
<script>
(function(w,d,s,g,js,fs){
g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
js.src='https://apis.google.com/js/platform.js';
fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'));
</script>

<div id="chart-1-container"></div>

<script>
gapi.analytics.ready(function() {

  /**
   * Authorize the user with an access token obtained server side.
   */
  gapi.analytics.auth.authorize({
    'serverAuth': {
      'access_token': '<?php print_r($myToken["access_token"]); ?>'
    }
  });

  /**
   * Creates a new DataChart instance showing sessions over the past 30 days.
   * It will be rendered inside an element with the id "chart-1-container".
   */
  var dataChart1 = new gapi.analytics.googleCharts.DataChart({
    query: {
      'ids': 'ga:110849216', 			// THIS NEEDS TO BE A VIEW
      'start-date': '30daysAgo',		// THAT YOUR SERVICE ACCOUNT HAS
      'end-date': 'yesterday',			// ACCESS TO
      'metrics': 'ga:sessions,ga:users',
      'dimensions': 'ga:date'
    },
    chart: {
      'container': 'chart-1-container',
      'type': 'LINE',
      'options': {
        'width': '100%'
      }
    }
  });
  dataChart1.execute();
});
</script>
</body>
{% endhighlight %}

**_Note:_**

- Our `accessToken` is being passed in by the _server-side_ language
- Our ViewID `'ids': 'ga:110849216'` is specific to our <a href="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}find-view-id.png">Analytics View</a>

###Our Result

<figure class="w-1 pad-me">
	<a href="http://dannyrb.com/traffic/">
		<img src="{{ page.url  | replace:'/posts/','/' | prepend: '/assets' }}example-graph.png"  alt="line graph of our resulting data" />
		<figcaption>Click here to see the live result</figcaption>
	</a>
</figure>

Not beautiful, or even super functional, but it's a good start!

##What Next?

This is a proof of concept, so there are plenty of enhancements that can be made. On the visual UI/UX side we have:

- Set up charts to [work for multiple analytic "views"](https://ga-dev-tools.appspot.com/embed-api/multiple-views/)
- Add support for [real-time reporting](https://developers.google.com/analytics/devguides/reporting/realtime/v3/)
- Use Chart.js or [similar libraries to enhance charts](https://ga-dev-tools.appspot.com/embed-api/third-party-visualizations/)

But there are also performance issues that should be considered. You may want to look into storing common requests into a database, and then using data from your local database to display charts. This has the benefit of using less of your _query quota_ (set by Google), and the page should load much faster coming from a local data source.

####Stuck?

If you're stuck on a step, it could because my guide is now outdated. Try Googling the problem, but don't be afraid to ask for help in the comments below. I really, really appreciate any advice, feedback, and questions.


##Resources

**_Libraries and Google Documentation_**

- [Determine "Views" you can access](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/management/profiles/list?hl=en#try-it)
- [Google's PHP API Client](https://github.com/google/google-api-php-client)
- [Embeded API Tutorials](https://ga-dev-tools.appspot.com/embed-api/)
- Crafting different [queries to pull back data](https://ga-dev-tools.appspot.com/query-explorer/)


**_My repositories:_**

- Main example [on GitHub](https://github.com/csengineer13/google-analytics-traffic/blob/master/index.php)
- PHP Only example [on GitHub](https://github.com/csengineer13/google-analytics-traffic/blob/master/examples/php-only-data-query.php)

**_Other Blogs/Guides_**

Most of these use deprecated functions, but they provided a lot of clarity to the process for me. I hope they can help, and if you have specific questions, please feel free to reach out.

- [Google Calendar API with PHP -- Service Account](http://www.daimto.com/google-calendar-api-with-php-service-account/)
- [Google Analytics OAuth2 -- PHP](http://www.daimto.com/google-oauth2-php/)
- [Google Analytics API Authentication with C#](http://www.daimto.com/googleanalytics-authentication-csharp/)