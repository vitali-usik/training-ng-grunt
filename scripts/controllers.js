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
    };
    $scope.shortDescription = function(description) {
      var text = description.substr(0, 50) + "...";
      return text;
    };

    $scope.uncheck = function (event) {
      if ($scope.checked === event.target.value) {
        $scope.checked = false;
      }
    };
  }])

  .controller('ContactController', ['$scope', function($scope) {
    $scope.contactForm = {
      photo: '',
      firstName: '',
      lastName: '',
      sex: '',
      loremSelect1: '',
      loremSelect2: '',
      aboutYourself: '',
      nickName: '',
      email: '',
      phoneNumber: '',
      loremInput1: '',
      loremSelect3: '',
      loremSelect4: '',
      loremSelect5: '',
      loremSelect6: '',
      catsOrDogs: '',
      image: '',
      loremInput2: '',
      loremInput3: '',
      loremInput4: '',
      loremInput5: '',
    };
  }])

  .controller('FooterController', ['$scope', function($scope) {
    $scope.showDropdown = false;
    $scope.dropdownToggle = function() {
      if($scope.showDropdown) {
        $scope.showDropdown = false;
      } else {
        $scope.showDropdown = true;
      }
    };
    $scope.dropdownValue = 'Dropdown';
    $scope.selectOption = function(event) {
      var target = event.target;
      $scope.dropdownValue = target.innerHTML;
      $scope.showDropdown = false;
    };
  }]);


