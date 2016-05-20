var gulp = require('gulp');
var postcss = require('gulp-postcss');
var watch = require('gulp-watch');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

//var info = autoprefixer({ browsers: ['last 3 version'] }).info();
//console.log(info);

var config = {
	style : ['./css/search.css']
}

gulp.task('css',function(){
	var processors = [
		precss,
		cssnext,
		autoprefixer({browsers:['last 2 versions']})
	];
	return gulp.src(config.style)
		.pipe(watch(config.style))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'))
});

gulp.task('watch',function(){
	gulp.watch(config.style,function(){
		//
	})
})

gulp.task('default',['css'])