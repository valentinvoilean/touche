(function () {
  'use strict';

  angular
    .module('myApp.actors')
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['dataService','$rootScope', '$stateParams'];

  /* @ngInject */
  function ActorsController(dataService, $rootScope, $stateParams) {
    /* jshint validthis: true */
    var vm = this;
    vm.activate = activate;

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
  }

})();

