'use strict';

module.exports = {
  'mooon': {
    abstract: true,
    views: {
      'app@': {
        templateUrl: '/views/core/base.html',
        controller: 'CoreController as coreVm'
      }
    }
  }
};
