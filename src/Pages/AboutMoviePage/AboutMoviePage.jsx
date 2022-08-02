import { Outlet } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export const AboutMoviePage = () => {
  return (
    <>
      <MovieCard />
      <Outlet />
    </>
  );
};
