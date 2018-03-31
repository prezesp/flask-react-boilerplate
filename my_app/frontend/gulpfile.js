var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpack = require('webpack-stream');

gulp.task('copy', function() {
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('../static/vendor/jquery'));

    gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('../static/vendor/bootstrap'));
});

gulp.task('webpack', function(done) {
	return gulp.src('./main.js').pipe(webpack({
    watch: true,
    output: {
      path: __dirname,
      filename: 'static/js/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
			  presets: ['es2015', 'react']
		  }
        },
		{ test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    }
  })).pipe(gulp.dest('../'));;
});

gulp.task('default', ['copy', 'webpack']);
