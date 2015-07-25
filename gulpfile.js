var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');

gulp.task('jshint', function() {
  return gulp.src(['*.js','./lib/models/*.js', './test/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  return gulp.src('test/*.js')
             .pipe(mocha( { reporter: 'nyan' } ));
});
