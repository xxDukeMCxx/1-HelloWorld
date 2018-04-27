var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var cssBeautify = require('gulp-cssbeautify');
var cssAutoPrefixer = require("gulp-autoprefixer")
var rename = require("gulp-rename");
var htmlMinify = require('gulp-minify-html');
var pump = require('pump');
var pug = require('gulp-pug');
var fancyLog = require ('fancy-log');
var pipeErrorStop = require('pipe-error-stop');

/*
gulp.task('sass_transpile_minify', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(csscomb())
        .pipe(cssAutoPrefixer())
        .pipe(cssBeautify())
        .pipe(gulp.dest('gulp/css'))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(gulp.dest('gulp/css_min'));

});
*/


gulp.task('sass_transpile_minify', function () {
    pump([
        gulp.src('*.scss'),
        sass().on('error', sass.logError),
        csscomb().on('error', fancyLog.error('CSSCOMB ERROR')),
        cssAutoPrefixer({browsers:  ['since 2015']}).on('error', fancyLog.error('cssAUTOPREFIXER ERROR')),
        cssBeautify().on('error', fancyLog.error('cssBeuatify ERROR')),
        gulp.dest('gulp/css'),
        rename({ extname: ".min.css" }),
        cleanCSS({ compatibility: 'ie10' }).on('error',fancyLog.error('cleanCSS ERROR')),
        gulp.dest('gulp/css_min')
    ]);
});


gulp.task('pug_transpile', function () {
     gulp.src('*.pug')
    .pipe(pug().on('error', /*function() {}*/ fancyLog.error('PUG ERROR')))
    .pipe(gulp.dest('gulp/html'))

});


gulp.task('minify-css', () => {
    return gulp.src('*.css')
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(gulp.dest('gulp/css_min'));
});

gulp.task('minify-html', () => {
    return gulp.src('*.html')
        .pipe(htmlMinify())
        .pipe(gulp.dest('gulp/html_minify'));
});

gulp.task('Sass_auto_transpile_minify', function () {
    gulp.watch('*.scss', ['sass_transpile_minify']);
});

gulp.task('Pug_auto_transpile', function () {
    gulp.watch('*.pug', ['pug_transpile']);
});


