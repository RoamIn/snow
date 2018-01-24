const del = require('del')
const gulp = require('gulp')
const babel = require('gulp-babel')

const paths = {
  scripts: {
    src: 'src/index.js',
    dest: 'build/'
  }
}

// 清除 build 目录
const clean = () => {
  return del(paths.scripts.dest);
}

// babel
const build = () => {
  return gulp.src(paths.scripts.src)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(paths.scripts.dest))
}

gulp.task('clean', clean)
gulp.task('build', build)
gulp.task('default', gulp.series(build))