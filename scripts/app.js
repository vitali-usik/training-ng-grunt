'use strict';

angular.module('wireframeApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

    .state('app', {
      url:'/',
      views: {
        'header': {
          templateUrl: 'views/header.html',
        },
        'footer': {
          templateUrl: 'views/footer.html'
        },
        'content': {
          templateUrl: 'views/home.html'
        }
      }
    })

    .state ('app.gallery', {
      url:'gallery',
      views: {
        'content@': {
          templateUrl: 'views/gallery.html',
          controller: 'GuitarGalleryController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  })
;
