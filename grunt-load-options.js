/*
 * grunt-load-options
 * https://github.com/chriszarate/grunt-load-options
 *
 * Copyright (c) 2013 Chris Zarate
 * Licensed under the MIT license.
 */

'use strict';

var requireDirectory = require('require-directory');

module.exports = function(grunt) {
  grunt.initConfig(requireDirectory(module, __dirname + '/grunt/options'));
  grunt.loadTasks(__dirname + '/grunt/tasks');
};

