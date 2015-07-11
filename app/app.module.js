(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('myApp', [
      'ui.router',
      'myApp.home',
      'myApp.sort',
      'myApp.search',
      'myApp.actors'
    ])
})();
