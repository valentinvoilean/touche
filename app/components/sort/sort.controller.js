(function () {
  'use strict';

  angular
    .module('myApp.sort', [])
    .controller('SortController', SortController);

  SortController.$inject = ['$stateParams'];

  /* @ngInject */
  function SortController($stateParams) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'SortController';

    activate();

    ////////////////

    function activate() {
      console.log($stateParams)
    }

  }
})();
