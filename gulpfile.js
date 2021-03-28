const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    plumber = require("gulp-plumber");

gulp.task("hello", function () {
    console.log("Testing task ... running OK!");
});

/*
    COMPILE SASS TO CSS
*/
gulp.task("css", function () {
    gulp.src("src/sass/main.scss")
        .pipe(plumber())
        // .pipe(sass())
        // współpraca sass z plumber - metoda sync()
        .pipe(sass.sync())
        .pipe(
            autoprefixer({
                // browsers: ["last 5 version", "IE 9"],
                overrideBrowserslist: ["last 5 version", "IE 9"],
            })
        )
        .pipe(gulp.dest("src/css/"));
});

/*
    WATCHING CHANGES IN FILES
*/
gulp.task("watch", function () {
    gulp.watch("src/sass/**/*.scss", ["css"]);
});
