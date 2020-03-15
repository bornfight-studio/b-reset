import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';

/**
 * Paths
 */
const paths = {
    styles: {
        src: 'src/b-reset.scss',
        dest: 'build/'
    }
};

/**
 * Clean build folder
 */
export const clean = () => del(['build']);

/**
 * Compile SCSS to CSS
 */
export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.styles.dest));
}

/**
 * Compile SCSS to CSS with optimization
 */
export function stylesMin() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'b-reset',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

const build = gulp.series(clean, gulp.parallel(styles, stylesMin));

/**
 * Export a default task
 */
export default build;
