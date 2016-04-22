var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var runSequence = require('run-sequence');
 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('less:watch', function() {
   gulp.watch('./less/**/*.less', ['less']);     
});

gulp.task('default', function(cb) {
    runSequence('less', 'less:watch', cb);
});