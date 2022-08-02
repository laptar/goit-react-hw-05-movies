// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

import axios from 'axios';

const defaultParams = {
  api_key: 'cb1d0f4a7bc8495540b668929e8899ef',
  language: 'en-US',
  page: 1,
  include_adult: false,
};

const movieDatabaseApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: defaultParams,
});

export const trendingList = async () => {
  const { data } = await movieDatabaseApi.get('/trending/all/day');
  return data;
};

export const searchMovie = async params => {
  const { data } = await movieDatabaseApi.get('/search/movie', { params });
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await movieDatabaseApi.get(`movie/${movie_id}`);
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await movieDatabaseApi.get(`movie/${movie_id}/credits`);
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await movieDatabaseApi.get(`movie/${movie_id}/reviews`);
  return data;
};
