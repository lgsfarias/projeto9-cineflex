import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({ posterURL, title }) => {
    return (
        <div className="MoviePoster">
            <Link to="/filme">
                <img src={posterURL} alt={title} />
            </Link>
        </div>
    );
};

export default MoviePoster;
