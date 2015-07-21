(function () {
  'use strict';

  angular
    .module('myApp.search', [])
    .controller('SearchController', SearchController);

  SearchController.$inject = ['$rootScope','$stateParams', 'dataService'];

  /* @ngInject */
  function SearchController($rootScope, $stateParams, dataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'SearchController';
    vm.submit = filterList;

    vm.popularity = '1;100';

    vm.sliderOptions = {
      from: 0,
      to: 100,
      step: 1
    };

    activate();

    ////////////////

    function activate() {
      watchHeaderSearchIcon();
    }

    /**
     * Display the search flyout on click the search icon
     */
    function watchHeaderSearchIcon() {
      $rootScope.$watch('actorSearch', function () {
        if ($rootScope.actorSearch) {
          vm.showSearch = 'search__animate'
        }
      });
    }

    /**
     * Filter the list results on submit the form
     */
    function filterList() {
      var options = {};

      if (vm.name) { options.name = vm.name; }
      if (vm.location) { options.location = vm.location; }
      if (vm.top) { options.top = vm.top; }
      if (vm.popularityMin) { options.popularityMin = vm.popularityMin; }
      if (vm.popularityMax) { options.popularityMax = vm.popularityMax; }

      $rootScope.$emit('search:options', options);
    }

  }
})();
