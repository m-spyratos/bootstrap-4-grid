# Bootstrap 4 Grid System (Flex)
Bootstrap 4 grid system and responsive utilities.

## Version
Currently v4.0.0-alpha.6

## What's Included

* [Grid System](https://v4-alpha.getbootstrap.com/layout/grid/#content)
* [Responsive Utilities](https://v4-alpha.getbootstrap.com/layout/responsive-utilities/#content)

## Why?

Here's what you get that Bootstrap 4 currently doesn't provide out of the box:

* [Variable Width Content](https://v4-alpha.getbootstrap.com/layout/grid/#variable-width-content)
* [Multi-Row](https://v4-alpha.getbootstrap.com/layout/grid/#equal-width-multi-row)
* [Alignment](https://v4-alpha.getbootstrap.com/layout/grid/#alignment)
* [Reordering](https://v4-alpha.getbootstrap.com/layout/grid/#reordering)
* [Responsive Utilities](https://v4-alpha.getbootstrap.com/layout/responsive-utilities/#content)

If you don't need any of the above, Bootstrap 4 already includes a grid only version with its
[Bootstrap CSS and JS](https://v4-alpha.getbootstrap.com/getting-started/download/#bootstrap-css-and-js) bundle.

## How to Use
Sass and CSS files are ready to be used in your project.

### CSS
Pretty straightforward.
Just get `css/bootstrap-grid.min.css` or `css/bootstrap-grid.css` and add it to your project.

### Sass
You will need to include the whole `scss` folder contents to your project.
Then, just import `grid.scss` into your project's sass file.

## Browser Support

We use [autoprefixer](https://github.com/postcss/autoprefixer) to add prefixes to the `css` files.
By default, the last 2 versions for each major browser is supported. To change this, follow the customization
instructions bellow.

__NOTE:__ Sass files do not include any browser specific prefixes. If you include them in your project,
you will need to use your own post css tool to add prefixes for different browsers. If you are using latest
[Angular CLI](https://github.com/angular/angular-cli) though, then `autoprefixer` is included by default
and you don't need to worry.

## Grid Settings

The grid settings are located inside the `scss/grid.scss` file. If you are going to be using the sass files in
your project, changing those will suffice. If you are going to be using the CSS file, then you will need to
change the settings and then compile the CSS files. For more details, see the customization instructions bellow.

## Customization

You can roll your own build and/or change browser support.

### Requirements

* [NodeJS](https://nodejs.org/en/)
* [Grunt CLI](http://gruntjs.com/getting-started)
* [Sass](http://sass-lang.com/install) (not required for changing browser support)

Then install the dependencies:

````
npm install
````

### Change Browser Support

To change the default browser support (last 2 versions currently), you will need to first change the query
in the `browserlist` file, located at the root of this project. Read more about the
[supported queries](https://github.com/ai/browserslist#queries).

Then, run:

````
grunt browser
````

### Change Grid Settings

Open `scss/grid.scss` and change the [default settings](https://v4-alpha.getbootstrap.com/layout/grid/#customizing-the-grid).
Then, run:

````
grunt
````