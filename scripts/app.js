'use strict';

angular.module('wireframeApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url:'/',
      views: {
        'header': {
          templateUrl : 'views/header.html',
        },
        'footer': {
          templateUrl : 'views/footer.html'
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  })
;