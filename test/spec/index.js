'use strict';

var expect = require('chai').expect;


describe('random-altitude: ', function () {

  var randomAltitude = require('../../');

  it('common', function () {
    expect(randomAltitude())
      .to.be.within(-10994, 0)
      .and
      .to.be.match(/^(0|-\d+)(\.\d{1,5})?$/);

    expect(randomAltitude({
      min: -1000,
      fixed: 7
    }))
      .to.be.within(-1000, 0)
      .and
      .to.be.match(/^(0|-\d+)(\.\d{1,7})?$/);
  });
});
