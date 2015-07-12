(function () {
  'use strict';

  angular
    .module('myApp.profile', [])
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$stateParams', 'dataService'];

  /* @ngInject */
  function ProfileController($stateParams, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ProfileController';
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
