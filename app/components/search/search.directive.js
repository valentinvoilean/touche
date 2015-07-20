/**
 * @desc search directive to filter the movies list
 * @example <div search-profiles></div>
 */
angular
  .module('myApp.search')
  .directive('searchProfiles', searchProfiles);

function searchProfiles() {
  var directive = {
    templateUrl:  'app/components/search/search.html',
    controller:   'SearchController',
    controllerAs: 'vm',
    restrict:    'EA',
    replace: true,
    scope: {
      searchProfiles: '='
    },
    bindToController: true

  };

  return directive;
}
