(function () {
  'use strict';

  angular
    .module('myApp.search', [])
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$rootScope','$stateParams', 'dataService'];

  /* @ngInject */
  function SearchController($rootScope, $stateParams, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'SearchController';

    activate();

    ////////////////

    function activate() {

      $rootScope.$watch('actorSearch', function () {
        if ($rootScope.actorSearch) {
          console.log($rootScope.actorSearch);
          vm.showSearch = 'search__animate'
        }
      });
    }
  }
})();
