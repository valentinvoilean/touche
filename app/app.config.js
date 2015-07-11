(function () {
  'use strict';
  angular
    .module('myApp')
    .config(config);

  /* @ngInject */
  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller:  'HomeController'
      })
      .when('/search', {
        templateUrl: 'app/components/search/search.html',
        controller:  'SearchController'
      })
      .when('/sort', {
        templateUrl: 'app/components/sort/sort.html',
        controller:  'SortController'
      })
      .when('/actors', {
        templateUrl: 'app/components/actors/actors.html',
        controller:  'ActorsController'
      })
      .otherwise({redirectTo: '/home'});
  }
})();
