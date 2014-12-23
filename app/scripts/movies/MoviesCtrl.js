'use strict';

angular.module('RottenIonic.controllers')
  .controller('MoviesCtrl', ['$scope', '$q', 'RottenIonic.services',
    function($scope, $q, rottenService) {

      $scope.movies = {};
      $scope.movie = {};
      $scope.movie.searchQuery = 'ironman';

      $scope.searchMovies = function() {
        if($scope.movie.searchQuery.length == 0) {
          $scope.movies = '';
          return;
        }
        rottenService.searchMovies($scope.movie.searchQuery, 10, 'us')
          .then(function(data) {
            if (data && data.movies) {
              $scope.movies = data.movies;
            }
          });
      };

      $scope.clearSearch = function() {
        $scope.movie.searchQuery = '';
        $scope.movies = '';
      };

      $scope.searchMovies();

    }
  ]);
