(function () {
  'use strict';
  angular
    .module('myApp')
    .config(config);

  /* @ngInject */
  function config($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }
})();
