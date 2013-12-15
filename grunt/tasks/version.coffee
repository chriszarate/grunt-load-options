# Output package version

# Use CoffeeScript if that's your thing!

module.exports = (grunt) ->
  console.log grunt.template.process "grunt-load-options v<%= pkg.version %>"
  console.log ""
