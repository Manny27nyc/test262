// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Test the descriptor of Symbol.prototype.description.
info: |
    `Symbol.prototype.description` is an accessor property whose
    set accessor function is undefined.
includes: [propertyHelper.js]
features: [Symbol.prototype.description]
---*/


var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');

assert.sameValue(desc.set, undefined);
assert.sameValue(desc.writable, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyProperty(Symbol.prototype, 'description', {
  enumerable: false,
  configurable: true,
});