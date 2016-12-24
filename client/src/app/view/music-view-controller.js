import angular from 'angular';

import  './../module'
import './../service/music-service'

angular.module('app').controller('MusicViewController', MusicViewController);

MusicViewController.$inject = ['MusicService'];

function MusicViewController(musicService) {
  var vm = this;

  vm.columns = [{
    title: 'Исполнитель',
    data: 'singer'
  }, {
    title: 'Песня',
    data: 'song'
  }, {
    title: 'Жанр',
    data: 'genre'
  }, {
    title: 'Год',
    data: 'year'
  }];
  vm.data = [];
  vm.filters = {};
  vm.items = 0;
  vm.skip = null;
  vm.limit = null;


  activate();

  function activate() {
    loadData();
  }


  vm.onFilterChange = function (filters) {
    vm.filters = filters;
    loadData();
  };

  vm.onPageChange = function (skip, limit) {
    vm.skip = skip;
    vm.limit = limit;
    loadData();
  };

  vm.onItemOnPageChange = function (skip, limit) {
    vm.skip = skip;
    vm.limit = limit;
    loadData();
  };

  function loadData() {
    musicService.loadMusic(vm.filters, vm.skip, vm.limit).then(data => {
      vm.data = data.list;
      vm.items = data.items;
    });
  }

}