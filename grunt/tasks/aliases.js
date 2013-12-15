/* Grunt task aliases */

// Almost every task needs access to the grunt object, so wrap it in a
// function with `grunt` as a parameter. No need to return anything.

module.exports = function(grunt) {
  grunt.registerTask('default', ['jshint']);
};
