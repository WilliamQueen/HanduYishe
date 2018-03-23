//导入所需组件
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano'),//压缩css
	uglify = require('gulp-uglify');
	
//发布任务css
gulp.task('sass',function(){
	return gulp.src('src/sass/*.scss').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('css')).pipe(cssnano());
})

//压缩js
gulp.task('script',function(){
	return gulp.src('src/js/*.js').pipe(rename({"suffix":".min"})).pipe(uglify()).pipe(gulp.dest('js'));
})
gulp.task('watch',function(){
	gulp.watch(['src/sass/*.scss','src/js/*.js'],['sass','script']);
})
//发布一个监听任务
//gulp.task('watch',function(){
//	//			监听的文件				执行任务
//	gulp.watch(['src/scss/*.scss','src/js/*.js'],['sass']);
//})