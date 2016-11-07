var gulp = require('gulp');

var util = {
	scripts: {
		inputFiles: [
			'node_modules/chart.js/dist/Chart.bundle.js',
			'node_modules/jquery/dist/jquery.js'
		],
		outputDirectory: 'scripts'
	}
};

gulp.task('default', function() {
  gulp.src(util.scripts.inputFiles)
  .pipe(gulp.dest(util.scripts.outputDirectory))
});