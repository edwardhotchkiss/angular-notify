
/*!
 * @description GRUNT! (.js/)
 * - Can you dig it? Yes I can!
 */

module.exports = function(grunt) {

  grunt.initConfig({
    files: {
      app: [
        'src/AngularNotifyModule.js',
        'src/AngularNotifyService.js',
        'src/AngularNotifyDirective.js'
      ]
    },
    concat: {
      'dist/angular-notify.js': ['<config:files.app>']
    },
    min: {
      'dist/angular-notify.min.js': ['<config:files.app>']
    },
    watch: {
      files: ['grunt.js', '<config:files.app>'],
      tasks: 'concat min'
    }, 
    uglify: {
      mangle: {toplevel: true},
      squeeze: {},
      codegen: {}
    }
  });
  
  // register default task, then watch files
  grunt.registerTask('default', 'concat min watch');

};

/* EOF */