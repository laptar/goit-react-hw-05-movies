import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../fetchApi';
import { useParams, Link, Outlet } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export const AboutMoviePage = () => {
  return (
    <>
      <MovieCard />
      <Outlet />
    </>
  );
};
