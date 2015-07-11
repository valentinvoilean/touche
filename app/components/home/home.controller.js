(function () {
  'use strict';

  angular
    .module('myApp.home',[])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  /* @ngInject */
  function HomeController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'HomeController';

    activate();

    ////////////////

    function activate() {
    }
  }

})();

