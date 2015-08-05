// Обязательная обёртка
module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            options: {
                //sourceMap: true,
                //includePaths: require('node-bourbon').includePaths
            },
            dist: {
                files: {
                    '.tmp/css/geekon.css': 'app/styles/importer.sass'
                }
            }
        },

        concat_css: {
            options: {
              // Task-specific options go here.
            },
            all: {
              src: [
                  ".tmp/css/*.css"
              ],
              dest: "dist/geekon.css"
            }
          },

        cssmin: {
          minify: {
            expand: true,
            cwd: 'dist/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/',
            ext: '.min.css'
          }
        },

        watch: {
            sass: {
                files: ['app/styles/{,*/}*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['.tmp/css/*.css'],
                tasks: ['concat_css', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        }

    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');

    // Задача по умолчанию
    grunt.registerTask('default', ['sass', 'concat_css', 'cssmin', 'watch']);
};
