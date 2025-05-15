"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");

const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

const ts = require("gulp-typescript");
const terser = require("gulp-terser");

function compileStyles() {
	return gulp.src("./scss/**/*.scss")
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css"));
}

function compressCSS() {
	return gulp.src("./css/**/*.css")
		.pipe(cleanCSS({ debug: true, level: 0 }, (details) => {
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

function compressJavascript() {
	return gulp.src("./js/**/*.js")
		.pipe(terser({ ecma: 6 }))
		.pipe(gulp.dest("./js"));
}

exports.compileStyles = compileStyles;
exports.compressCSS = compressCSS;
exports.buildCSS = gulp.series(compileStyles, compressCSS);
exports.watchCSS = function() {
	gulp.watch("./scss/**/*.scss", gulp.series(compileStyles, compressCSS));
};

exports.compileTypescript = compileTypescript;
exports.compressJavascript = compressJavascript;
exports.buildJS = gulp.series(compileTypescript, compressJavascript);
exports.watchJS = function() {
	gulp.watch("./ts/**/*.{ts,js}", gulp.series(compileTypescript, compressJavascript));
};
