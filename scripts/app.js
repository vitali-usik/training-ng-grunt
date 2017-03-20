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
      })

      .state ('app.contactus', {
        url:'contactus',
        views: {
          'content@': {
            templateUrl: 'views/contactus.html',
            controller: 'ContactController'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/');
  })

  .directive('clickOut', ['$window', '$parse', function ($window, $parse) {
        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            var clickOutHandler = $parse(attrs.clickOut);
 
            angular.element($window).on('click', function (event) {
              if (element[0].contains(event.target)){
                return;
              }
              clickOutHandler(scope, {$event: event});
              scope.$apply();
            });
          }
        };
      }])
;
