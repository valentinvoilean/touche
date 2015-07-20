(function () {
  'use strict';

  angular
    .module('myApp.actors')
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['dataService','$rootScope', '$filter', '$stateParams'];

  /* @ngInject */
  function ActorsController(dataService, $rootScope, $filter, $stateParams) {
    /* jshint validthis: true */
    var vm = this;
    var orderBy = $filter('orderBy');

    vm.activate = activate;

    $rootScope.order = order;

    activate();

    ////////////////

    function activate() {
      getActors();
    }

    function getActors() {
      dataService.get(function(data){
        vm.actors = data.data;

        if ($stateParams.orderBy) {
          $rootScope.orderActors = $stateParams.orderBy;
        }
      });
    }

    function order(predicate, reverse) {
      vm.actors = orderBy(vm.actors, predicate, reverse);
    }

  }

})();

