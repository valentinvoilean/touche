/**
 * @desc actors directive to load the profile info & movies list
 * @example <div actor-profile></div>
 */
angular
  .module('myApp.actors')
  .directive('actorProfile', actorProfile);

function actorProfile() {
  var directive = {
    templateUrl:  'app/components/profile/profile.html',
    controller:   'ProfileController',
    controllerAs: 'vm',
    restrict:    'EA',
    replace: true,
    scope: {
      actorProfile: '='
    },
    bindToController: true

  };

  return directive;
}
