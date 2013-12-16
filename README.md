# grunt-load-options

This Grunt plugin provides a very simple way to modularize your Gruntfile. Put
plugin options in `grunt/options` and tasks/aliases in `grunt/tasks`. Use
JavaScript, CoffeeScript, or JSON.

In other words, stop fussing with your Gruntfile whenever you start a new 
project. Instead, just copy over the files you need. See this project’s 
Gruntfile and `grunt` folder for an example.


## Getting Started

This plugin requires [Grunt][] `~0.4.0`.

```shell
npm install grunt-load-options --save-dev
```

Once the plugin has been installed, it can be enabled in your `Gruntfile.js`:

```js
grunt.loadNpmTasks('grunt-load-options');
```


## Example usage

Use this plugin in conjunction with [load-grunt-tasks][] for a nice, clean,
static Gruntfile and easily portable Grunt options and tasks. That’s what I do
in this project’s Gruntfile:

```js
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
};
```

That’s it! That’s your entire Gruntfile, forever, for every project.


### Plugin options

To configure a Grunt plugin, create a file in `grunt/options`. The name of the
file should correspond to the key of the options hash. For example, if you
want to configure [grunt-contrib-jshint][], create a file named `jshint.js`:

```js
module.exports = {
  all: [
    'grunt/**/*.js',
    'tasks/**/*.js'
  ],
  options: {
    jshintrc: '.jshintrc'
  }
};
```

Or just provide JSON! (Make sure to give your file a `.json` extension.)

```json
{
  "all": [
    "grunt/**/*.js",
    "tasks/**/*.js"
  ],
  "options": {
    "jshintrc": ".jshintrc"
  }
}
```

If you need access to the grunt object, wrap it in a function with `grunt` as
a parameter and return your options object:

```js
module.exports = function(grunt) {
  return grunt.file.readJSON('package.json');
};
```

You can also use CoffeeScript. (Make sure to give your file a `.coffee` extension.)

```coffee
module.exports = (grunt) ->
  grunt.file.readJSON "package.json"
```


### Tasks and aliases

To create a task or alias, create a file in `grunt/tasks`:

Every task needs access to the grunt object, so you’ll definitely need wrap it
in a function with `grunt` as a parameter. No need to return anything, though.

```js
module.exports = function(grunt) {
  grunt.registerTask('default', ['jshint']);
};
```

CoffeeScript works here, too:

```coffee
module.exports = (grunt) ->
  console.log grunt.template.process "grunt-load-options v<%= pkg.version %>"
```


[Grunt]: http://gruntjs.com
[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks
[grunt-contrib-jshint]: https://github.com/gruntjs/grunt-contrib-jshint
