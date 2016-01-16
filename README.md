# sets-equal

[![master branch build status][build-icon]][build-link]

Check if two Sets contain all the same values.

## Example

```js
import setsEqual from 'sets-equal';

const A = Symbol('A');
const B = Symbol('B');
const C = Symbol('C');

const one = new Set([A, B, C]);
const two = new Set([C, B, A]);
const result = setsEqual(one, two);
console.log(result); // => true
```

## Installing

```sh
$ npm install --save j-/sets-equal
```

## Building

Will output to [dist/sets-equal.js](dist/sets-equal.js).

```sh
$ npm install && npm run build
```

## Testing

```sh
$ npm install && npm test
```

## License

[MIT license](LICENSE).

[build-icon]: https://travis-ci.org/j-/sets-equal.svg?branch=master
[build-link]: https://travis-ci.org/j-/sets-equal
