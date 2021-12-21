// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 16.13.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';

const assert = require('assert');
const kLimit = Symbol('limit');
const kCallback = Symbol('callback');
const common = require('./');

class Countdown {
  constructor(limit, cb) {
    assert.strictEqual(typeof limit, 'number');
    assert.strictEqual(typeof cb, 'function');
    this[kLimit] = limit;
    this[kCallback] = common.mustCall(cb);
  }

  dec() {
    assert(this[kLimit] > 0, 'Countdown expired');
    if (--this[kLimit] === 0)
      this[kCallback]();
    return this[kLimit];
  }

  get remaining() {
    return this[kLimit];
  }
}

module.exports = Countdown;