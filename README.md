<div align="center">
  <img height="300px" src="https://rawgit.com/siimple/siimple-colors/develop/media/logo.png" alt="siimple-colors">
</div>

# siimple-colors

[![npm](https://img.shields.io/npm/v/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![npm](https://img.shields.io/npm/dt/siimple-colors.svg?style=flat-square)](https://www.npmjs.com/package/siimple-colors)
[![devDependency Status](https://david-dm.org/siimple/siimple-colors/dev-status.svg?style=flat-square)](https://david-dm.org/siimple/siimple-colors#info=devDependencies)
[![npm](https://img.shields.io/npm/l/siimple-colors.svg?style=flat-square)](https://github.com/siimpl/siimple-colors)

**siimple-colors** is an elegant and minimalistic color palette for UI design.


## Getting started

**siimple-colors** can be installed using [npm](https://www.npmjs.com/package/siimple-colors):

```bash
$ npm install --save siimple-colors
```

Or imported in your HTML files using a [CDN](https://www.jsdelivr.com/package/npm/siimple-colors).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple-colors@1.0.0/dist/siimple-colors.min.css">
```

## Documentation 

We are working on a new documentation for `v1.0.0`.

## Examples 

### Using CSS variables: 

```css 
.red-text {
    color: var(--siimple-red);
}

.blue-text {
    color: var(--siimple-blue-light);
}

.green-bg {
    background-color: var(--siimple-green-dark);
}
```

### Using CSS selectors

```html 
<span class="siimple--color-red">Text with red color</span>
<span class="siimple--bg-blue-dark siimple--color-white">White text with dark blue color</span>
```

### Using SASS/SCSS 

Using the `siimple-color` function defined in `scss/functions.scss` is the easiest way to load our colors in your **SASS/SCSS** files. This function will return a string with the hex value of the desired color, and gets two arguments:

- `COLOR`: a string with the desired color.
- `LIGHTNESS`: a string with the desired lightness variant of the color. This argument is optionally, so if is not provided the function will return the base color.

```scss
@import "siimple-colors/scss/functions.scss";

.blue-text {
    color: siimple-color("blue");
}
.red-text {
    color: siimple-color("red", "extra-dark");
}
.green-bg {
    background-color: siimple-color("green", "light");
}
```

You can also use the colors variables defined in `scss/colors.scss`. Each color has a variable with the format `$siimple-{COLOR}` for the base color and `$siimple-{COLOR}-{LIGHTNESS}` for the darken and lighten variants of the color. 

```scss
@import "siimple-colors/scss/colors.scss";

.blue-text {
    color: $siimple-blue;
}
.red-text {
    color: $siimple-red-extra-dark;
}
.green-bg {
    background-color: $siimple-green-light;
}
```

## License

Code and documentation &copy; 2018 the **siimple team**. The code is released under the [MIT License](./LICENSE) and the documentation is released under the [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).

The **siimple-colors** logo is &copy; 2018 Josemi Juanes. Released under the [Creative Commons CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).

