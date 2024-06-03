const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

function cleanHTML(){
    return gulp.src('./source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./output/'));
}

function cleanStyleSheet(){
    return gulp.src('./source/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./output/'))
}

exports.cleanHTML = cleanHTML
exports.cleanStyleSheet = cleanStyleSheet
exports.default = cleanHTML