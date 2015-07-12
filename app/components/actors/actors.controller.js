(function () {
  'use strict';

  angular
    .module('myApp.actors')
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['dataService'];

  /* @ngInject */
  function ActorsController(dataService) {
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
      });
    }
  }

})();

