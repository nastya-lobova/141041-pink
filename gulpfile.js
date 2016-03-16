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
var mystyle = "postcss/style.css";
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

gulp.task("style", function() {
  gulp.src(mystyle)
    .pipe(plumber())
    .pipe(postcss(pluginList))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("postcss/**/*.css", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
