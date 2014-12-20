'use strict';

angular.module('RottenIonic.controllers')
  .controller('MovieDetailCtrl', ['$scope', '$q', '$stateParams', 'RottenIonic.services',
    function($scope, $q, stateParams, rottenService) {

      $scope.rate = 3;
      $scope.max = 5;

      $scope.getMovieDetail = function() {
        rottenService.getMovieDetail(stateParams.movieID)
          .then(function(data) {
            if (data) {
              $scope.movie = data;
            }
          });
      };

      $scope.getMovieDetail();

    }
  ]);
