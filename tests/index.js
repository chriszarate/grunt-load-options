var grunt = require('grunt');
var gruntfile = require('../Gruntfile');

gruntfile(grunt);
grunt.loadTasks('./tasks');
grunt.task.run('default');
