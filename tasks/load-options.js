/*
 * grunt-load-options
 * https://github.com/chriszarate/grunt-load-options
 *
 * Copyright (c) 2013-2014 Chris Zarate
 * Licensed under the MIT license.
 */

'use strict';

var requireDirectory = require('require-directory');

module.exports = function (grunt, options) {

  var config = {};

  options = options || {};
  options.folder = grunt.config.get('load-options.folder') || options.folder || './grunt';
  options.configFolders = options.configFolders || ['config', 'options'];
  options.taskFolders = options.taskFolders || ['tasks', 'aliases'];

  // Load configuration.
  options.configFolders.forEach(function (configFolder) {
    var src = options.folder + '/' + configFolder;
    if (grunt.file.exists(src) && grunt.file.isDir(src)) {
      var obj = requireDirectory(module, src);
      Object.keys(obj).forEach(function (prop) {
        config[prop] = (typeof obj[prop] === 'function') ? obj[prop](grunt) : obj[prop];
      });
    }
  });
  grunt.initConfig(config);

  // Load tasks.
  options.taskFolders.forEach(function (taskFolder) {
    var src = options.folder + '/' + taskFolder;
    if (grunt.file.exists(src) && grunt.file.isDir(src)) {
      grunt.loadTasks(src);
    }
  });

};
