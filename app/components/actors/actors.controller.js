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
    vm.popularityFilter = popularityFilter;

    $rootScope.order = order;

    activate();

    ////////////////

    function activate() {
      getActors();
      addEvents();
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

    function addEvents() {
      $rootScope.$on('search:options', function (event, data) {
        vm.filterOptions = data;
      });

      $rootScope.$on('search:rangeOptions', function (event, data) {
        vm.rangeOptions = data;
        vm.popularityFilter();
      });
    }

    function popularityFilter(data) {
      if (data) {
        if (vm.rangeOptions) {
          var minMax = vm.rangeOptions.split(';'),
            min = minMax[0],
            max = minMax[1];

          return (data.popularity >= min && data.popularity <= max);
        }
        else {
          return data;
        }
      }
    }

  }

})();

