(function () {
  'use strict';

  angular
    .module('myApp.actors', [])
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['$stateParams', 'dataService'];

  /* @ngInject */
  function ActorsController($stateParams, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ActorsController';
    vm.actorId = $stateParams.id;

    activate();

    ////////////////

    function activate() {
      dataService.get(function(data){
        vm.actors = data.data;
      });
    }
  }
})();
