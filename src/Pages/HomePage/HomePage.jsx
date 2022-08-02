import { useState, useEffect } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { trendingList } from '../../fetchApi';
import s from './HomePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    trendingList().then(({ results }) => setMovies(results));
  }, [movies]);

  return (
    <section className={s.section}>
      <MovieList movies={movies} />
    </section>
  );
};
