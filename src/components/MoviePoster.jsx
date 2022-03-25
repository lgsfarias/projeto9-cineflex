import { Link } from 'react-router-dom';
// import './MoviePoster.css';

import styled from 'styled-components';

const MoviePoster = ({ posterURL, title, id, handleClick }) => {
    return (
        <MoviePosterContainer>
            <Link to={`/filme/${id}`}>
                <Zoom>
                    <img src={posterURL} alt={title} onClick={handleClick} />
                </Zoom>
            </Link>
        </MoviePosterContainer>
    );
};

export default MoviePoster;

const MoviePosterContainer = styled.div`
    width: 145px;
    height: 209px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
`;

const Zoom = styled.div`
    width: 129px;
    height: 193px;
    overflow: hidden;

    img {
        max-width: 100%;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    &:hover img {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
