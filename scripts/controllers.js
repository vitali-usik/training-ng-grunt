'use strict';

angular.module('wireframeApp')
  .controller('GuitarGalleryController', ['$scope', 'guitarListFactory', function($scope, guitarListFactory) {
    $scope.guitars = guitarListFactory.getGuitars();
    $scope.guitarFilter = {
      filtByBrand: '',
      filtByMultiscale: '',
      filtByStrings: '',
      filtByScale: '24.5',
      filtByPrice: '10000'  
    }
    $scope.shortDescription = function(description) {
      var text = description.substr(0, 50) + "...";
      return text;
    };
}]);
