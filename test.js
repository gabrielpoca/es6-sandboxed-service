var should = require('should')
var request = require('supertest');
var assert = require("assert")

var app = require('./lib/app');
var server;

var port = 9003;
var url = 'http://127.0.0.1:' + port;

describe('app', function() {
  before(startApplication);
  after(closeApplication);

  it('should exist', function(done) {
    should.exist(app);
    done();
  });

  it('should be listening at "' + url + '"', function(done) {
    request(url)
      .post('/')
      .expect(200, done);
  });
});

function closeApplication() {
  server.close()
}

function startApplication(cb) {
  server = app.listen(port, function(err, result) {
    if (err)
      cb(err);
    else
      cb()
  })
}
