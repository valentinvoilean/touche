var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  minifyCSS = require('gulp-minify-css');

//libsass
gulp.task('sass', function () {
    return gulp.src('./assets/css/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                './bower_components/breakpoint-sass/stylesheets' //required for sass
            ]
        }).on('error', sass.logError))
        .pipe(minifyCSS()) //move to prod settings
        .pipe(sourcemaps.write('./assets/css'))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/**/*.scss', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass:watch']);
