'use strict';

/**
 * @ngInject
 */
module.exports = function ($mdSidenav) {
  var vm = this;

  vm.toggleSidenav = function () {
    $mdSidenav('left').toggle();
  };

  vm.settings = {
    asideFolded: false
  };


  // save settings to local storage
  //if ( angular.isDefined($localStorage.settings) ) {
  //  $scope.app.settings = $localStorage.settings;
  //} else {
  //  $localStorage.settings = $scope.app.settings;
  //}
  //$scope.$watch('coreVm.settings', function(){
  //  //if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
  //  //  // aside dock and fixed must set the header fixed.
  //  //  $scope.app.settings.headerFixed = true;
  //  //}
  //  // save to local storage
  //  $localStorage.settings = $scope.app.settings;
  //}, true);

};
