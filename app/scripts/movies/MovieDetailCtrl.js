'use strict';

angular.module('RottenIonic.controllers')
  .controller('MovieDetailCtrl', ['$scope', '$q', '$state', '$stateParams', 'RottenIonic.services',
    function($scope, $q, $state, $stateParams, rottenService) {

      $scope.rate = 0;
      $scope.max = 5;

      $scope.getMovieDetail = function() {
        rottenService.getMovieDetail($stateParams.movieID)
          .then(function(data) {
            if (data) {
              $scope.movie = data;
            }
          });
      };

      $scope.isBoxOfficeTab = function() {
        if($state.is('tab.boxofficeMovieDetail'))
          return true;
        return false;
      };

      $scope.getMovieDetail();

    }
  ]);
