(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$rootScope'];

  /* @ngInject */
  function MainCtrl($rootScope) {

    /* jshint validthis: true */

    var vm = this,
      reverse = false;

    vm.displaySearchFlyout = displaySearchFlyout;
    vm.order = order;

    ////////////////

    function displaySearchFlyout(){
      vm.displaySearch = 'search__animate'
    }

    function order(type) {
      reverse = !reverse;

      $rootScope.$emit('order:options', [type, reverse]);
    }

  }

})();
