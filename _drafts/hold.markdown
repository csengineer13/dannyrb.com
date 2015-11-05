##Templates

HTML is a living breathing standard. It grows and adjusts to better supply the developers that use it with the tools they need.

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

WebComponents are a collection of standards that make it possible for us to bundle markup and styles into custom HTML elements. These custom elements fully encapsulate their HTML and CSS. This means simpler CSS that only applies to your element, and outside JS can't interfere with your element's inner workings. This paves the way for custom components that can be [easily shared across projects](https://customelements.io/)!

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

<br />
For an explanation and implementations of the above, please continue reading (:




###Native Templates

###Custom Elements

The high notes

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