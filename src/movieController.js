import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("home", { pageTitle: "Movies", movies });
};

export const movieDetail = (req, res) => {
  const id = req.params.id;
  const movie = getMovieById(id);
  console.log(movie);

  res.render("detail", { pageTitle: movie.title, movie });
};
export const filterMovie = (req, res) => {
  const searchValue = req.query;
  
  if(!searchValue.year){
    const rating = searchValue.rating;
    const movies = getMovieByMinimumRating(rating)
    res.render("filter",{pageTitle:"Searching by rating:"+rating,movies})
  }else{
    const year = searchValue.year;
    const movies = getMovieByMinimumYear(year)
    console.log(movies)
    res.render("filter",{pageTitle:"Searching by year:"+year,movies})
  }
  res.render("filter")

};
