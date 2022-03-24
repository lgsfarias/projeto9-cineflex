import { Link } from 'react-router-dom';
import './MoviePoster.css';

const MoviePoster = ({ posterURL, title, id, handleClick }) => {
    return (
        <div className="MoviePoster">
            <Link to={`/filme/${id}`}>
                <div className="zoom">
                    <img src={posterURL} alt={title} onClick={handleClick} />
                </div>
            </Link>
        </div>
    );
};

export default MoviePoster;
