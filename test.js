var assert = require('assert');
var File = require('vinyl');
var gulpFaker = require('./');

describe('gulp-faker', function() {
  describe('in buffer mode', function() {

    it('should replace', function(done) {
      var fakeFile = new File({
        contents: new Buffer('<faker-name-firstName/>')
      });
      var gulpFakerPlugin = gulpFaker();
      gulpFakerPlugin.write(fakeFile);
      gulpFakerPlugin.once('data', function(file) {
        assert(file.isBuffer());
        assert.notEqual(file.contents.toString('utf8'), '<faker-name-firstName/>');
        done();
      });
    });

    it('should not replace', function(done) {
      var fakeFile = new File({
        contents: new Buffer('<faker-name-exists/>')
      });
      var gulpFakerPlugin = gulpFaker();
      gulpFakerPlugin.write(fakeFile);
      gulpFakerPlugin.once('data', function(file) {
        assert.equal(file.contents.toString('utf8'), '<faker-name-exists/>');
        done();
      });
    });
  });
});