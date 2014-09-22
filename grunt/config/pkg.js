/* Load package.json */

// If you need access to the grunt object, wrap it in a function with `grunt`
// as a parameter and return your options object.

module.exports = function(grunt) {
  return grunt.file.readJSON('package.json');
};
