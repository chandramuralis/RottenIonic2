'use strict';

angular.module('RottenIonic.controllers')
  .controller('BoxOfficeCtrl', ['$scope', '$q', 'RottenIonic.services',
    function($scope, $q, rottenService) {

      $scope.getBoxOffice = function() {
        rottenService.getBoxOffices( 16, 'us')
        .then(function(data) {
          if (data && data.movies) {
            $scope.boxOffice = data.movies;
          }
        });
      };

      $scope.getBoxOffice();
    }
  ]);
