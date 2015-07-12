/**
 * Home Service
 *
 */
(function () {
  'use strict';

  angular
    .module('myApp.actors')
    .value('url', '/data/sampleActors.json')
    .factory('dataService', dataService);

  dataService.$inject = ['$resource', 'url'];

  /* @ngInject */
  function dataService($resource, url) {
    return $resource(url,{ });
  }
})();
