# bitwise-permission-manager
> Bitwise permission manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/bitwise-permission-manager
```

## usage
```js
import bpm from '@jswork/bitwise-permission-manager';

let r = 0b100;
let w = 0b010;
let x = 0b001;
let target = 0b111;

// add
let p = bpm.add(r, w, x);                // 0b111
// remove
let p = bpm.remove(r, w, x);            // 0b000
// toggle
let p = bpm.toggle(target, r, w, x);    // 0b000
// has
let p = bpm.has(target, r, w, x);       // true

```

## license
Code released under [the MIT license](https://github.com/afeiship/bitwise-permission-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/bitwise-permission-manager
[version-url]: https://npmjs.org/package/@jswork/bitwise-permission-manager

[license-image]: https://img.shields.io/npm/l/@jswork/bitwise-permission-manager
[license-url]: https://github.com/afeiship/bitwise-permission-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/bitwise-permission-manager
[size-url]: https://github.com/afeiship/bitwise-permission-manager/blob/master/dist/bitwise-permission-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/bitwise-permission-manager
[download-url]: https://www.npmjs.com/package/@jswork/bitwise-permission-manager
