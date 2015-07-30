'use strict';

//var RoutingConfig = require('./config');
//
//module.exports = angular
//  .module('core', [])
//  .module('core').controller('CoreController', require('./controller/CoreController'))
//  .config(function ($stateProvider) {
//    angular.forEach(RoutingConfig, function (config, name) {
//      $stateProvider.state(name, config);
//    });
//  });



var RoutingConfig = require('./config');

module.exports = angular.module('core', []);

angular.module('core').controller('CoreController', require('./controller/CoreController'));
//angular.module('dashboard').config(function ($stateProvider, $translatePartialLoaderProvider) {
//  angular.forEach(RoutingConfig, function (config, name) {
//    $stateProvider.state(name, config);
//  });
//  $translatePartialLoaderProvider.addPart('dashboard');
//});
angular.module('core').config(function ($stateProvider) {
  angular.forEach(RoutingConfig, function (config, name) {
    $stateProvider.state(name, config);
  });
});
