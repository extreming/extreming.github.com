const gulp=require('gulp');
const less=require('gulp-less');
const px3rem=require('gulp-px3rem');
const rename=require('gulp-rename');

gulp.task('less',function(){
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(px3rem({
			remUnit:40,
			remprecision:6
		}))
		.pipe(rename(function(path){
			var s=path.basename.replace('.debug','');
			path.basename=s;
		}))
		.pipe(gulp.dest('css'))
});

gulp.task('watch',function(){
	gulp.watch('less/*.less',['less']);
});

gulp.task('default',['watch','less']);