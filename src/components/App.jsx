import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/HomePage/HomePage';
import { MoviesPage } from '../Pages/MovisePage/MoviesPage';
import { AboutMoviePage } from '../Pages/AboutMoviePage/AboutMoviePage';
import { CastMovie } from '../components/CastMovie/CastMovie';
import { ReviewsMovie } from '../components/ReviewsMovie/ReviewsMovie';
// import {
//   trendingList,
//   searchMovie,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews,
// } from '../fetchApi';

export const App = () => {
  // trendingList().then(({ results }) => console.log(results));
  // searchMovie({ query: 'titanic' }).then(res => console.log(res));
  // getMovieDetails(725201).then(res => console.log(res));
  // getMovieCredits(725201).then(res => console.log(res));
  // getMovieReviews(725201).then(res => console.log(res));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<AboutMoviePage />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
