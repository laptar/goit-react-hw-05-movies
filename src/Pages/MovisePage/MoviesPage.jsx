import { useState, useEffect } from 'react';
import { searchMovie } from '../../fetchApi';
import { Serchbar } from '../../components/Searchbar/Searchbar';
import s from './MoviesPage.module.css';
import { MovieList } from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [serchParam, setSerchParam] = useSearchParams();
  const serchParamObj = Object.fromEntries([...serchParam]);

  useEffect(() => {
    if (serchParamObj.query) {
      searchMovie({ query: serchParamObj.query }).then(res =>
        setMovies(res.results)
      );
    }
  }, [serchParamObj.query]);

  const handleSubmit = query => {
    setSerchParam({ query: query });
  };

  return (
    <section className={s.section}>
      <Serchbar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </section>
  );
};
