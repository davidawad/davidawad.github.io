---
layout: post
title: Example content
---


<div class="message">
  Howdy! This is an example blog post that shows several types of HTML content supported in this theme.
</div>

Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. *Aenean eu leo quam.* Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

> Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

Etiam porta **sem malesuada magna** mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

## Inline HTML elements

HTML defines a long list of available inline tags, a complete list of which can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

- **To bold text**, use `<strong>`.
- *To italicize text*, use `<em>`.
- Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>`, with an optional `title` attribute for the full phrase.
- Citations, like <cite>&mdash; Mark otto</cite>, should use `<cite>`.
- <del>Deleted</del> text should use `<del>` and <ins>inserted</ins> text should use `<ins>`.
- Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.

Most of these elements are styled by browsers with few modifications on our part.

## Heading

Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

### Code

Cum sociis natoque penatibus et magnis dis `code element` montes, nascetur ridiculus mus.

{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.

### Gists via GitHub Pages

Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.

### Lists

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.

<dl>
  <dt>HyperText Markup Language (HTML)</dt>
  <dd>The language used to describe and define the content of a Web page</dd>

  <dt>Cascading Style Sheets (CSS)</dt>
  <dd>Used to describe the appearance of Web content</dd>

  <dt>JavaScript (JS)</dt>
  <dd>The programming language used to build advanced Web sites and applications</dd>
</dl>

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.

### Images

Quisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.

![placeholder](http://placehold.it/800x400 "Large example image")
![placeholder](http://placehold.it/400x200 "Medium example image")
![placeholder](http://placehold.it/200x200 "Small example image")

### Tables

Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Upvotes</th>
      <th>Downvotes</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Totals</td>
      <td>21</td>
      <td>23</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>4</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>7</td>
      <td>9</td>
    </tr>
  </tbody>
</table>

Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.

### quotes

```html
<div class="cd-testimonials-wrapper">
			<p>
        "The greatest lies are the ones we tell ourselves."
      </p>
			<div class="cd-author">
				<img src="{{ site.baseurl }}public/img/david_icon.jpg" alt="Author image">
				<ul class="cd-author-info">
					<li>David Awad</li>
				</ul>
			</div>
</div>
```

<div class="cd-testimonials-wrapper">
			<p>
“While the Newtonian insistence on ensuring that any statement is testable by observation […] undoubtedly cuts out the crap, it also seems to cut out almost everything else as well”, as it prevents taking position on several topics such as politics or religion." 
      </p>
			<div class="cd-author">
				<img src="https://lh3.googleusercontent.com/-EmIkaYewYZM/AAAAAAAAAAI/AAAAAAAAGYM/UzH1yuoNiZ0/photo.jpg" alt="Author image">
				<ul class="cd-author-info">
					<li>Michael Adler</li>
				</ul>
			</div>
</div>

### side comments


```html
<div id="commentable-area">
  <p data-section-id="1" class="commentable-section">
  But if we compress this much mass to a space on the order of $1/10^{35}$ . . . it becomes a black hole. It's worth pointing out that a black hole is only called that because the escape velocity is larger than the speed of light, so we don’t actually know what happens inside of one because we can’t measure it. (this could change with the recent discovery of <a href="https://www.sciencenews.org/article/gravitational-waves-explained"> gravitational waves</a>)
  </p>

  <p>
  Well this is weird. If we have no way to measure what’s going on at such a small distance scale, now it doesn’t mean anything?
  </p>

  <p>
  Well, according to some physicists. . .  <em>yeah</em>.
  </p>
  <p>
  This is an interesting consequence of what you might now realize is a bit of a Polarizing view. In fact, Adler goes on to say the same.
  </p>
</div>
```


<div id="commentable-area">
  <p data-section-id="1" class="commentable-section">
  But if we compress this much mass to a space on the order of $1/10^{35}$ . . . it becomes a black hole. It's worth pointing out that a black hole is only called that because the escape velocity is larger than the speed of light, so we don’t actually know what happens inside of one because we can’t measure it. (this could change with the recent discovery of <a href="https://www.sciencenews.org/article/gravitational-waves-explained"> gravitational waves</a>)
  </p>

  <p>
  Well this is weird. If we have no way to measure what’s going on at such a small distance scale, now it doesn’t mean anything?
  </p>

  <p>
  Well, according to some physicists. . .  <em>yeah</em>.
  </p>
  <p>
  This is an interesting consequence of what you might now realize is a bit of a Polarizing view. In fact, Adler goes on to say the same.
  </p>
</div>


##### Just include a script tag defining the side comments!

```js
<script>
  // comments for this particular article
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "{{ site.baseurl }}public/img/david_icon.jpg",
          "authorName": "David Awad",
          "comment": "you can actually work that one out yourself just by looking at the escape velocity for that mass and radius of $ Δx $."
        }
      ]
    }
  ];
</script>
```


<script>
  // comments for this particular article
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p40x40/18767456_10209609928627107_8142159910520783435_n.jpg?oh=75aeda682cdf4ebd3cbd505a89f27dc0&oe=5A09013A",
          "authorName": "David Awad",
          "comment": "you can actually work that one out yourself just by looking at the escape velocity for that mass and radius of $ Δx $."
        }
      ]
    }
  ];
</script>


-----

Want to see something else added? <a href="https://github.com/poole/poole/issues/new">Open an issue.</a>
