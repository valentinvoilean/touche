(function () {
  'use strict';

  angular
    .module('myApp.actors')
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['dataService','$rootScope', '$filter', '$stateParams'];

  /* @ngInject */
  function ActorsController(dataService, $rootScope, $filter, $stateParams) {
    /* jshint validthis: true */
    var vm = this,
      actorsList;

    vm.activate = activate;

    $rootScope.order = order;

    activate();

    ////////////////

    function activate() {
      getActors();
      addEvents();
    }

    function getActors() {
      dataService.get(function(data){
        actorsList = data.data;
        vm.actors = actorsList;

        if ($stateParams.orderBy) {
          $rootScope.orderActors = $stateParams.orderBy;
        }
      });
    }

    function order(predicate, reverse) {
      vm.actors = $filter('orderBy')(vm.actors, predicate, reverse);
    }

    function addEvents() {
      $rootScope.$on('search:options', function (event, data) {
        vm.filterOptions = data;
      });

      $rootScope.$on('search:rangeOptions', function (event, data) {
        vm.actors = $filter('popularityFilter')(actorsList, data)
      });
    }

  }

})();

