(function () {
  'use strict';

  angular
    .module('myApp.actors', [])
    .controller('ActorsController', ActorsController);

  ActorsController.$inject = ['$scope'];

  /* @ngInject */
  function ActorsController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ActorsController';

    activate();

    ////////////////

    function activate() {
    }

  }
})();
