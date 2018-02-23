let gulp = require("gulp");
let handlebars = require('gulp-compile-handlebars');
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let path = require("path");

let config = require("./config.js");

//Build the documentation website
let buildDocs = function () {
    let output = path.resolve(process.cwd(), "./docs/dist/");
    let outputVendor = path.join(output, "./vendor/");
    let data = {
        version: config.getVersion()
    };

    //Compile the html files
    gulp.src("docs/src/**.html")
        .pipe(handlebars(data, {}))
        .pipe(gulp.dest(output));

    //Compile the scss files
    gulp.src("docs/scss/**.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ browsers: ["last 3 versions", "IE 9"], cascade: false }))
        .pipe(gulp.dest(output));

    //Copy the assets files
    gulp.src("docs/assets/**/*.*", {base: "docs/"}).pipe(gulp.dest(output));
    gulp.src("media/logo.svg").pipe(gulp.dest(output));

    //Copy the vendor files
    gulp.src("dist/siimple-colors.scss").pipe(gulp.dest(outputVendor));
};
buildDocs();
