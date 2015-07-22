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
    vm.loadProfile = loadProfile;

    activate();

    ////////////////

    function activate() {
      getActors();
      addEvents();
      orderList(null, [$stateParams.orderBy, true]); // order the list by url parameter
    }

    function loadProfile(profile) {
      vm.profileDisplay = profile;
      vm.showProfile = 'profile__animate'
    }

    function getActors() {
      dataService.get(function(data){
        actorsList = data.data;
        vm.actors = actorsList;
        applyGeneralFilter(); // filter by url parameters; e.g. /?name=monica&location=sydney
        applyRangeFilter(null, $stateParams.range); // filter by range url parameter; e.g. /?range=1;7
      });
    }

    function addEvents() {
      $rootScope.$on('search:options', applyGeneralFilter);
      $rootScope.$on('search:rangeOptions', applyRangeFilter);
      $rootScope.$on('order:options', orderList);
    }

    function orderList(event, data) {
      var predicate = data[0];
      var reverse = data[1];

      if (predicate) {
        vm.actors = $filter('orderBy')(vm.actors, predicate, reverse)
      }
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
      vm.actors = $filter('popularityFilter')(actorsList, data);
    }

  }

})();

