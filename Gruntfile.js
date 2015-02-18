module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['src/*.js', 'test/*.js'],
    },
    watch: {
      files: ['src/*.js', 'test/*.js'],
      tasks: ['jshint'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('watch', ['watch']);

};