var express = require('express');
var app = require('./../app');
var router = express.Router();

var musicRepository = require('./../repository/music-repository');
var musicService = require('./../service/music-service');


router.get('/', function (req, res, next) {

  if (req.query.filter) var filter = JSON.parse(req.query.filter);
  if (req.query.skip) var skip = parseInt(req.query.skip);
  if (req.query.limit) var limit = parseInt(req.query.limit);

  var countPromise = musicRepository.count(filter);

  var listPromise = musicRepository.findAll(filter, skip, limit);

  Promise.all([countPromise, listPromise]).then(function (itemsListArr) {
    res.json({
      items: itemsListArr[0],
      list: itemsListArr[1]
    });
  });

});

router.get('/filters', function (req, res, next) {
  musicService.getMusicFilters().then(function (filters) {
    res.json(filters);
  });
});


module.exports = router;
