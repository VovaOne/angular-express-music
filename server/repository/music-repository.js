var mongoose = require('mongoose');
var Music = require('./../model/music');

module.exports = {
  save: save,
  remove: remove,
  findAll: findAll,
  count: count
};


init();

function init() {
  mongoose.connect('mongodb://localhost/test');

  getSampleData().forEach(function (m) {
    save(new Music(m));
  });

  // findAll().then(function (list) {
  //   list.data.forEach(function (model) {
  //     remove(model._id)
  //   })
  // })
}

/**
 *
 * @param model mongoose model
 * @return promise
 */
function save(model) {
  return new Promise(function (fulfill, reject) {
    model.save(function (err, id) {
      if (err) reject(err);
      fulfill(model);
    })
  })
}

/**
 *
 * @param id
 * @return promise
 */
function remove(id) {
  return new Promise(function (fulfill, reject) {
    Music.findByIdAndRemove(id, function (err) {
      if (err) reject(err);
      fulfill(id);
    })
  })
}

/**
 *
 * @param filter mongodb filter
 * @param skip
 * @param limit
 * @return promise
 */
function findAll(filter, skip, limit) {
  return new Promise(function (fulfill, reject) {
    Music
      .find(filter)
      .skip(skip)
      .limit(limit)
      .exec(function (err, list) {
        if (err) reject(err);
        fulfill(list)
      });
  });
}

function count(filter) {
  return new Promise(function (fulfill, reject) {
    Music
      .count(filter)
      .exec(function (err, i) {
        if (err) reject(err);
        fulfill(i);
      });
  });
}

function getSampleData() {
  return [{
    singer: 'The Kingston Trio',
    song: 'Tom Dooley',
    genre: 'Folk',
    year: 1958
  }, {
    singer: 'Led Zeppelin',
    song: 'Kashmir',
    genre: 'Rock',
    year: 1975
  }, {
    singer: 'Miles Davis',
    song: 'Blue in Green',
    genre: 'Jazz',
    year: 1959
  }, {
    singer: 'Muddy Waters',
    song: 'Mannish Boy',
    genre: 'Blues',
    year: 1955
  }]
}