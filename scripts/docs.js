let gulp = require("gulp");
var handlebars = require('gulp-compile-handlebars');
let path = require("path");

let config = require("./config.js");

//Build the documentation website
let buildDocs = function () {
    let output = path.resolve(process.cwd(), "./docs/dist/");
    let data = {
        version: config.getVersion()
    };
    //Compile the html files
    gulp.src("docs/src/**.html")
        .pipe(handlebars(data, {}))
        .pipe(gulp.dest(output));
    //Copy the assets files
    gulp.src("docs/assets/**/*.*", {base: "docs/"})
        .pipe(gulp.dest(output));
};
buildDocs();
