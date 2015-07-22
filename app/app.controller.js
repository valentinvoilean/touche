(function () {
  'use strict';

  angular
    .module('myApp')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl() {

    /* jshint validthis: true */

    var vm = this;

    vm.displaySearchFlyout = displaySearchFlyout;

    ////////////////

    function displaySearchFlyout(){
      vm.displaySearch = 'search__animate'
    }

  }

})();
