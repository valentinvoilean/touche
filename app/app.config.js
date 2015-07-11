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
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url:         '/home',
        templateUrl: 'app/components/home/home.html',
        controller:  'HomeController',
        controllerAs: 'vm'
      })
      .state('search', {
        url:         '/search',
        templateUrl: 'app/components/search/search.html',
        controller:  'SearchController',
        controllerAs: 'vm'
      })
      .state('sort', {
        url:         '/sort',
        templateUrl: 'app/components/sort/sort.html',
        controller:  'SortController',
        controllerAs: 'vm'
      })
      .state('actors', {
        url:         '/actors',
        templateUrl: 'app/components/actors/actors.html',
        controller:  'ActorsController',
        controllerAs: 'vm'
      })
  }
})();
