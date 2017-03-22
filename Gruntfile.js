'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt, {
   useminPrepare: 'grunt-usemin'
  });

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'scripts/{,*/}*.js'
        ]
      }
    },

    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: [
          {
            expand: true,
            cwd: 'scripts',
            src: '*.js',
            dest: 'scripts',
            ext: '.js',
            extDot: 'last'
          }
        ]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'styles/main.css':'scss/main/main.scss'
        }
      }
    },

    concat: {
      dist: {}
    },

    uglify: {
      dist: {}
    },

    cssmin: {
      dist: {}
    },

    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 20
      },
      release: {
        files: [
          {
            src: [
              'dist/scripts/*.js',
              'dist/styles/*.css'
            ]
          }
        ]
      }
    },

    usemin: {
      html: ['dist/*.html'],
      css: ['dist/styles/*.css'],
      options: {
        assetsDirs: ['dist', 'dist/styles']
      }
    },

    copy: {
      dist: {
        cwd: '',
        src: ['**', '!styles/**/*.css', '!scripts/**/*.js', '!bower_components/**', '!node_modules/**', '!scss/**', '!*.js', '!*.json', '!*.rb', '!dist/**'],
        dest: 'dist',
        expand: true
      },
      fonts: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'bower_components/font-awesome',
            src: ['fonts/*.*'],
            dest: 'dist'
          },
          {
            expand: true,
            dot: true,
            cwd: '',
            src: ['fonts/*.*'],
            dest: 'dist'
          },
        ]
      }
    },

    clean: {
      build: {
        src: ['dist/']
      }
    },

    watch: {
      scripts: {
        files: ['scripts/*.js'],
        tasks: ['build']
      },
      styles: {
        files: ['styles/*.css'],
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      dist: {
        options: {
          open: true,
          base: {
            path: 'dist',
            options: {
              index: 'index.html',
              maxAge: 300000
            }
          }
        }
      }
  }
  });

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'ngAnnotate',
    'sass',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'copy',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect:dist',
    'watch'
  ]);

  grunt.registerTask('default',[
    'build'
  ]);
};