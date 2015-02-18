module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/*']
      },
    },
    jshint: {
      all: ['src/*.js', 'test/**/*'],
    },
    watch: {
      files: ['src/*.js', 'test/**/*'],
      tasks: ['jshint'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-casperjs');

  grunt.registerTask('default', ['jshint', 'mocha_casperjs']);
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('watch', ['watch']);

};