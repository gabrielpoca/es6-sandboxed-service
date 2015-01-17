var to5 = require('6to5-core');

module.exports = function(code) {
  return to5.transform(code, {}).code;
};
