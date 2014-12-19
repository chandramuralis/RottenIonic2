'use strict';

angular.module('RottenIonic.controllers')
  .controller('MovieDetailCtrl', ['$scope', '$q', '$stateParams', 'RottenIonic.services',
    function($scope, $q, stateParams, rottenService) {

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
