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
    vm.reverseName=false;
    vm.reversePopularity=false;

    ////////////////

    function displaySearchFlyout(){
      vm.displaySearch = 'search__animate'
    }

  }

})();
