'use strict';

angular.module('RottenIonic')
  .factory('RottenIonic.services', ['$http', '$q', 'appSettings', 'Utils', function($http, $q, appSettings, Utils) {

    var service = {};

    service.getBoxOffices = function(limit, country) {
      var boxOfficeURL = appSettings.apiServerPath + '/lists/movies/box_office.json?callback=JSON_CALLBACK&' + 'limit=' + (limit ? limit : 10) + '&country=' + (country ? country : 'us') + '&apikey=' + appSettings.apiKey;

      return Utils.AjaxService.getData(boxOfficeURL);
    };

    service.searchMovies = function(searchQuery, limit, country) {
      var boxOfficeURL = appSettings.apiServerPath + '/movies.json?callback=JSON_CALLBACK' +
        '&q=' + searchQuery +
        '&limit=' + (limit ? limit : 10) +
        '&country=' + (country ? country : 'us') +
        '&apikey=' + appSettings.apiKey;

      return Utils.AjaxService.getData(boxOfficeURL);
    };

    service.getMovieDetail = function(movieid) {
      var boxOfficeURL = appSettings.apiServerPath + '/movies/' + movieid + '.json?callback=JSON_CALLBACK' +
      '&apikey=' + appSettings.apiKey;

      return Utils.AjaxService.getData(boxOfficeURL);
    };

    return service;

  }]);
