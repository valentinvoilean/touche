angular.module('myApp.actors')
  .filter('popularityFilter', function () {
    return function (actors, range) {

      var filtered = [];

      if (actors) {
        if (range) {
          var minMax = range.split(';'),
            min = minMax[0],
            max = minMax[1];

          for (var i = 0; i < actors.length; i++) {
            var actor = actors[i];

            if (actor.popularity >= min && actor.popularity <= max) {
              filtered.push(actor);
            }

          }
          return filtered;
        }
        else {
          return actors;
        }
      }
    };
  });
