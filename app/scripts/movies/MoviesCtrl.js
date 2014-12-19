'use strict';

angular.module('RottenIonic.controllers')
  .controller('MoviesCtrl', ['$scope', '$q', 'RottenIonic.services',
    function($scope, $q, rottenService) {

      $scope.searchQuery = 'ironman';

      $scope.searchMovies = function(searchQuery) {
        rottenService.searchMovies(searchQuery, 10, 'us')
          .then(function(data) {
            if (data && data.movies) {
              $scope.movies = data.movies;
            }
          });
      };

      $scope.searchMovies($scope.searchQuery);

    }
  ]);
