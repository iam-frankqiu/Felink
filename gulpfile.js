/**
 * Created by Administrator on 2016/8/11.
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    server = require('./server');
    connect = require('gulp-connect');

/*合并压缩代码*/

gulp.task('scripts', function () {
    return gulp.src('app/scripts/*.js')
        .pipe(jshint())
        .pipe(concat('all.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});


/*合并压缩css文件*/

gulp.task('style', function () {
    return gulp.src('app/styles/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/styles/'));
});

/*用jshint检测错误*/

gulp.task('jshint', function () {

    //console.log('jshint   successs!');
    return gulp.src('app/scripts/*.js')
        .pipe(jshint());

});

gulp.task('server', function () {
    server('/');
    console.log('server started!');

});

gulp.task('webServer', function () {
    connect.server({
        livereload: true
    });
});


gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});
