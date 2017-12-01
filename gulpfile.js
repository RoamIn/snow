const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('lint', () => {
    return gulp.src(['src.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
    gulp.src('src/index.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['lint', 'babel'], () => {

});