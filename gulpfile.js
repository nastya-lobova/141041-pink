"use strict";

var gulp = require("gulp");
// Обработчик ошибок плагинов
var plumber = require("gulp-plumber");
// Плагины postcss
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var importcss = require("postcss-import");
var nestedcss = require("postcss-nested");
var variables = require("postcss-css-variables");
var sassvar = require("postcss-advanced-variables")
var mixins = require("postcss-mixins");
var minmax = require("postcss-media-minmax");
var mqpacker = require("css-mqpacker");
// Обновление браузера
var server = require("browser-sync");
// Переименование файлов
var rename = require("gulp-rename");
// Минификаторы
var imagemin = require("gulp-imagemin");
var svgmin = require("gulp-svgmin");
var uglify = require("gulp-uglify");
var minify = require("gulp-csso");
// Очистка папки
var clean = require("gulp-clean");
// Соединение скриптов в один
var concat = require("gulp-concat");
// Последовательная загрузка плагинов
var runSequence = require("gulp-run-sequence");
var mystyle = "source/postcss/style.css";
// Массив плагинов postcss
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
// Путь файлов
var config = {
  build: "build/",
  source: "source/",
  node_modules: "node_modules/"
};

// Массив скриптов
var scripts = [
  config.node_modules + "flickity/dist/flickity.pkgd.min.js",
  config.source + "js/*.js"
];

// Copy script plugins
gulp.task("copy:vendor-script", function() {
  gulp.src(config.node_modules + "picturefill/dist/picturefill.min.js")
    .pipe(gulp.dest(config.build + "js/vendor"))
});

// Clean
gulp.task("clean", function () {
  return gulp.src(config.build + "*", {read: false})
    .pipe(clean())
});

// Copy fonts
gulp.task("copy:fonts", function() {
  gulp.src(config.source + "fonts/**/*.{woff,woff2}")
    .pipe(gulp.dest(config.build + "fonts"))
});

// Combine styles
gulp.task("style", function() {
  gulp.src(mystyle)
    .pipe(plumber())
    .pipe(postcss(pluginList))
    .pipe(gulp.dest(config.build + "css"))
    .pipe(minify())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest(config.build + "css"))
    .pipe(server.reload({stream: true}));
});

// Combine script
gulp.task("script", function() {
  return gulp.src(scripts)
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest(config.build + "js"))
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(gulp.dest(config.build + "js"));
});

// Image optimization
gulp.task("image", function() {
  return gulp.src(config.source + "img/**/*.{png,jpg,gif}")
  .pipe(gulp.dest(config.build + "img"))
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
  }))
  .pipe(gulp.dest(config.build + "img"));
});

// Svg minify
gulp.task("svg", function () {
  return gulp.src(config.source + "img/**/*.svg")
    .pipe(gulp.dest(config.build + "img"))
    .pipe(svgmin())
    .pipe(gulp.dest(config.build + "img"));
});

// Copy html
gulp.task("copy:html", function() {
  return gulp.src(config.source + "*.html")
    .pipe(gulp.dest(config.build))
});

// Build
gulp.task("build", function(callback) {
  runSequence(
    ["clean"],
    ["copy:vendor-script"],
    ["copy:fonts"],
    ["copy:html"],
    ["style"],
    ["image"],
    ["svg"],
    ["script"], callback
  );
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: config.build,
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch(config.build + "postcss/**/*.css", ["style"]);
  gulp.watch(config.build + "*.html").on("change", server.reload);
});
