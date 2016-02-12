'use strict'
var gulp = require('gulp');
var rimraf = require('rimraf');
var git = require('gulp-git');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc')

//defaults
gulp.task('default', ['watch']);
gulp.task('watch', function() {
    gulp.watch('**/*', ['build']);
});

//building;
//create production public folder
gulp.task('build', ['sass', 'clean'], function() {
    //files to move over
    var buildFiles = [
        'app/**/*.html',
        /*'**!/!*.png',
        '**!/!*.ico',
        '**!/!*.eot',
        '**!/!*.svg',
        '**!/!*.ttf',
        '**!/!*.woff',
        //*.woff2,*/
        '!node_modules/**/*'
    ];
    //return gulp.src(buildFiles)
      //  .pipe(gulp.dest('./public'));
});
//configure css from sass, build will throw it in production folder
gulp.task('sass', function () {
    return gulp.src('./app/style/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});
gulp.task('tsc', function () {
    return gulp.src(['app/**/*.ts'])
        .pipe(typescript({
            experimentalDecorators: true,
            emitError: false,
            sourceMap: true
        }))
        .pipe(gulp.dest('public/'))
});
//clean out public directory
gulp.task('clean', function(cb) {
    return rimraf('./public', cb);
});



//deployment
gulp.task('git-init', function() {
    return git.init(function (err) {
        if (err) throw err;
    });
});
gulp.task('git-remote', ['git-init'], function() {
    return git.addRemote('origin', 'https://git.heroku.com/hubcitydiscgolf.git', function (err) {
        if (err) throw err;
    });
});
gulp.task('git-add'/*,['git-remote']*/, function() {
    return gulp.src('.')
        .pipe(git.add());
});
gulp.task('git-commit', ['git-add'], function() {
    return gulp.src('.')
        .pipe(git.commit('Update'));
});
gulp.task('git-push', ['git-commit'], function() {
    return git.push('origin', 'master', function (err) {
        if (err) throw err;
        this.emit('end'); //instead of erroring the stream, end it
    });
});
gulp.task('deploy', ['git-push'], function(done) {
    done();
});