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
        url:          '/actors',
        templateUrl:  'app/components/actors/actors.html',
        controller:   'ActorsController',
        controllerAs: 'vm'
      })
      .state('search', {
        url:          '/search?name&location&top&popularity',
        templateUrl:  'app/components/search/search.html',
        controller:   'SearchController',
        controllerAs: 'vm'
      })
      .state('sort', {
        url:          '/sort/:sortBy',
        templateUrl:  'app/components/sort/sort.html',
        controller:   'SortController',
        controllerAs: 'vm'
      })
      .state('profile', {
        url:          '/profile/:id',
        templateUrl:  'app/components/profile/profile.html',
        controller:   'ProfileController',
        controllerAs: 'vm'
      })
  }
})();
