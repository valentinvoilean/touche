(function () {
  'use strict';

  angular
    .module('myApp.profile', [])
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope','$stateParams', 'dataService'];

  /* @ngInject */
  function ProfileController($scope, $stateParams, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ProfileController';
    vm.actorProfile = $stateParams.id;

    activate();

    ////////////////

    function activate() {
      dataService.get(function(data){
        vm.actors = data.data;
      });

      $scope.$watch('vm.actorProfile', function() {
        if (vm.actorProfile) {
          vm.showProfile = 'profile__animate'
        }
     });

    }
  }
})();
