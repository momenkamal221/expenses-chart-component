const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
	return src("src/sass/**/*.scss") //the directory of sass files 
	.pipe(sass())
	.pipe(dest("src/css"));
}
// '*' means all scss files
//'**' means all subdirectories
function watchTask() {
	watch(["src/sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
