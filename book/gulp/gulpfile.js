var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  css: '../*.css',
  scripts:'../*.js',
};

gulp.task('css', function () {
  gulp.src(paths.css)
      .pipe(minify())
      .pipe(concat("book.min.css"))
      .pipe(gulp.dest("../pack"));
});

gulp.task('js', function () {
   gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat("book.min.js"))
    .pipe(gulp.dest("../pack"));
});


// 监听任务，指定路径的文件变化后触发
gulp.task('watch', function() {
  gulp.watch("../book.css", ['css']);
  gulp.watch("../book.js", ['js']);
});

// 默认任务（运行gulp以后触发）
gulp.task('default', ['css', 'js','watch']);
