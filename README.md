# Bootstrap 4 Grid System (Flex)

Bootstrap v4.4.1 grid system and layout utilities.

## What's Included

* [Grid](https://getbootstrap.com/docs/4.4/layout/grid/)
* [Layout Utilities](https://getbootstrap.com/docs/4.4/layout/utilities-for-layout/)

## Why?

Here's what you get that Bootstrap 4 currently doesn't provide out of the box:

* [Grid Equal-Width Multi-Row](https://getbootstrap.com/docs/4.4/layout/grid/#equal-width-multi-row)
* [Sizing Utility](https://getbootstrap.com/docs/4.4/utilities/sizing/)
* [Display Utility](https://getbootstrap.com/docs/4.4/utilities/display/)
* [Spacing Utility](https://getbootstrap.com/docs/4.4/utilities/spacing/)
* [Visibility Utility](https://getbootstrap.com/docs/4.4/utilities/visibility/)
* [Position Utility](https://getbootstrap.com/docs/4.4/utilities/position/)
* [Text Utility](https://getbootstrap.com/docs/4.4/utilities/text/)
* [Screen Readers Utility](https://getbootstrap.com/docs/4.4/utilities/screen-readers/)

If you don't need any of the above, Bootstrap 4 already includes a grid only version with its
[Bootstrap CSS and JS](https://getbootstrap.com/docs/4.4/getting-started/download/#compiled-css-and-js) bundle.

## How to Use
Sass and CSS files are ready to be used in your project.

### CSS

Pretty straightforward.
Just get `css/grid.min.css` or `css/grid.css` and add it to your project.

### Sass

You will need to include the whole `scss` folder contents to your project.
Then, just import `grid.scss` into your project's sass file.

### NPM

````
npm install bootstrap-4-grid
````

### Yarn

````
yarn add bootstrap-4-grid
````

## Browser Support

We use [autoprefixer](https://github.com/postcss/autoprefixer) to add prefixes to the `css` files.
By default, the last 2 versions for each major browser is supported. To change this, follow the customization
instructions bellow.

__NOTE:__ Sass files do not include any browser specific prefixes. If you include them in your project,
you will need to use your own post css tool to add prefixes for different browsers. If you are using
[Angular CLI](https://github.com/angular/angular-cli) though, then `autoprefixer` is included by default
and you don't need to worry.

## Grid Options

The grid options are located inside the `scss/grid.scss` file. If you are going to be using the sass files in
your project, changing those will suffice. If you are going to be using the CSS files, then you will need to
change the options and then compile. For more details, see the customization instructions bellow.

__NOTE:__ If you are using the sass files and you want to avoid your options getting overridden by an update,
then copy and paste the options to your own sass file and include them before the `grid` file.

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

### Change Grid Options

Open `scss/grid.scss` and change the [default options](https://getbootstrap.com/docs/4.4/layout/grid/#customizing-the-grid).
Then, run:

````
grunt
````