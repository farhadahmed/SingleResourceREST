var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');
var webpack = require('gulp-webpack');

gulp.task('jshint', function() {
  return gulp.src(['*.js','./lib/models/*.js', './test/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  return gulp.src('test/*.js')
             .pipe(mocha( { reporter: 'nyan' } ));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/client.js')
             .pipe(webpack({
               output: {
                 filename: 'bundle.js'
               }
             }))
             .pipe(gulp.dest('build/'));
});

gulp.task('copy', function() {
  return gulp.src('app/**/*.html')
             .pipe(gulp.dest('build/'));
});

gulp.task('build', ['webpack:dev', 'copy']);
gulp.task('default', ['build']);
