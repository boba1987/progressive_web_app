/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

/**
*   Generate client side code documentation
*/
gulp.task('ngdocs_generate', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src('./src/app/**/*.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});

/**
*   Generate server code documentation
*/
gulp.task('ngdocs_generate_backend', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src('./backend/*.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});


/**
*   Serve documentation index page
*/
gulp.task('connect_ngdocs', function() {
var connect = require('gulp-connect');
  connect.server({
    root: 'docs',
    livereload: false,
    fallback: 'docs/index.html',
    port: 8083
  });
});

/**
*   Servers front-end app documentation
*   Run in sequence all ngdocs tasks
*   Docs index page is served at localhost:8083
*/
var runSequence = require('run-sequence');
gulp.task('ngdocs', ['clean'], function () {
    runSequence('ngdocs_generate', 'connect_ngdocs');
});

/**
*   Servers backe-end app documentation
*   Run in sequence all ngdocs tasks
*   Docs index page is served at localhost:8083
*/
var runSequence = require('run-sequence');
gulp.task('ngdocs_backend', ['clean'], function () {
    runSequence('ngdocs_generate_backend', 'connect_ngdocs');
});
