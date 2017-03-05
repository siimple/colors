//Import dependencies
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var del = require('del');

//Import the package
var pkg = require('./package.json');

//Import data
var data = require('./data.json');

//Banner structure
var banner = []
banner.push('/**');
banner.push(' * <%= pkg.name %> - <%= pkg.description %>');
banner.push(' * @version v<%= pkg.version %>');
banner.push(' * @link <%= pkg.homepage %>');
banner.push(' * @license <%= pkg.license %>');
banner.push('**/');
banner.push(' ');
banner.push(' ');

//Join the banner
banner = banner.join('\n');

//Clean the dist folder
gulp.task('clean', function()
{
  //Clean the dist folder
  return del.sync([ './dist/**' ]);
});

//Compile the colors palette
gulp.task('compile:scss', function()
{
  //Handlebars options
  var opt = { helpers: {} };

  //Add the capitalize text helper
  opt.helpers.capitalize = function(text){ return text.charAt(0).toUpperCase() + text.substring(1); };

  //Compile the handlebars files
  return gulp.src('./templates/**.hbs')

  //Compile the handlears files
  .pipe(handlebars(data, opt))

  //Rename the file
  .pipe(rename({ extname: '' }))

  //Save
  .pipe(gulp.dest('./scss/'));
});

//Build the SCSS files
gulp.task('build:scss', function()
{
  //Select all the SCSS files
  gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass().on('error', sass.logError))

  //Autoprefix
  .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save on the dist folder
  .pipe(gulp.dest('./dist/'));
});

//Build task
gulp.task('build', [ 'build:scss' ]);

//Compile task
gulp.task('compile', [ 'compile:scss' ]);

//Execute the tasks
gulp.task('default', [ 'clean', 'build' ]);
