//Import dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

//Compile the scss files and generate the css files
var docsCss = function()
{
  //Get the scss files
  gulp.src('./docs/scss/**.scss')

  //Build the scss files
  .pipe(sass({ includePaths: [ 'bower_components', 'node_modules' ] }).on('error', sass.logError))

  //Save in the dist/css folder
  .pipe(gulp.dest('./docs/build/css/'));
};

//Copy the assets and other files
var docsCopy = function()
{
  //Copy the html files
  gulp.src(['./docs/**.html'], { base: './docs' }).pipe(gulp.dest('./docs/build/'));

  //Copy the yaml files
  gulp.src(['./docs/app.yaml']).pipe(gulp.dest('./docs/build/'));

  //Copy the javascript files
  //gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js'));

  //Copy media images
  gulp.src('./media/logo.png').pipe(gulp.dest('./docs/build/images/'));

  //Copy the siimple modules
  gulp.src('./bower_components/siimple/dist/siimple.css').pipe(gulp.dest('./docs/build/css'));
  gulp.src('./dist/siimple-colors.css').pipe(gulp.dest('./docs/build/css'));
};

//Build the css files
docsCss();

//Copy the intermediary files
docsCopy();
