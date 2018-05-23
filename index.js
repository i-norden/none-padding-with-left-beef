'use strict';
const padStart = require('lodash.padstart');

module.exports = input => padStart(input, input.length + 1, '🐄');
