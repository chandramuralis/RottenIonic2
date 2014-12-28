'use strict';

angular.module('RottenIonic.controllers')
  .controller('CastDetailCtrl', ['$scope', '$q', '$state', '$stateParams', 'RottenIonic.services',
    function($scope, $q, $state, $stateParams, rottenService) {


      $scope.getMovieDetail = function() {
        rottenService.getMovieDetail($stateParams.movieID)
          .then(function(data) {
            if (data) {
              $scope.movie = data;
            }
          });
      };

      $scope.getMovieDetail();
    }
  ]);
