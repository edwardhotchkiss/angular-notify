
/**
 * gulpfile (task runner)
 */

var gulp = require('gulp')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , jshint = require('gulp-jshint')
  , watch = require('gulp-watch')
  , rename = require('gulp-rename')
  , connect = require('gulp-connect');

/**
 * run jshint/lint on all of our non-library files
 */

gulp.task('js-hint', function () {
  return gulp.src('./src/**/*.js')
    .pipe(watch(function(files) {
      return files
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    }
  ));
});

/**
 * concat all library files along with our
 * sources into a single file
 */

gulp.task('js-build-dev', function () {
  var allFiles = [
    './src/AngularNotifyModule.js',
    './src/AngularNotifyService.js',
    './src/AngularNotifyDirective.js'
  ];
  return gulp.src(allFiles).pipe(watch(function (files) {
    return gulp.src(allFiles)
      .pipe(concat('angular-notify.js'))
      .pipe(gulp.dest('./dist'));
    }
  ));
});

/**
 * take concatenated js build file, minify
 */

gulp.task('js-build-production', function () {
  return gulp.src('./dist/angular-notify.js')
    .pipe(uglify())
    .pipe(rename('angular-notify.min.js'))
    .pipe(gulp.dest('./dist'));
});

/**
 * connect server w/ reload
 */

gulp.task('connect-web-server', function () {
  connect.server({
    port: 8000,
    root: [
      'demo',
      '.'
    ],
    livereload: true
  });
});

// default task for development
gulp.task('default', ['js-hint','js-build-dev','connect-web-server']);

// production related tasks without watch
gulp.task('production', ['js-hint','js-build-production']);
