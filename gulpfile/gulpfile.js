var gulp = require('gulp');
var gulputil = require('gulp-util');
var cssya = require('gulp-minify-css');
var yahtml = require('gulp-minify-html');

gulp.task('yacss', function () {
  gulp.src('../mycss/*.css')
  .pipe(cssya())
  .pipe(gulp.dest('../ya/'));
});
gulp.task('yhtml', function () {
  gulp.src('../*.html') // 要压缩的html文件
  .pipe(yahtml()) //压缩
  .pipe(gulp.dest('../ya/'));
});
