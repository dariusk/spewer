var spewer = require('./lib/spewer.js');
var sentence;
for (var i=0;i<10;i++){
  sentence = spewer.spew('WRB');
  console.log(sentence);
} 
