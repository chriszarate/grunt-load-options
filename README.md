# grunt-load-options

This Grunt plugin provides a very simple way to modularize your Gruntfile. Put
plugin configuration options in `grunt/config` and tasks/aliases in
`grunt/tasks`. Use JavaScript, CoffeeScript, or JSON.

In other words, stop fussing with your Gruntfile whenever you start a new
project. Instead, just copy over the files you need. See this project’s
Gruntfile and `grunt` folder for an example.


## Getting Started

This plugin requires [Grunt][] `~0.4.0`.

```shell
npm install -D grunt-load-options
```

Once the plugin has been installed, it can be enabled in your `Gruntfile.js`
(or use [load-grunt-tasks][] and skip this step):

```js
grunt.loadNpmTasks('grunt-load-options');
```


## Example usage

Use this plugin in conjunction with [load-grunt-tasks][] for a nice, clean,
static Gruntfile and easily portable Grunt options and tasks:

```js
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
};
```

That’s it! That’s your entire Gruntfile, forever, for every project. Behind
the scenes, this plugin loads your plugin configuration and tasks from the
`grunt` subfolder.


### Plugin options

To configure a Grunt plugin, create a file in `grunt/config` or `grunt/options`
(either works). The name of the file should correspond to the property of the
configuration object we want to define. For example, if you want to configure
[grunt-contrib-jshint][], create a file named `jshint.js`:

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
a parameter and return your options object. Here’s `pkg.js`:

```js
module.exports = function (grunt) {
  return grunt.file.readJSON('package.json');
};
```

You can also use CoffeeScript. (Make sure to give your file a `.coffee`
extension.)

```coffee
module.exports = (grunt) ->
  grunt.file.readJSON "package.json"
```


### Tasks and aliases

To create a task or alias, create a file in `grunt/tasks` or `grunt/aliases`:

Every task needs access to the grunt object, so wrap it in a function with
`grunt` as a parameter. No need to return anything, though.

```js
module.exports = function (grunt) {
  grunt.registerTask('default', ['jshint']);
};
```

CoffeeScript works here, too:

```coffee
module.exports = (grunt) ->
  console.log grunt.template.process "grunt-load-options v<%= pkg.version %>"
```


### Custom folder

Point the plugin to a different folder using the optional options parameter.

```js
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {folder: '~/.grunt-options'});
};
```


[Grunt]: http://gruntjs.com
[load-grunt-tasks]: https://github.com/sindresorhus/load-grunt-tasks
[grunt-contrib-jshint]: https://github.com/gruntjs/grunt-contrib-jshint
