//Import dependencies
var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');

//Import configuration
var config = require('./config.js');

//Minimize the css files
var minimizeCss = function()
{
  //Set the source file
  return gulp.src(path.join(config.dist, './siimple-colors.css'))

  //Clean the css
  .pipe(cleanCSS({ compatibility: '*' }))

  //Rename the file
  .pipe(rename({ extname: '.min.css' }))

  //Add the header
  .pipe(header(config.banner, { } ))

  //Save on the dist folder
  .pipe(gulp.dest(config.dist));
};

//Call the minimize task
minimizeCss();
