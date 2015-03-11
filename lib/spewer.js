/*
 * spewer
 * https://github.com/dariusk/spewer
 *
 * Copyright (c) 2015 Darius Kazemi
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('underscore');
var lexicon = require('./lexicon.js');

function getWordByTag(tag) {
  var words = _.chain(lexicon)
    .map(function(v, k) {
      if (_.indexOf(v, tag) > -1) {
        return k;
      }
      else {
        return null;
      }
    })
    .filter(function(el) {
      return el !== null;
    })
    .value();
  return _.sample(words, 1);
}

module.exports = {
  spew: function(tags) {
    var out = '';
    tags = tags.split(' ');
    _.each(tags, function(tag) {
      var word = getWordByTag(tag);
      out += word + ' ';
    });
    return out.trim();
  }
};
