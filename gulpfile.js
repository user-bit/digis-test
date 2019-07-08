var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    concatCss   = require('gulp-concat-css'),
    cleanCSS   = require('gulp-clean-css');


gulp.task('scripts', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/owl.carousel/dist/owl.carousel.js',
        'app/libs/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/success/'));

});

gulp.task('styles', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCss('main.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('app/css/success/'))
});
