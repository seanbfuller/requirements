'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("scss/*.scss", ['sass']);
});

gulp.task('sass', function () {  
  gulp.src('scss/styles.scss')
    .pipe(sass({includePaths: ['scss']}))
    .pipe(gulp.dest('public/stylesheets'));
});

// ['nodemon'] was chained here
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
      files: ["public/**/*.*"],
      browser: "google chrome",
      port: 7000,
  });
});

// TODO: This versus the nodemon from the node app?
/*
gulp.task('nodemon', function (cb) {  
  var started = false;
  return nodemon({
    script: 'bin/www'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});
*/