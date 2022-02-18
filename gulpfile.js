const { src, dest, watch, parallel } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
}

function styles() {
  return src("scss/style.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["scss/**/*.scss"], styles);
  watch(["index.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(styles, browsersync, watching);
