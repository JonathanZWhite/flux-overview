var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('browserify', function () {
  var bundleStream = browserify('./src/js/main.js')
    .transform(reactify)
    .bundle();

  bundleStream
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});