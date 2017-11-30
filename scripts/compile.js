//Import dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars');
var utily = require('utily');

//Import colors
var colors = require('../colors.json');

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
