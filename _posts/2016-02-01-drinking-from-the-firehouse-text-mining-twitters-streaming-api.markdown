---
ispost: 		true
layout: 		post
title:  		"Drinking from the Firehouse: Text Mining Twitter's Streaming API"
date:   		2016-02-01 11:00:00
published:	 	"2016-02-01T11:00:00+01:00"
categories: 	python, pandas, text mining, matplotlib, twitter, api
description: 	"A description goes here"
ogimg: 			"http://dannyrb.com/assets/how-to-use-google-analytics-api-to-share-your-traffic/fb-final.png"
googleimg: 		"http://dannyrb.com/assets/how-to-use-google-analytics-api-to-share-your-traffic/fb-final.png"
twitterimg: 	"http://dannyrb.com/assets/how-to-use-google-analytics-api-to-share-your-traffic/fb-final.png"
---

**This post has three parts:**

- Data Mining: Collecting and Visualizing
- Data Mining: Increasing Relevance and Efficiency
- Data Mining: Automating and Hosting
- **Bonus:** Fun with Machine Learning

## Overview

Text mining is a subset of [data mining](https://www.reddit.com/r/explainlikeimfive/comments/19ect5/eli5_what_is_data_mining/c8n972t). The goal of text mining is to turn massive amounts of text into information (or insights) that are relevant, novel, and interesting. This post covers the basics needed to collect data from Twitter's Streaming API service using Python. We will also explore ways to manipulate the data to gain insights, and methods to help visualize them to make the insights more tangible. Techniques to help improve our results' quality will be addressed in the [next post in this series](http://dannyrb.com/#).

## Getting Started

There is more than one way to skin this cat. It is possible to follow along using other technologies, but it will likely be difficult for inexperienced programmers. Also, I've tried to include resources that I found helpful, or that detail other techniques and approaches.

### Setting Up Our Environment

**Requires:** 

- add doc links
- add description of each package

- [Python](https://www.python.org/downloads/)
- PIP

**Additional Setup:**

- `pip install tweepy` 
- `pip install pandas`
	- [Compiler/Numpy issues on install?](http://stackoverflow.com/questions/23064899/compiler-problems-with-pip-during-numpy-install-under-windows-8-1-7-enterprise)
	- [Broken chain / C Compiler?](https://www.microsoft.com/en-us/download/confirmation.aspx?id=44266)
- `pip install matplotlab`

[Should I use Python2 or Python3](https://wiki.python.org/moin/Python2orPython3)? The forces that be say Python 3, but to make starting easier we'll be using Python 2.7+. You can use Python 3+ to follow along, but some syntax changes may be required.

**Resources:**

- [Adding PIP to Window's PATH](http://stackoverflow.com/questions/4750806/how-do-i-install-pip-on-windows)

### Getting Twitter API Keys

## Connecting &amp; Listening to Twitter's Stream

### Reading and Understanding the Data

### Saving and Persisting the Data

## Parsing and Visualizing

