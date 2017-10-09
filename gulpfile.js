var gulp =  require('gulp');
var concat =  require('gulp-concat');
var uglify =  require('gulp-uglify');
var minCss =  require('gulp-minify-css');
var webserver =  require('gulp-webserver');
gulp.task('concat', function () {
	gulp.src(['./js/demo1.js', './js/demo2.js']).pipe(uglify()).pipe(concat('concat.js')).pipe(gulp.dest('dist/js'));
})
gulp.task('minfyCss', function () {
	gulp.src('./style.css').pipe(minCss()).pipe(gulp.dest('dist/css'));
})
gulp.task('webserver', function () {
	webserver.server();
})
gulp.task('default', ['webserver'])