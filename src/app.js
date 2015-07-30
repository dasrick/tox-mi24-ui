'use strict';

require('angular');

process.env.appversion = require('../package.json').version;

require('angular-material');
//require('angular-bootstrap');
//require('angular-gravatar');
//require('angular-loading-bar');
require('angular-route');
//require('angular-jwt');
//require('angular-translate');
//require('angular-translate-loader-partial');
//require('angular-cache');
require('angular-resource');
//require('ng-storage');
//require('angular-ui-unique');
//require('ui-select');
var requires = [
  'ngMaterial',
  //'ui.bootstrap',
  //'ui.gravatar',
  //'angular-loading-bar',
  'ui.router',
  //'angular-jwt',
  //'pascalprecht.translate',
  //'angular-cache',
  'ngResource',
  //'ngStorage',
  //'ui.select',
  //'ui.unique',
  require('./shared').name,
  require('./components').name
];

angular.module('tox-mi24-ui-app', requires)
  //.config(function ($httpProvider, jwtInterceptorProvider) {
  //  jwtInterceptorProvider.tokenGetter = ['UserService', function (UserService) {
  //    //
  //    // CCC Frontend erweitern siehe
  //    // https://github.com/auth0/angular-jwt
  //    //
  //    // CCC Backend erweitern siehe
  //    // https://github.com/lexik/LexikJWTAuthenticationBundle/issues/37
  //    //
  //    return UserService.getToken();
  //  }];
  //  $httpProvider.interceptors.push('jwtInterceptor');
  //})
  //.config(function ($httpProvider) {
  //  $httpProvider.interceptors.push('AlertInterceptor');
  //})
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state;
      $state = $injector.get('$state');
      $state.go('mooon.dashboard');
    });
    $resourceProvider.defaults.stripTrailingSlashes = true;
    //$locationProvider.html5Mode(true).hashPrefix('!');
  })
  //.config(function ($translateProvider) {
  //  $translateProvider.useSanitizeValueStrategy('escaped');
  //  $translateProvider.useLoader('$translatePartialLoader', {
  //    urlTemplate: '/i18n/{part}/{lang}.json'
  //  });
  //  // add translation table
  //  $translateProvider
  //    .registerAvailableLanguageKeys(['en', 'de'], {
  //      'en_*': 'en',
  //      'de_*': 'de'
  //    })
  //    .determinePreferredLanguage();
  //
  //  /*
  //   The fallback language is not working ...
  //   $translateProvider.fallbackLanguage('en');
  //   The following workaround sets the preferred language to english,
  //   if the detection failed or the detected language is not known.
  //   */
  //  var language = $translateProvider.preferredLanguage();
  //  if ((language !== null) || !language.match(/(de).*/)) {
  //    return $translateProvider.preferredLanguage('de');
  //  }
  //})
  //.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
  //  cfpLoadingBarProvider.includeSpinner = false;
  //}])
  ////.run(function ($rootScope, $state, $stateParams) {
  ////  $rootScope.$state = $state;
  ////  $rootScope.$stateParams = $stateParams;
  ////  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
  ////    // to be used for back button //won't work when page is reloaded.
  ////    $rootScope.previousStateName = fromState.name;
  ////    $rootScope.previousStateParams = fromParams;
  ////  });
  ////  //back button function called from back button's ng-click="back()"
  ////  $rootScope.back = function () {
  ////    $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
  ////  };
  ////})
  //
  //.config(['gravatarServiceProvider', function (gravatarServiceProvider) {
  //  gravatarServiceProvider.defaults = {
  //    size: 100,
  //    'default': 'mm'  // Mystery man as default for missing avatars
  //  };
  //
  //  // Use https endpoint
  //  gravatarServiceProvider.secure = true;
  //
  //  // Force protocol
  //  //gravatarServiceProvider.protocol = 'my-protocol';
  //}
  //])
;

angular.bootstrap(document, ['tox-mi24-ui-app']);
