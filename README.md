# microtime2iso

Convert decimal time values to [ISO8601](http://en.wikipedia.org/wiki/ISO_8601)

```js
var microtime2iso = require('microtime2iso');

microtime2iso('1420242927.139');
// 2015-01-02T23:55:27.139Z

microtime2iso(1420242927.139456);
// 2015-01-02T23:55:27.139456Z

microtime2iso('1420242927');
// 2015-01-02T23:55:27.000Z
```

## API

### microtime2iso(decimal)

`decimal` should be a number or number-string following the format `SSS.uuuuuu` Where `S` is seconds and `u` is microseconds. Any decimal value between 0 and 6 (microseconds) is allowed.

## License

MIT
