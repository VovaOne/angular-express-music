import angular from 'angular';
import  './../../../module'

angular.module('app').controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope'];

function HeaderController($scope) {
  var vm = this;

  vm.columns = [];
  vm.orderColumn = '';
  vm.lastOrderColumn = '';
  vm.orderDirectionReverse = false;

  vm.sort = function (orderColumn) {
    vm.orderColumn = orderColumn;
    if (vm.lastOrderColumn == orderColumn) vm.orderDirectionReverse = !vm.orderDirectionReverse;
    else vm.orderDirectionReverse = false;
    vm.lastOrderColumn = orderColumn;
  };

  vm.getLastCellWinOSClass = function (i) {
    // 3 is last cell
    if (i == 3) {
      if (navigator.appVersion.indexOf("Win") != -1)
        return 'm-table-header-last-cell-width-win-os';
    }
    return '';
  };

}