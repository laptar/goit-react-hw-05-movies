import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../Pages/HomePage/HomePage';
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
          <Route path="/movies" element={'MoviesPage'}>
            <Route path=":id" element={'MovieByIdPage'}>
              <Route path="cast" element={'MovieCast'} />
              <Route path="reviews" element={'MovieReviews'} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
