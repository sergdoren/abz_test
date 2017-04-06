"use strict";
const   gulp = require('gulp'),
        p = require('gulp-load-plugins')({
                pattern: ['gulp-*', 'main-*', 'browser*']
        });

const path = { dev: './app', dist: './dist'};

gulp.task('default', ['browser-sync'], function () {
    console.log('gulp');
    console.log(p);
});

gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(p.wiredep({
            directory: "./bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('browser-sync', function() {
    p.browserSync.init({
        server: {
            baseDir: path.dev
        }
    });

    gulp.watch(path.dev+"/sass/*.sass", ['sass']);
    gulp.watch(path.dev+"/*.html").on('change', p.browserSync.reload);
    gulp.watch(path.dev+"/**/*.js").on('change', p.browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(path.dev+"/sass/*.sass")
        .pipe(p.sass())
        .pipe(p.sass({errLogToConsole: true}))
        .pipe(p.concat('style.css'))
        .pipe(gulp.dest(path.dev+"/css"))
        .pipe(p.browserSync.stream());
});

// https://docs.google.com/document/d/1UD2nszf2q2RlJ08FwSLzXccd9pkYmwMUvfY5a8AE-8w/edit