var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

// taks pra o sass
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

// taks pra o watch
gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
});

// task default
gulp.task('default', ['sass', 'watch']);
