//Import dependencies
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rmr = require('rmr');
var utily = require('utily');

//Import the package
var pkg = require('./package.json');

//Import colors
var colors = require('./colors.json');

//Banner structure
var banner = [];
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
  return rmr.sync('./dist/');
});

//Compile the scss files
gulp.task('compile', function()
{
  //Initialize the handlebars options
  var hbs_options = { };

  //Add the helpers functions
  hbs_options.helpers = { capitalize: utily.string.capitalize };

  //Compile the scss files
  gulp.src('templates/**.scss.hbs')

  //Compile using handlebars
  .pipe(handlebars(colors, hbs_options))

  //Change the extension name
  .pipe(rename({ extname: '' }))

  //Save to the scss folder
  .pipe(gulp.dest('scss/'));
});

//Build the SCSS files
gulp.task('build', function()
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
  .pipe(gulp.dest('dist/'));
});

//Minimize the css files
gulp.task('minimize', function()
{
  //Set the source file
  gulp.src('dist/siimple-colors.css')

  //Clean the css
  .pipe(cleanCSS({ compatibility: '*' }))

  //Rename the file
  .pipe(rename({ extname: '.min.css' }))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save on the dist folder
  .pipe(gulp.dest('dist/'));
});

//Execute the tasks
gulp.task('default', [ 'clean', 'build' ]);
