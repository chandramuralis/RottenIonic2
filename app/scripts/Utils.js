'use strict';

angular.module('RottenIonic')
  .factory('Utils', ['$q', '$http', function($q, $http) {

    var Utils = {};

    Utils.AjaxService = {

      getData: function(apiUrl) {
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: apiUrl
          })
          .success(function(data) {
            deferred.resolve(data);
          })
          .error(function(data, status) {
            console.log('API Status: ' + status);
            deferred.resolve(data || 'Request failed');
          });

        return deferred.promise;
      }
    };

    return Utils;
  }]);
