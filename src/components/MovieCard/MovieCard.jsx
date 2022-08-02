import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../fetchApi';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  useEffect(() => {
    getMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);
  if (movie) {
    return (
      <section>
        <button
          type="button"
          onClick={() => navigate(location?.state?.from ?? '/')}
        >
          Go back
        </button>
        <div>
          <img
            width="300"
            src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
          />
          <div>
            <h2>{movie.original_title}</h2>
          </div>
        </div>
        <div>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </div>
      </section>
    );
  }
};
