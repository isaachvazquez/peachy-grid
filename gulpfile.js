// =====================================================================
// Gulp Tasks
// Install Gulp plugins:
// npm install --save-dev gulp-uglify gulp-sass gulp-concat gulp-cssnano gulp-tape tap-colorize
// =====================================================================
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		scss = require('gulp-sass'),
		cssnano = require('gulp-cssnano');

var scssPath = './peachy-components/peachy.scss',
		scssWatchPath = './peachy-components/*.scss',
		compiledCSSPath = './';

// ========================================
// Default Gulp task
// ========================================
gulp.task('default', function(){
	console.log('Gulp, reporting in, ready for service!');
});

// ========================================
// CSS Build Tasks
// ========================================
// Build CSS Assets for Development
gulp.task("build-dev-css", function () {
  gulp.src(scssPath)
			.pipe(scss().on('error', scss.logError))
			.pipe(gulp.dest(compiledCSSPath));
});

// Build CSS Assets for Production
gulp.task("build-prod-css", function () {
	gulp.src(scssPath)
			.pipe(scss().on('error', scss.logError))
			.pipe(cssnano())
			.pipe(gulp.dest(compiledCSSPath));
});

// ========================================
// Gulp Production Build
// ========================================
gulp.task('build', ['build-prod-css']);

// =====================================================
// Watch SCSS & JS files to compile/concatenate on save.
// =====================================================
gulp.task('watch', function() {
	console.log("I'm watching you...");
	gulp.watch(scssWatchPath, ['build-dev-css']);
});
