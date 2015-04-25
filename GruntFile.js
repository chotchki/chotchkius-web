module.exports = function( grunt ){
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-html2js');

   // configure tasks
   grunt.initConfig({
      jshint: {
          files: [
             'GruntFile.js',
             'src/main/resources/static/**/*.js'
          ]
      }
      // more plugin configs go here.
   });

   grunt.registerTask('default',['jshint']);
};