(function () {
  'use strict';
  angular
    .module('myApp')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/actors");
    //
    // Now set up the states
    $stateProvider
      .state('actors', {
        url:          '/actors?&orderBy&id',
        templateUrl:  'app/components/actors/actors.html',
        controller:   'ActorsController',
        controllerAs: 'vm'
      })
  }
})();
