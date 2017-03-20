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
      dist: {}
    },

    concat: {
      options: {
        separator: ';'
      },
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
        files: [{
          src: [
            'dist/scripts/*.js',
            'dist/styles/*.css'
          ]
        }]
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
    }
  });

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'useminPrepare',
    'ngAnnotate',
    'concat',
    'uglify',
    'cssmin',
    'copy',
    'filerev',
    'usemin'
  ]);

  grunt.registerTask('default',[
    'build'
  ]);
};