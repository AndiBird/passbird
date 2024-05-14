#!/usr/bin/env node
let passbird = require('../src/index.js');

let length = process.argv[2];
let includeUppercase = process.argv[3] === 'true';
let includeNumbers = process.argv[4] === 'true';
let includeSymbols = process.argv[5] === 'true';

console.log(passbird(length, includeUppercase, includeNumbers, includeSymbols));