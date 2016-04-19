var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('rules', shell.task(['firebase-bolt ./config/rules.bolt']));

gulp.task('deploy', ['rules']);
