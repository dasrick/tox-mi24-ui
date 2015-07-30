'use strict';

module.exports = require('angular')
  .module('components', [
    require('./core').name,
    require('./dashboard').name
  ]);
