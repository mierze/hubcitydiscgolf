'use strict'
var gulp = require('gulp');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//defaults
gulp.task('default', ['watch']);
gulp.task('watch', function() {
    gulp.watch('**/*', ['build']);
});

//building;
//create production public folder
gulp.task('build', ['sass', 'clean'], function() {});
//configure css from sass, build will throw it in production folder
gulp.task('sass', function() {
    return gulp.src('./app/style/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});
//clean out public directory
gulp.task('clean', function(cb) {
    return rimraf('./public', cb);
});
