module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify : {
            options: {
                banner: "/*! Lazy Load <%= pkg.version %> - MIT license - Copyright 2010-2015 Mika Tuupola */\n"
            },
            target: {
                files: {
                    "jquery.lazyload.min.js" : "jquery.lazyload.lib",
                    "jquery.scrollstop.min.js" : "jquery.scrollstop.lib"
                }
            }
        },
        watch: {
            files: ["*.lib", "!*.min.lib" ,"test/spec/*Spec.lib"],
            tasks: ["test"],
        },
        jshint: {
            files: ["*.lib", "!*.min.lib" ,"test/spec/*Spec.lib"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        jasmine: {
            src: ["jquery.lazyload.lib"],
            options: {
                helpers: "test/spec/*Helper.lib",
                specs: "test/spec/*Spec.lib",
                vendor: ["test/vendor/jquery-1.9.0.lib", "test/vendor/jasmine-jquery.lib"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("test", ["jshint"]);
    grunt.registerTask("default", ["test", "uglify"]);

};