const {src, dest, series, parallel, watch} = require("gulp");
const gulp = require('gulp');
const gulpSass = require("gulp-sass")(require("sass"));
const cleanCss = require('gulp-clean-css');
const cssMinify = require('gulp-css-minify');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');
const distFolder = "dist";


function scss(finish){
    src("src/main.scss")
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(autoprefixer({
        browsers:['last 2 versions'],
        cascade: false
    }))
    .pipe(concatCss("styles.min.css"))
    .pipe(cleanCss())
    .pipe(cssMinify())
    .pipe(dest(distFolder));
    finish();
}

function js(finish){
    src("src/*.js").pipe(concatJs('scripts.min.js')).pipe(uglify()).pipe(dest(distFolder));
    finish();
}

function cleanDist() {
	return del('dist/*');
}

function imgMin() {
	return src("src/imgs/*.*").pipe(imagemin()).pipe(dest(`${distFolder}/img`));
}

function watcher(){
    browserSync.init({
        server: {
            file: "./index.html",
        }
    });
    watch("src/**/*.*", js, scss).on('change', browserSync.reload);
}


exports.dev = watcher;
exports.scss = scss;
exports.build = series(cleanDist, scss, js, imgMin);