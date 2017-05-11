var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	minify_js = require('gulp-uglify'),
	minify_css = require('gulp-clean-css'),
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

gulp.task('minify-js', function(){
	return gulp.src('dist/js/custom-select-box-plugin.js')
	.pipe(minify_js())
	.pipe(rename({
		suffix: ".min",
		extname: ".js"
	}))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function(){
	return gulp.src('dist/css/custom-select-box-plugin.css')
	.pipe(minify_css())
	.pipe(rename({
		suffix: ".min",
		extname: ".css"
	}))
	.pipe(gulp.dest('dist/css'))
});
		  
gulp.task('watch',['browserSync', 'sass', 'pug', 'copy_js', 'minify-js', 'minify-css'], function() {
	gulp.watch("src/js/*.js", ['copy_js', , 'minify-js']);
	gulp.watch("src/css/main.scss", ['sass', 'minify-css']);
	gulp.watch("src/css/**/*.scss", ['sass', 'minify-css']);
	gulp.watch("src/*.pug", ['pug']);
	gulp.watch("src/**/*.pug", ['pug']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('dist/**/*.css', browserSync.reload);
	gulp.watch('dist/**/*.js', browserSync.reload);
})