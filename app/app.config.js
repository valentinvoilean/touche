(function () {
  'use strict';
  angular
    .module('myApp')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    // Remove the # from url
    $locationProvider.html5Mode(true);
    //
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url:         '/home',
        templateUrl: 'app/components/home/home.html',
        controller:  'HomeController'
      })
      .state('search', {
        url:         '/search',
        templateUrl: 'app/components/search/search.html',
        controller:  'SearchController'
      })
      .state('sort', {
        url:         '/sort',
        templateUrl: 'app/components/sort/sort.html',
        controller:  'SortController'
      })
      .state('actors', {
        url:         '/actors',
        templateUrl: 'app/components/actors/actors.html',
        controller:  'ActorsController'
      })
  }
})();
