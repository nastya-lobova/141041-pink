"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var importcss = require("postcss-import");
var nestedcss = require("postcss-nested");
var variables = require("postcss-css-variables");
var sassvar = require("postcss-advanced-variables")
var mixins = require("postcss-mixins");
var minmax = require("postcss-media-minmax");
var mqpacker = require("css-mqpacker");
var server = require("browser-sync");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgmin = require("gulp-svgmin");
var clean = require("gulp-clean");
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var runSequence = require("gulp-run-sequence");
var mystyle = "source/postcss/style.css";
var pluginList = [
  importcss(),
  mixins(),
  nestedcss(),
  sassvar(),
  mqpacker(),
  autoprefixer({browsers: [
    "last 1 version",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Opera versions",
    "last 2 Edge versions"
  ]})
]

// Clean
gulp.task("clean", function () {
  return gulp.src("build/*", {read: false})
    .pipe(clean())
});

// Copy
gulp.task("copy", function() {
  gulp.src("source/img/**")
    .pipe(gulp.dest("build/img"))
  gulp.src("source/fonts/**/*.{woff,woff2}")
    .pipe(gulp.dest("build/fonts"))
  gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
  gulp.src("source/js/vendor/*.js")
    .pipe(gulp.dest("build/js/vendor"))
});

// Copy css plugins
gulp.task("copyStylePlugins", function() {
  gulp.src("node_modules/flickity/dist/flickity.min.css")
    .pipe(gulp.dest("source/postcss/vendor"))
  gulp.src("node_modules/normalize.css/normalize.css")
    .pipe(gulp.dest("source/postcss/vendor"))
});

// Combine styles
gulp.task("style", function() {
  gulp.src(mystyle)
    .pipe(plumber())
    .pipe(postcss(pluginList))
    .pipe(gulp.dest("source/css"))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({stream: true}));
});

// Combine script
gulp.task("script", function() {
  return gulp.src(["source/js/*.js"])
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest("source/js"))
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
})

// Copy plugins
gulp.task("copyPlugins", function() {
  gulp.src("node_modules/flickity/dist/flickity.pkgd.min.js")
    .pipe(gulp.dest("source/js/vendor"))
  gulp.src("node_modules/picturefill/dist/picturefill.min.js")
    .pipe(gulp.dest("source/js/vendor"))
});

// Image optimization
gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
  }))
  .pipe(gulp.dest("build/img"));
});

// Svg minify
gulp.task("svg", function () {
  return gulp.src("build/img/**/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/img"));
});

// Remove comment html
gulp.task("htmlmin", function() {
  return gulp.src("build/*.html")
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest("build"));
});

// Build
gulp.task("build", function() {
  runSequence(
    "clean",
    "copy",
    "style",
    "images",
    "svg",
    "htmlmin",
    "script"
  );
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("source/postcss/**/*.css", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
