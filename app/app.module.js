(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('myApp', [
      'ngAnimate',
      'ngSlider',
      'swagger-client',
      'ui.router',
      'myApp.actors',
      'myApp.profile',
      'myApp.search'
    ])
})();
