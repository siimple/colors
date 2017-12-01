//Import dependencies
var path = require('path');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var keue = require('keue');
var rmr = require('rmr');

//Import configuration
var config = require('./config.js');

//Initialize the new keue
var k = new keue(function(next)
{
  //Clean the output directory
  rmr.sync(config.dist);

  //Continue
  return next();
});

//Compile the css files
k.then(function(next)
{
  //Output stream
  var output = gulp.dest(config.dist);

  //Build task completed
  output.on('finish', function()
  {
    //Continue with the next task
    return next();
  });

  //Select all the SCSS files
  return gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass().on('error', sass.logError))

  //Autoprefix
  .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))

  //Add the header
  .pipe(header(config.banner, { } ))

  //Save on the dist folder
  .pipe(output);
});

//Minimize the css files
k.then(function(next)
{
  //Output stream
  var output = gulp.dest(config.dist);

  //Build task completed
  output.on('finish', function()
  {
    //Continue with the next task
    return next();
  });

  //Set the source file
  return gulp.src(path.join(config.dist, './siimple-colors.css'))

  //Clean the css
  .pipe(cleanCSS({ compatibility: '*' }))

  //Rename the file
  .pipe(rename({ extname: '.min.css' }))

  //Add the header
  .pipe(header(config.banner, { } ))

  //Save on the dist folder
  .pipe(output);
});

//Queue finished
k.finish(function()
{
  //Display in console
  console.log('Build completed');
});


