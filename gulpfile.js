"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function buildStyles() {
	return gulp.src("./scss/**/*.scss")
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css"));
};

exports.buildStyles = buildStyles;
exports.watch = function() {
	gulp.watch("./scss/**/*.scss", buildStyles);
};
