# David Awad's Blog

This is my personal website. It's built on Hyde, a theme for poole which complements the jekyll static site generator. It supports my blog and exports natively to RSS feeds as well!

Hyde is a brazen two-column [Jekyll](http://jekyllrb.com) theme that pairs a prominent sidebar with uncomplicated content. It's based on [Poole](http://getpoole.com), the Jekyll butler.

The site looks like this screenshot.
![Hyde screenshot](https://f.cloud.github.com/assets/98681/1831228/42af6c6a-7384-11e3-98fb-e0b923ee0468.png)

## About Jekyll
If you're going to set this site up for development you're going to need some tools. Start with the basic setup with the necessary packages.


```
cd public && bower install

cd public && scss --watch scss:../_assets/css

gem install bundler
bundle install
bundle exec jekyll serve --incremental
```

When you run that command, jekyll will watch all the files in this directory and whenever you make any file changes, you'll see the final templated version within the `_site` folder. That's the folder that will get served in the end!

### Misc. Static files
Static files you want to include should go into `public/css`

### Archives
Archives are handled by the jekyll-archives plugin, the routes are defined in `_config.yml`.



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


### Math Rendering
Math rendering is handled through [mathjax](https://www.mathjax.org/). At any point in a post file you can simply use the delimiters for math and it will render as expected.

```html
<p>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>
```

### Side Comments
You may notice the humorous side comments throughout the blog, those are handled by [sidecomments.js](http://aroc.github.io/side-comments-demo/)


The package allows us to configure a default user for commenting (this blog doesn't support reader comments),  so for fun I chose Jon Snow.
```js
// setup side comments once
var SideComments = require('side-comments');
const currentUser = {
  id: 1,
  avatarUrl: "http://aroc.github.io/side-comments-demo/public/images/jon_snow.png",
  name: "Jon Snow"
}
```

After this configuration inserting a side comment is somewhat easy. You have to apply a specific commentable class to a section of html that will have these side comments.

```html
<div id="commentable-area">
  <p data-section-id="1" class="commentable-section">
    This is a section that can be commented on.
  </p>
  <p data-section-id="2" class="commentable-section">
    This is a another section that can be commented on.
  </p>
  <p data-section-id="3" class="commentable-section">
    This is yet another section that can be commented on.
  </p>
</div>
```

Now you have to define what the actual comments will be. The library supports defining an avatar as well as a name and comment. So you can define an object such as the following for a given post.

```js
  var existingComments = [
    {
      "sectionId": "1",
      "comments": [
        {
          "authorAvatarUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p40x40/18767456_10209609928627107_8142159910520783435_n.jpg?oh=75aeda682cdf4ebd3cbd505a89f27dc0&oe=5A09013A",
          "authorName": "David Awad",
          "comment": "You actually just traveled again just now."
        }
      ]
    },
    {
      "sectionId": "3",
      "comments": [
        {
          "authorAvatarUrl": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p40x40/18767456_10209609928627107_8142159910520783435_n.jpg?oh=75aeda682cdf4ebd3cbd505a89f27dc0&oe=5A09013A",
          "authorName": "David Awad",
          "comment": "There it is again!."
        }
      ]
    }
  ];
```

Then we create a tell the library to look for the comment areas and apply the side comments objects.
```js
  sideComments = new SideComments('#commentable-area', currentUser, existingComments);
```

## License
Open sourced under the [MIT license](LICENSE.md).
