/*
 * grunt-load-options
 * https://github.com/chriszarate/grunt-load-options
 *
 * Copyright (c) 2013-2014 Chris Zarate
 * Licensed under the MIT license.
 */

'use strict';

var requireDirectory = require('require-directory');

module.exports = function(grunt) {

  // Get folder.
  var folder = grunt.config.get('load-options.folder') || './grunt';

  // Load config options.
  var options = requireDirectory(module, folder + '/options');

  // Resolve options expressed as functions.
  Object.keys(options).forEach(function(name) {
    if(typeof options[name] === 'function') {
      options[name] = options[name](grunt);
    }
  });

  grunt.initConfig(options);
  grunt.loadTasks(folder + '/tasks');

};
