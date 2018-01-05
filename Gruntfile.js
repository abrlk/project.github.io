module.exports = function(grunt) {
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          js: {
            src: 'js/**/*.js',
            dest: 'build/all.js'
          },
          css: {
            src: 'css/**/*.css',
            dest: 'build/all.css'
          }
        },
        uglify: {
          js: {
            files: {
              'build/js.min.js': ['js/main.js']
            }
          }
        },
        sass: {
          dist: {
            files: {
              'css/main.css': 'css/main.sass'
            }
          }
        },
        cssmin: {
          css: {
            files: {
              'build/main.min.css': 'css/main.css'
            }
          }
        },
        watch: {
          sass: {
            files: ['css/*.sass'],
            tasks: ['sass','cssmin'],
            options: {
              spawn: false,
            },
          },
        }
      });
    
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
    
      grunt.registerTask('default', ['watch']);
    };
    