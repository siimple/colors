<div align="center">
  <img height="300px" src="https://rawgit.com/siimple/siimple-colors/develop/media/logo-colored.png" alt="siimple-colors">
  <br>
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple-colors@1.0.0-beta.1/dist/siimple-colors.min.css">
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

```scss
@import "siimple-colors/scss/_all.scss";

.red-text {
    color: siimple-color("red");
}

.blue-text {
    color: siimple-color-light("blue");
}

.green-bg {
    background-color: $siimple-green-dark;
}
```

## License

[MIT LICENSE](./LICENSE) &copy; The **siimple** team.
