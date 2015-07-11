(function () {
  'use strict';

  angular
    .module('myApp.search', [])
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$scope'];

  /* @ngInject */
  function SearchController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'SearchController';

    activate();

    ////////////////

    function activate() {
    }

  }
})();
