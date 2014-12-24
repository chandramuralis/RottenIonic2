'use strict';

angular.module('RottenIonic.controllers')
  .controller('CastDetailCtrl', ['$scope', '$q', '$stateParams', 'RottenIonic.services',
    function($scope, $q, stateParams, rottenService) {

      //
      // $scope.getMovieDetail = function() {
      //   rottenService.getMovieDetail(stateParams.movieID)
      //     .then(function(data) {
      //       if (data) {
      //         $scope.movie = data;
      //       }
      //     });
      // };

      console.log('Cast ID: ' + stateParams.castID);
      // $scope.getMovieDetail();

    }
  ]);
