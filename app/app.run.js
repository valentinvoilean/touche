(function () {
  'use strict';
  angular
    .module('myApp')
    .run(run);

  run.$inject = ['$rootScope', 'swaggerClient'];

  /* @ngInject */
  function run($rootScope, swaggerClient) {

    var api = swaggerClient(ActorsSchema);

    /*api.restActors.getActors().then(function(restActors){
      console.log(restActors); //todo currently not working: No 'Access-Control-Allow-Origin' header is present on the requested resource
    });*/
  }
})();
