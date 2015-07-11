(function () {
  'use strict';

  angular
    .module('myApp.sort', [])
    .controller('SortController', SortController);

  SortController.$inject = ['$scope'];

  /* @ngInject */
  function SortController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'SortController';

    activate();

    ////////////////

    function activate() {
    }

  }
})();
