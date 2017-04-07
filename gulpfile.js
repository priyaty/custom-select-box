var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './dist/'
		},
		injectChanges: true
	})
});
gulp.task('pug', function() {
	return gulp.src('src/*.pug')
	.pipe(pug( {
	pretty: true
	}))
	.pipe(gulp.dest('dist/'))
});

gulp.task('copy_js', function(){
	return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function() {
	return gulp.src('src/css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
});
		  
gulp.task('watch',['browserSync', 'sass', 'pug', 'copy_js'], function() {
	gulp.watch("src/js/*.js", ['copy_js']);
	gulp.watch("src/css/main.scss", ['sass']);
	gulp.watch("src/css/**/*.scss", ['sass']);
	gulp.watch("src/*.pug", ['pug']);
	gulp.watch("src/**/*.pug", ['pug']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('dist/**/*.css', browserSync.reload);
	gulp.watch('dist/**/*.js', browserSync.reload);
})