import { Outlet } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import s from './AboutMoviePage.module.css';

export const AboutMoviePage = () => {
  return (
    <div className={s.section}>
      <MovieCard />
      <Outlet />
    </div>
  );
};
