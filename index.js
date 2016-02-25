'use strict';
var gutil = require('gulp-util');
var faker = require('faker');
var through = require('through2');

module.exports = function() {

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-faker', 'Streaming not supported'));
      return;
    }

    try {
      var c = file.contents.toString();
      c = c.replace(/<faker-([^"]+?)-([^"]+?)\/>/g, function(match, cat, name) {
        if ((!faker[cat]) || (!faker[cat][name]))
          return match;
        return faker[cat][name]();
      });
      file.contents = new Buffer(c);
      this.push(file);
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-faker', err));
    }

    cb();
  });
};