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
  }])

  .controller('ContactController', ['$scope', 'contactFactory', function($scope, contactFactory) {
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
    $scope.options_xxx = contactFactory.getOptionsXXX();
    $scope.options_xx = contactFactory.getOptionsXX();
    $scope.options_xxxx = contactFactory.getOptionsXXXX();
    $scope.options1 = contactFactory.getOptions1();
    $scope.options2 = contactFactory.getOptions2();
    $scope.options3 = contactFactory.getOptions3();
    $scope.options4 = contactFactory.getOptions4();
    $scope.options5 = contactFactory.getOptions5();
    $scope.options6 = contactFactory.getOptions6();

    $scope.sendForm = function() {
      console.log($scope.contactForm);
    };
  }])

  .controller('FooterController', ['$scope', function($scope) {
    $scope.showDropdown = false;
    $scope.dropdownValue = 'Dropdown';

    $scope.dropdownToggle = function() {
      $scope.showDropdown = !$scope.showDropdown;
    };
    $scope.selectOption = function(event) {
      var target = event.target;
      $scope.dropdownValue = target.innerHTML;
      $scope.showDropdown = false;
    };
  }])
;


