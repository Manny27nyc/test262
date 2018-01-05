// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.tolocalestring
description: |
  Throws a TypeError exception when `this` is not a TypedArray instance
info: |
  22.2.3.28 %TypedArray%.prototype.toLocaleString ([ reserved1 [ , reserved2 ] ])

  This function is not generic. ValidateTypedArray is applied to the this value
  prior to evaluating the algorithm. If its result is an abrupt completion that
  exception is thrown instead of evaluating the algorithm.

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  1. If Type(O) is not Object, throw a TypeError exception.
  2. If O does not have a [[TypedArrayName]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var toLocaleString = TypedArray.prototype.toLocaleString;

assert.throws(TypeError, function() {
  toLocaleString.call({});
}, "this is an Object");

assert.throws(TypeError, function() {
  toLocaleString.call([]);
}, "this is an Array");

var ab = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  toLocaleString.call(ab);
}, "this is an ArrayBuffer instance");

var dv = new DataView(new ArrayBuffer(8), 0, 1);
assert.throws(TypeError, function() {
  toLocaleString.call(dv);
}, "this is a DataView instance");
