import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            state={{ from: location.pathname + location.search }}
            to={`/movies/${id}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  title: PropTypes.string,
};
