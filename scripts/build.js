//Import dependencies
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var sass = require('gulp-sass');

//Import configuration
var config = require('./config.js');

//Build the SCSS files
var buildCss = function()
{
  //Select all the SCSS files
  return gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass().on('error', sass.logError))

  //Autoprefix
  .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))

  //Add the header
  .pipe(header(config.banner, { } ))

  //Save on the dist folder
  .pipe(gulp.dest(config.dist));
};

//Build the css files
buildCss();
