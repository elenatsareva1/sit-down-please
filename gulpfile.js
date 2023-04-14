const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoPrefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-imagemin')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const sourceMaps = require('gulp-sourcemaps')
const del = require('del')
const argv = require('yargs').argv;
const gulpIf = require('gulp-if')
const browserSync = require('browser-sync').create()

const isDev = function(){
    return !argv.prod;
}

const isProd = function(){
    return !!argv.prod;
}

const style = () => {
     return src('src/styles/**/*.css')
    .pipe(gulpIf(isDev(), sourceMaps.init()))
    .pipe(gulpIf(isProd(), concat('main.css')))
    .pipe(gulpIf(isProd(), autoPrefixer({
        cascade: false
    })))
    .pipe(gulpIf(isProd(), cleanCss({
        level: 2
    })))
    .pipe(gulpIf(isDev(), sourceMaps.write()))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const sassCompile = () => {
  return src('src/styles/**/*scss')
  .pipe(sourceMaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.write('./'))
  .pipe(dest('dist/styles'))
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(gulpIf(isProd(), htmlMin({
        collapseWhitespace: true
    })))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
    .pipe(gulpIf(isDev(), svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    })))
    .pipe(dest('dist/images'))
}

const images = () => {
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.png',
        'src/images/*.svg',
        'src/images/**/*.jpeg'
    ])
    .pipe(gulpIf(isProd(), image()))
    .pipe(dest('dist/images'))
}

const scripts = () => {
    return src([
        'src/js/**/*.js'
    ])
    .pipe(gulpIf(isDev(), sourceMaps.init()))
    .pipe(gulpIf(isProd(), babel({
        presets: ['@babel/env']
    })))
    .pipe(gulpIf(isProd(), concat('app.js')))
    .pipe(gulpIf(isProd(), uglify({
        toplevel: true
    }).on('error', notify.onError())))
    .pipe(gulpIf(isDev(), sourceMaps.write()))
    .pipe(dest('dist/scripts'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist'))
}

const clean = () => {
    return del(['dist'])
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', style)
watch('src/styles/**/*.scss', sassCompile)
watch('src/images/svg/**/*.css', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.styles = style
exports.sassCompile = sassCompile
exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.default = series(clean, resources, htmlMinify, scripts, style, sassCompile, images, svgSprites, watchFiles)
