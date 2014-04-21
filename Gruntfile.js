module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          'css/style.css': 'scss/style.scss'
        }        
      }
    },

    /*
     * Uncomment this section to use compass
     */
    //compass: {                  // Task
    //dist: {                   // Target
    //      options: {              // Target options
    //          sassDir: 'scss',
    //          cssDir: 'css'
    //      }
    //  }
    //},

    uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'js/modernizr.min.js': ['bower_components/modernizr/modernizr.js']
      }
    }
    },

    copy: {
      main: {
        nonull: true,
        src: 'bower_components/foundation/js/foundation.min.js',
        dest: 'js/foundation.min.js'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      /*
       *To use Compass instead of lib-sass, comment out or delete this section and uncomment the one under it:
       */
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }

      /*
       * Uncomment to use compass:
       */

      //compass: {
      //    files: 'scss/**/*.scss',
      //    tasks: ['sass']
      //}

    }
  });

  /*
   * To use Compass instead of lib-sass, uncomment thiis line:
   */
  //grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  /*
   * To use Compass instead of lib-sass, comment out or delete this line and uncomment the one under it:
   */
  grunt.registerTask('build', ['sass','uglify','copy']);

  /*
   * Uncomment to use compass:
   */
  //grunt.registerTask('build', ['compass','uglify','copy']);

  grunt.registerTask('default', ['build','watch']);
}