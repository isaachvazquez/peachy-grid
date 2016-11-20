// ====================================================================================
// Gulp Tasks
// Install Gulp plugins:
// npm install --save-dev gulp-uglify gulp-sass gulp-concat gulp-cssnano gulp-sass-lint
// ====================================================================================
// Gulp Modules
var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		scss = require('gulp-sass'),
		cssnano = require('gulp-cssnano'),
		sasslint = require('gulp-sass-lint');

// Asset Paths
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

// Linter
gulp.task('sass-lint', function () {
  return gulp.src(scssPath)
    .pipe(sasslint({ configFile: 'sass-lint.yml' }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
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
	gulp.watch(scssWatchPath, ['sass-lint', 'build-dev-css']);
});
