"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const ts = require("gulp-typescript");

function buildStyles() {
	return gulp.src("./scss/**/*.scss")
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css"));
}

function minifyCss() {
	return gulp.src("./css/**/*.css")
		.pipe(cleanCSS({ debug: true, level: 2 }, (details) => {
			console.log(`Before: ${details.name}: ${details.stats.originalSize}`);
			console.log(`After : ${details.name}: ${details.stats.minifiedSize}`);
		}))
		.pipe(gulp.dest("./css"));
}

function compileTypescript() {
	const tsProject = ts.createProject("tsconfig.json", {
		noImplicitAny: true,
		outFile: "hadron.js",
		allowJs: true,
	});
	return gulp.src("./ts/**/*.{ts,js}")
		.pipe(tsProject())
		.pipe(gulp.dest("./js"));
}

exports.buildStyles = buildStyles;
exports.minifyCss = minifyCss;
exports.compileTypescript = compileTypescript;
exports.watchCss = function() {
	gulp.watch("./scss/**/*.scss", buildStyles);
};
