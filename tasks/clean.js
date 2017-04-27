// (c) roy


const config = require('./.taskconfig');
const del = require('del');
const gulp = require('gulp');

/**
 * Cleans /.tmp and /build directories.
 */
gulp.task('clean', function(callback) {
  del(config.clean.entry).then(function(paths) {
    callback();
  });
});
