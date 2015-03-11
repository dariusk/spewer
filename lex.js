var _ = require('underscore');
var lex = _.pairs(require('./lib/lexicon.js'));
out = {};
lex = _.filter(lex, function(el) {
  if (el[0].length < 10 && el[0].indexOf('-') === -1 && el[0].toLowerCase() === el[0]) {
    out[el[0]] = el[1];
    return true;
  }
  else {
    return false;
  }
});
//console.log(lex.length);
console.log(JSON.stringify(out));
