const gulp = require('gulp');
const sass = require('gulp-sass');
const argv = require('yargs').argv;
const rename = require('gulp-rename');
const config = (argv.projectb === undefined) ? require('./gulpfile.config-a') : require('./gulpfile.config-b');

gulp.task('sass:dev', () => {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(rename(config.buildFile))
    .pipe(gulp.dest(config.build));
});

// run gulp sass:dev
// or
// gulp sass:dev --projectb