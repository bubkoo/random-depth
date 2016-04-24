'use strict';

var clamp       = require('clamp');
var assign      = require('object-assign');
var randomFloat = require('random-floating');

module.exports = function (options) {

  options = assign({
    fixed: 5,
    min: -10994,
    max: 0
  }, options);

  options.min = clamp(options.min, -10994, 0);
  options.max = clamp(options.max, -10994, 0);

  return randomFloat(options);
};

