var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserSync = require('browser-sync').create();


function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
}

function liveDev() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/scss/**/*.scss', compileSass)
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.liveDev = liveDev;
