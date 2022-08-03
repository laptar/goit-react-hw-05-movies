import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

import { lazy, Suspense } from 'react';

const HomePageLazy = lazy(() => import('./Pages/HomePage'));
const MoviesPageLazy = lazy(() => import('./Pages/MovisePage'));
const AboutMoviePageLazy = lazy(() => import('./Pages/AboutMoviePage'));
const CastMovieLazy = lazy(() => import('./components/CastMovie'));
const ReviewsMovieLazy = lazy(() => import('./components/ReviewsMovie'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <HomePageLazy />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <MoviesPageLazy />
              </Suspense>
            }
          ></Route>
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<p>Loading ...</p>}>
                <AboutMoviePageLazy />{' '}
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<p>Loading ...</p>}>
                  <CastMovieLazy />{' '}
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<p>Loading ...</p>}>
                  <ReviewsMovieLazy />{' '}
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
