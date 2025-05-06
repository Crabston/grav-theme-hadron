"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");

function buildStyles() {
	return gulp.src("./scss/**/*.scss")
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css"));
};

function minifyCss() {
	return gulp.src("./css/**/*.css")
		.pipe(cleanCSS({ debug: true, level: 0 }, (details) => {
			console.log(`Before: ${details.name}: ${details.stats.originalSize}`);
			console.log(`After_: ${details.name}: ${details.stats.minifiedSize}`);
		}))
		.pipe(gulp.dest("./css"));
}

exports.buildStyles = buildStyles;
exports.minifyCss = minifyCss;
exports.watch = function() {
	gulp.watch("./scss/**/*.scss", buildStyles);
};
