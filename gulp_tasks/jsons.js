const gulp = require('gulp');
const eslint = require('gulp-eslint');

const conf = require('../conf/gulp.conf');

gulp.task('jsons', jsons);

function jsons() {
  return gulp.src(conf.path.src('**/*.json'))
    .pipe(gulp.dest(conf.path.tmp()));
}
