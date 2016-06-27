///////////////////////////////////////////////
//Required
///////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    rename = require('gulp-rename');

///////////////////////////////////////////////
//Scripts Task
///////////////////////////////////////////////
gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

///////////////////////////////////////////////
//Compass/Sass Task
///////////////////////////////////////////////
gulp.task('compass', function(){
  gulp.src('app/scss/main.scss')
  .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/css',
      sass: 'app/scss',
      require: ['susy']
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));
});

///////////////////////////////////////////////
//HTML Task
///////////////////////////////////////////////
gulp.task('html', function(){
  gulp.src('app/**/*.html');
});

///////////////////////////////////////////////
//Build Task
///////////////////////////////////////////////

// clear out all files and folders from build folder
gulp.task('build:cleanfolder', function(){
  del([
    'build/**'
  ]);
});

// Task to create build directory for all files
gulp.task('build:copy',['build:cleanfolder'], function(){
  return gulp.src('app/**/*/')
  .pipe(gulp.dest('build/'));
});

// task to remove unwanted build files
gulp.task('build:remove', ['build:copy'], function(cb){
  del([
      'build/scss/',
      'build/js/!(*.min.js)'
  ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);


///////////////////////////////////////////////
//Browser-Sync Task
///////////////////////////////////////////////
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: "./app/"
    }
  });
});

///////////////////////////////////////////////
//Watch Task
///////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch('app/**/*.html', ['html']);
});

///////////////////////////////////////////////
//Default Task
///////////////////////////////////////////////
gulp.task('default', ['scripts','compass','html', 'browser-sync', 'watch']);
