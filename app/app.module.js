(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('myApp', [
      'ngAnimate',
      'swagger-client',
      'ui.router',
      'myApp.actors',
      'myApp.profile'
    ])
})();
