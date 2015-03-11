# spewer [![Build Status](https://secure.travis-ci.org/dariusk/spewer.png?branch=master)](http://travis-ci.org/dariusk/spewer)

A reverse part-of-speech tagger. Give it a list of tags and it spews out matching language.

## Getting Started
Install the module with: `npm install spewer`

```javascript
var spewer = require('spewer');
var sentence = spewer.spew('JJ JJ NNS VBP RB');
console.log(sentence); // "colorless green ideas sleep furiously"
console.log(sentence); // "sullen misty shoes lean reputedly"
```

## Documentation
Call `spewer.spew(tags)`, where `tags` is a space-delimited string of part of speech tags, as defined below. This will return a string of matching words.

    CC Coord Conjuncn           and,but,or
    IN Preposition              of,in,by
    JJ Adjective                big
    JJR Adj., comparative       bigger
    JJS Adj., superlative       biggest
    MD Modal                    can,should
    NN Noun, sing. or mass      dog
    NNP Proper noun, sing.      Edinburgh
    NNPS Proper noun, plural    Smiths
    NNS Noun, plural            dogs
    PDT Predeterminer           all, both
    PRP Personal pronoun         I,you,she
    RB Adverb                   quickly
    RBR Adverb, comparative     faster
    RBS Adverb, superlative     fastest
    RP Particle                 up,off
    VB verb, base form          eat
    VBD verb, past tense        ate
    VBG verb, gerund            eating
    VBN verb, past part         eaten
    VBP Verb, present           eat
    VBZ Verb, present           eats
    WDT Wh-determiner           which,that
    WP Wh pronoun               who,what
    WRB Wh-adverb               how,where

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Darius Kazemi
Licensed under the MIT license.
