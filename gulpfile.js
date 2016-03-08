'use strict';

var del = require('del');
var gulp = require('gulp');
var pipelineValidateJs = require('pipeline-validate-js')({linter: 'ESHint'});
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var taskListing = require('gulp-task-listing');
var typescript = require('gulp-typescript');
var webserver = require('gulp-webserver');

gulp.task('default', taskListing);

gulp.task('clean', function() {
  return del(['dest']);
});

//build tasks
//gulp.task('copy:html', function(){
//  gulp.src('src/layouts/index.html')
//    .pipe(gulp.dest('dest/'));
//});
//
//gulp.task('copy:css', function(){
//  gulp.src('src/**/*.css')
//    .pipe(gulp.dest('dest/'));
//});
//
//gulp.task('copy:vendor', function(){
//  gulp.src('node_modules/**/**')
//    .pipe(gulp.dest('dest/vendor/'));
//});

gulp.task('lint:gulpfile', function() {
  return gulp.src('*.js')
    .pipe(pipelineValidateJs.validateJS());
});

gulp.task('build:ts', function() {
  var tsProject = typescript.createProject('tsconfig.json', {typescript: require('typescript')});

  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

//serve + watch
gulp.task('serve', function() {
  return gulp.src('./')
    .pipe(webserver({
      open: '/',
      root: './'
      //livereload: true
    }));
});

gulp.task('watch', function () {

  gulp.watch('./src/components/**/*.ts', ['build:ts']);
  //gulp.watch('./src/layouts/index.html', ['copy:html']);
  //gulp.watch('./src/components/**/*.css', ['copy:css']);

});

//main development build task
gulp.task('build:develop', function() {
  return runSequence('clean', ['build:ts'], ['serve', 'watch']);
});

//main production build task
gulp.task('build:prod', function() {
  return runSequence('clean', ['lint:gulpfile', 'build:ts']);
});