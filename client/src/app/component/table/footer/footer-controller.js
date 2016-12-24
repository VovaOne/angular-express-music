import angular from 'angular';

import  './../../../module'

angular.module('app').controller('FooterController', FooterController);

FooterController.$inject = ['$scope'];

function FooterController($scope) {
  var vm = this;

  vm.skip = null;
  vm.limit = null;
  vm.items = 0;

  vm.itemsOnPage = 10;

  vm.pageNumber = 1;
  vm.displayPages = [1, 2, 3, 4, 5];
  vm.maxPages = 4;

  $scope.$watch("items", function (newValue, oldValue) {
    vm.items = newValue;
    calculateMaxPages();
    calculateDisplayPages();
    calculateRequestParams();
  },true);

  vm._onItemOnPageChange = function (number) {
    vm.itemsOnPage = number;
    calculateMaxPages();
    calculateDisplayPages();
    calculateRequestParams();
    vm.onItemOnPageChange(vm.skip, vm.limit);
  };

  vm._onPageChange = function (number) {
    vm.pageNumber = number;
    calculateMaxPages();
    calculateDisplayPages();
    calculateRequestParams();
    vm.onPageChange(vm.skip, vm.limit);
  };

  function calculateRequestParams() {
    vm.limit = vm.itemsOnPage;
    vm.skip = vm.pageNumber * vm.itemsOnPage - vm.itemsOnPage;
  }

  function calculateMaxPages() {
    vm.maxPages = Math.ceil(vm.items / vm.itemsOnPage);
  }

  function calculateDisplayPages() {
    if (vm.maxPages < 5) {
      var pages = [];
      for (var i = 1; i <= vm.maxPages; i++) {
        pages.push(i);
      }
      vm.displayPages = pages;
    } else if (vm.pageNumber <= 3)
      vm.displayPages = [1, 2, 3, 4, 5];
    else if (vm.pageNumber + 3 >= vm.maxPages)
      vm.displayPages = [vm.maxPages - 4, vm.maxPages - 3, vm.maxPages - 2, vm.maxPages - 1, vm.maxPages];
    else
      vm.displayPages = [vm.pageNumber - 2, vm.pageNumber - 1, vm.pageNumber, vm.pageNumber + 1, vm.pageNumber + 2];
  }

}