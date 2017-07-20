/**
 * Gulp tasks.
 *
 * @author Alejandro Mostajo <info@10quality.com>
 * @version 1.0.0
 */

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var minifyjs = require('gulp-js-minify');

/**
 * Browserfy scripts.
 * @since 1.0.0
 */
gulp.task('scripts', function() {
    // Single entry point to browserify 
    return gulp.src('./src/component.js')
        .pipe(browserify({
            //insertGlobals : true,
            debug : !gulp.env.production,
        }))
        .pipe(rename('vue.progress-bar.js'))
        .pipe(gulp.dest('./dist'));
});

/**
 * Minified version
 * @since 1.0.0
 */
gulp.task('minify', function (cb) {
    return gulp.src('./dist/vue.progress-bar.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('./dist/'));
});