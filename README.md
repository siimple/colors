# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![devDependency Status](https://david-dm.org/siimple/siimple-colors/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple-colors#info=devDependencies)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimpl/siimple-colors)

> A color palette for UI design

## The palette

Visit http://siimple.juanes.xyz/colors.

## Install

You can download the color palette using [bower](http://bower.io):

```
bower install siimple-colors --save
```

You can also use [npm](https://www.npmjs.com/package/siimple-colors) for installing the package:

```shell
npm install siimple-colors --save
```

## Usage

### Using the CSS version

Also, you have a compiled CSS version of this module placed in the `./dist` folder. Simply include it on your HTML file:

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
  color: var(--siimple-color-red);
}

.bg_blue_light
{
  background-color: var(--siimple-color-blue-4);
}

.bg_blue_dark
{
  background-color: var(--siimple-color-blue-0);
}
```

### Using the SASS/SCSS version

The source files included are written in [SASS](http://sass-lang.com/) and placed in `./scss`. You can import all the mixins included on the package by adding the following line to your `scss` file:

```sass
@import "./bower_components/siimple-colors/scss/_mixins.scss";
```

For each color, there is a variable called with the format `$siimple-{color}-{number}`, where:

- `{color}`: is the color name (`navy`, `blue`, `red`, ...).
- `{number}`: an integer from 0 to 4 (0 is the darkest, 4 is the lightest).

Also, the base color is stored as a variable with the format `$siimple-{color}`.

**Example:**

```scss
@import "/path/siimple-colors/scss/_mixins.scss";

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

The colors that compose this module are stored in `data.json`. The SCSS files `_variables.scss`, `_colors.scss` and `_palette.scss` can be generated running the following command:

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
