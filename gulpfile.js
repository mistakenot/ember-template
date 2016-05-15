var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('rules', shell.task(['firebase-bolt ./config/rules.bolt']));
gulp.task('build', shell.task(['ember build']));
gulp.task('deploy-to-fb', shell.task(['firebase deploy']));

gulp.task('deploy', ['rules', 'build', 'deploy-to-fb']);
