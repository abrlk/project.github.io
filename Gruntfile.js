module.exports = function(grunt) {
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss o") %> */ \n'
          },
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
          options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss o") %> */ \n'
            },
          js: {
            files: {
              'build/js.min.js': ['build/all.js']
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
        }
      });
    
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-sass');
    
      grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
    };
    