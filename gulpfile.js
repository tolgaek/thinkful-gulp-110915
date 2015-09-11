'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('minimizeImages', function() {
  gulp.src('img/*.gif')
    .pipe(changed('build'))
    .pipe(imagemin())
    .pipe(gulp.dest('build'));

});
