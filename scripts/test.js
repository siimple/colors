let gulp = require("gulp");
let rename = require("gulp-rename");
let handlebars = require('gulp-compile-handlebars');

let config = require("./config.js");

//Build the test files
let buildTest = function () {
    let data = {
        version: config.getVersion(),
        colors: config.getColors()
    };
    return gulp.src("test/**.hbs")
        .pipe(handlebars(data, {}))
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest("test/"));
};
buildTest();
