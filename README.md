# grunt-load-options

This Grunt plugin provides a very simple way to modularize your Gruntfile. Put
plugin options in `grunt/options` and task files (including aliases) in
`grunt/tasks`. See this project’s Gruntfile and `grunt` folder for an example.

## Getting Started

This plugin requires [Grunt](http://gruntjs.com) `~0.4.0`.

```shell
npm install grunt-load-options --save-dev
```

Once the plugin has been installed, it can be enabled in `Gruntfile.js`:

```js
require('grunt-load-options')(grunt);
```
