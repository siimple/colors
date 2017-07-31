//Import dependencies
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
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

//Initialize the handlebars options
var hbs_options = { };
hbs_options.helpers = { capitalize: utily.string.capitalize };

//Clean the dist folder
gulp.task('clean', function()
{
  //Clean the dist folder
  return rmr.sync('./dist/');
});

//Compile the scss files
gulp.task('compile-scss', function()
{
  //Compile the scss files
  gulp.src('templates/scss/**.hbs').pipe(handlebars(colors, hbs_options)).pipe(rename({ extname: '' })).pipe(gulp.dest('scss/'));
});

//Compile the js files
gulp.task('compile-js', function()
{
  //Compile the js files
  gulp.src('templates/js/**.hbs').pipe(handlebars(colors, hbs_options)).pipe(rename({ extname: '' })).pipe(gulp.dest('js/'));
});

//Build the SCSS files
gulp.task('build-scss', function()
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

//Build the js files
gulp.task('build-js', function()
{
  //Concatenate all the js files
  gulp.src(['js/siimple-colors.js', 'js/**.js']).pipe(concat('siimple-colors.js')).pipe(gulp.dest('dist/'));
});

//Compile task
gulp.task('compile', [ 'compile-scss', 'compile-js' ]);

//Build task
gulp.task('build', [ 'build-scss', 'build-js' ]);

//Execute the tasks
gulp.task('default', [ 'clean', 'build' ]);
