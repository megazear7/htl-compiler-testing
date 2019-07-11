export class MoviesUseModel {
  constructor(context) {
    this.movies = context.movies.map(movie => new MovieUseModel(movie));
  }
}

export class MovieUseModel {
  constructor(context) {
    this.name = context.name;
    this.releaseDate = context.releaseDate;
  }
}
