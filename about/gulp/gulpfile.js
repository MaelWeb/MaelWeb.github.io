var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  less:[ '../less/reset.less', '../less/layout.less', '../less/animated.less', '../less/onepage.less', '../less/viewport.less'],
  js:'../js',
  css: '../css',
  scripts:'../js/*.js',
};

gulp.task('less', function () {
  gulp.src('../less/style.less')
      .pipe(less())
      .pipe(minify())
      .pipe(gulp.dest(paths.css));
});

gulp.task('js', function () {
   gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat("mael.min.js"))
    .pipe(gulp.dest(paths.js));
});


// 监听任务，指定路径的文件变化后触发
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  // gulp.watch(paths.js, ['js']);
});

// 默认任务（运行gulp以后触发）
gulp.task('default', ['less', 'watch']);
