# random-depth

> Generate a random depth, in meters. Depths are always negative.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-depth/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-depth/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-depth)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-depth/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-depth)


## Install

```
$ npm install --save random-depth 
```

## Usage

```js
var randomDepth = require('random-depth');

// API
// - randomDepth();
// - randomDepth(options);

// options:
// - min  : default -10994
// - max  : default 0
// - fixed: default 5

randomDepth();
// => -2126.95039
```

By default, includes 5 digits of accuracy after the decimal. Can override with the `fixed` option.

```js
randomDepth({ fixed: 2 })
// => -1542.11
```

By default, maximum (or minimum depending on your frame of reference) depth of `-2550` (depth of the Mariana Trench), but this can be overridden with the `min` option.

```js
randomDepth({ min: -1000 })
// => -718.41976
```

## Related

- [random-altitude](https://github.com/mock-end/random-altitude) - Generate a random altitude, in meters.
- [random-coordinates](https://github.com/mock-end/random-coordinates) - Generate a random coordinates, which are latitude and longitude, comma separated.
- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-geohash](https://github.com/mock-end/random-geohash) - Generate a random geohash.
- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.
- [random-country](https://github.com/mock-end/random-country) - Return a random country. 
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-depth/issues/new).
