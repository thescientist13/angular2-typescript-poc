var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var taskListing = require('gulp-task-listing');
var typescript = require('gulp-typescript');


gulp.task('default', taskListing);

gulp.task("build:ts", function(){

  return gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(typescript.createProject('tsconfig.json')))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/'));
});