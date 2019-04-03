const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.getFilmTitles = function() {
  return this.films.map((film) => {film.title});
}
Cinema.prototype.getFilmByTitle = function(title) {
    let result = this.films.find((film) => {
    return film.title === title
  });


  return result;
}

// Cinema.prototype.getFilmsByGenre = function(genre) {
//     let result = this.films.filter((film) => {
//     return film.genre === genre;
//   });
//   return result;
// }
Cinema.prototype.getFilmsByProperty = function(property, value) {
    let result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
}
Cinema.prototype.checkFilmsByYear = function(year) {
    let result = this.films.filter((film) => {
      return film.year === year;
    });
    return result.length > 0;
}

Cinema.prototype.checkFilmsOverLength =  function(length) {
  let result = this.films.filter((film) => {
    return film.length >= length;
  });
  return result.length === this.films.length;
}
Cinema.prototype.checkTotalFilmsRunningTime = function(length) {
  let lengths = this.films.map((film) => {return film.length});

  let result = lengths.reduce((sum, length) => {
    return sum + length;
  });
  return result;
}
module.exports = Cinema;
