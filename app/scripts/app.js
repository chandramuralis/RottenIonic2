'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'RottenIonic.services' is found in rottenServices.js
angular.module('RottenIonic', ['ionic', 'config', 'ionic.rating', 'RottenIonic.controllers', 'RottenIonic.services'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateNotFound', function(event, unfoundState) {
      console.log('<!!! ****** Transitioning to unfound State: ' + unfoundState.to + ' with Params: ' + JSON.stringify(unfoundState.toParams) +
                ' with options: ' + unfoundState.options + '**** !!!>');
      event.preventDefault();
    });

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.boxoffice', {
    url: '/boxoffice',
    views: {
      'tab-boxoffice': {
        templateUrl: 'templates/movies/tab-boxoffice.html',
        controller: 'BoxOfficeCtrl'
      }
    }
  })

  .state('tab.boxofficeMovieDetail', {
    url: '/boxOfficeMovieDetail/:movieID',
    views: {
      'tab-boxoffice': {
        templateUrl: 'templates/movies/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }
    }
  })

  .state('tab.boxOfficeCastDetail', {
    url: '/boxOfficeMovieDetail/cast/:movieID',
    views: {
      'tab-boxoffice': {
        templateUrl: 'templates/movies/cast-detail.html',
        controller: 'CastDetailCtrl'
      }
    }
  })

  .state('tab.movies', {
    url: '/movies',
    views: {
      'tab-movies': {
        templateUrl: 'templates/movies/tab-movies.html',
        controller: 'MoviesCtrl'
      }
    }
  })

  .state('tab.movieDetail', {
    url: '/movies/:movieID',
    views: {
      'tab-movies': {
        templateUrl: 'templates/movies/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }
    }
  })

  .state('tab.movieCastDetail', {
    url: '/movies/cast/:movieID',
    views: {
      'tab-movies': {
        templateUrl: 'templates/movies/cast-detail.html',
        controller: 'CastDetailCtrl'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
