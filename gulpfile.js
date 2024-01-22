const {parallel,dest,src,watch} = require('gulp');
const  sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require("gulp-autoprefixer");

function styles(){
   return src('src/sass/**/*.+(sass|scss)')
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(autoprefixer({overrideBrowserslist: ["last 2 version"] }))
        .pipe(concat('style.min.css'))
        .pipe(browserSync.stream())
        .pipe(dest('src/css'));

}

function script(){
    return src('src/js/**/*.js')
        .pipe(browserSync.stream())
}

function server(){
    browserSync.init({
        server:{
            baseDir: 'src',
        },
    });
};

function watching(){
    watch(['src/sass'], styles);
    watch(['src/js/**/*.js'],script)
    watch(['src/**/*.html']).on('change',browserSync.reload)
}

exports.styles = styles
exports.script = script
exports.server = server
exports.watching = watching

exports.default = parallel(styles,script,server,watching)
