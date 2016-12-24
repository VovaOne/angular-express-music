import angular from 'angular';

import  './../module';

angular.module('app').service('MusicService', MusicService);

MusicService.$inject = ['$http'];

function MusicService($http) {

  var self = this;

  this.loadMusic = function (filter, skip, limit) {
    return $http.get('http://localhost:1337/' +
      'localhost:3000/music' +
      '?filter=' + JSON.stringify(filter) +
      '&skip=' + skip +
      '&limit=' + limit)
      .then(response => response.data)
      .catch(e => {
        console.log(e);
      });
  };
}