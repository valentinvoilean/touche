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

    $rootScope.order = orderList;

    activate();

    ////////////////

    function activate() {
      getActors();
      addEvents();
      orderList($stateParams.orderBy, true); // order the list by url parameter
    }

    function getActors() {
      dataService.get(function(data){
        actorsList = data.data;
        vm.actors = actorsList;
        applyGeneralFilter(); // filter by url parameters; e.g. /?name=monica&location=sydney
        applyRangeFilter(null, $stateParams.range); // filter by range url parameter; e.g. /?range=1;7
      });
    }

    function orderList(predicate, reverse) {
      if (predicate) {
        vm.actors = $filter('orderBy')(vm.actors, predicate, reverse)
      }
    }

    function addEvents() {
      $rootScope.$on('search:options', applyGeneralFilter);
      $rootScope.$on('search:rangeOptions', applyRangeFilter);
    }

    function applyGeneralFilter(event, data) {
      if (data) { // on receives data from the search layer
        vm.filterOptions = data;
      }
      else { // on receive data by url parameters
        vm.filterOptions = {
          name : $stateParams.name,
          location: $stateParams.location,
          top: $stateParams.isTop
        }
      }
    }

    function applyRangeFilter(event, data) {
      console.log(data);
      vm.actors = $filter('popularityFilter')(actorsList, data);
    }

  }

})();

