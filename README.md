<div align="center">
  <img width="100%" src="https://rawgit.com/siimple/siimple-colors/master/media/logo-header.png" alt="siimple-core">
  <br>
</div>

# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![devDependency Status](https://david-dm.org/siimple/siimple-colors/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple-colors#info=devDependencies)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimpl/siimple-colors)

> An elegant and minimalistic color palette for UI design

## The palette

Visit http://siimple.juanes.xyz/colors.

## Install

You can download the color palette using [npm](https://www.npmjs.com/package/siimple-colors):

```
npm install siimple-colors --save
```

You can also use [bower](http://bower.io) for installing the package:

```shell
bower install siimple-colors --save
```

## Usage

### Using the compiled CSS file

Also, you have a compiled CSS file of this module placed in the `./dist` folder. Simply include it on your HTML file:

```html
<link rel="stylesheet" type="text/css" href="/path/siimple-colors/dist/siimple-colors.css">
```

Replace `/path/` with the path where you have downloaded the `siimple-colors` package.

For each color, there is a CSS variable (https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) with the format `--siimple-{color}-{number}`, where:

- `{color}`: is the color name (`navy`, `blue`, `red`, ...).
- `{number}`: an integer from 0 to 4 (0 is the darkest, 4 is the lightest).

Also, the base color is stored as a variable with the format `--siimple-{color}`.

**Example:**

```css
.my_link
{
  color: var(--siimple-red);
}

.bg_blue_light
{
  background-color: var(--siimple-blue-4);
}

.bg_blue_dark
{
  background-color: var(--siimple-blue-0);
}
```

### Using SASS/SCSS 

The source files included are written in [SASS](http://sass-lang.com/) and placed in `./scss`. You can import all mixins included on the package by adding the following line to your `scss` file:

```scss
@import "siimple-colors/scss/_all.scss";
```

Remember that you must add the `node_modules` path (or the `bower_components` path if you are using **bower**) to the SASS [load_paths](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#load_paths-option) option.

For each color, there is a variable called with the format `$siimple-{color}-{number}`, where:

- `{color}`: is the color name (`navy`, `blue`, `red`, ...).
- `{number}`: an integer from 0 to 4 (0 is the darkest, 4 is the lightest).

Also, the base color is stored as a variable with the format `$siimple-{color}`.

**Example:**

```scss
@import "siimple-colors/scss/_all.scss";

.text-green
{
  color: $siimple-green;
}

.text-blue-light
{
  color: $siimple-blue-4;
}

.text-blue-dark
{
  color: $siimple-blue-0;
}
```

## Build

You need [gulp](http://gulpjs.com) to build and generate the SASS/SCSS and the CSS files for this package (you can install it by running `npm install -g gulp`). Also, you need to install all the dependencies. For this, navigate to the root of this package and run:

```
npm install
```

The list with all the colors are stored in `colors.json`. The main SCSS file `_colors.scss` is built using handlebars and can be automatically generated running the following command:

```
gulp compile
```

If you want to compile the SASS files and generate the CSS version of this module, run:

```
gulp build
```

This will generate a file called `siimple-colors.css` placed in the `./dist/` folder.


## License

[MIT LICENSE](./LICENSE) &copy; The **siimple** team.
