(function () {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['dataService'];

  /* @ngInject */
  function HomeController(dataService) {
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

