'use strict';

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var removeCode = require('gulp-remove-code');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject-string');
var fs = require('fs');
var path = require('path');

gulp.task('html', function() {
  process.env.NODE_ENV = 'production';
  function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
  }

  var folders = getFolders(config.root.dest);
  var tasks = folders.map(function(folder) {
    if (folder !== 'base') {
      var fullPath = config.remotePath + folder + '/';
      return gulp.src(config.tasks.html.src)
        .pipe(gulpif(process.env.NODE_ENV == 'production', inject.afterEach('<script src="', fullPath)))
        .pipe(gulpif(process.env.NODE_ENV == 'production', removeCode({ production: true })))
        .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
        .pipe(gulp.dest(config.tasks.html.dest))
        .pipe(browserSync.stream());
    }
  });

  return tasks;
});
