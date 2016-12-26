var musicRepository = require('./../repository/music-repository');


module.exports = {
  getMusicFilters: getMusicFilters
};

/**
 *  return unique values for singer,genre,year
 *
 * @return {Array} filters - [{field: 'someField', list:['val1','val2']}]
 */
function getMusicFilters() {
  return new Promise(function (fulfill, reject) {

    var singerPromise = musicRepository.findDistinct('singer');
    var genrePromise = musicRepository.findDistinct('genre');
    var yearPromise = musicRepository.findDistinct('year');

    Promise.all([singerPromise, genrePromise, yearPromise]).then(function (promises) {
      var filters = [];
      filters.push({field: 'singer', label: 'Исполнитель', list: promises[0]});
      filters.push({field: 'genre', label: 'Жанр', list: promises[1]});
      filters.push({field: 'year', label: 'Год', list: promises[2]});
      fulfill(filters);
    }, function (err) {
      reject(err)
    });

  })
}

