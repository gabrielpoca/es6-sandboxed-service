var Sandbox = require('sandbox');
var express = require('express');
var config = require('./config');

var transform = require('./transform');
var setupEnvoirment = require('./envoirment');

var app = express();
var sandbox = new Sandbox();

var handeRequest = function(req, res) {
  try {
    var code = transform(req.body.code);

    sandbox.run(code, function(result) {
      res.send(result);
    });
  } catch (e) {
    res.status(400);
    res.send('error');
  }
};


setupEnvoirment(app);

app.post('/', handeRequest);

if (!module.parent) {
  app.listen(config.get('port'));
}

module.exports = app;
