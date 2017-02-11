# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![devDependency Status](https://david-dm.org/siimple/siimple-colors/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple-colors#info=devDependencies)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimpl/siimple-colors)

> A color palette for UI design

## Install

You can install the color palette using [npm](https://npmjs.com/package/siimple-colors):

```
npm install --save siimple-colors
```

Or you can install it using [bower](http://bower.io):

```
bower install siimple-colors
```

## Usage

### Using the SASS/SCSS mixins

The source files included are written in [SASS](http://sass-lang.com/) and stored in `./scss`. You can import all the mixins included on the package like this:

```sass-lang
@import "/path/to/siimple-colors/scss/_mixins.scss";
```

For each color, there is a variable called with the format `$siimple-colors-{color}-{number}`, where `{color}` is one of the colors of the palette, and `{number}` is an integer from 0 to 4. Also, the base color is stored as a variable with the format `$siimple-colors-{color}`, where `{color}` is one of the colors of the palette.


### Using the CSS version

Also, you have a compiled CSS version of this module placed in the `./dist` folder. Simply include it on your HTML file:

```html
<link rel="stylesheet" type="text/css" href="./path/to/siimple-colors/dist/siimple-colors.css">
```

You can also include the minimized CSS version:

```html
<link rel="stylesheet" type="text/css" href="./path/to/siimple-colors/dist/siimple-colors.min.css">
```


## Build

You need [gulp](http://gulpjs.com) to build and generate the SASS/SCSS and the CSS files for this package. Also, you need to install all the dependencies. For this, navigate to the root of this package and run:

```
npm install
```

The colors that compose this module are stored in `data.json`. SASS/SCSS files like `_variables.scss`, `_colors.scss` and `_palette.scss` can be generated running the following command:

```
gulp compile
```

If you want to compile the SASS files and generate the CSS version of this module, run:

```
gulp build
```

This will generate a file called `siimple-colors.css` placed in the `./dist/` folder. And if you want to minimize the builded CSS file, run:

```
gulp minimize
```

This will generate a file called `siimple-colors.min.css` placed in `./dist/`.

## Documentation

Please visit [the main page](http://siimple.juanes.xyz/colors) of this package for getting more information and usage details.

## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
