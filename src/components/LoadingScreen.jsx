import styled from 'styled-components';
import Loading from '../assets/img/Spin-1s-200px.svg';

const LoadingScreen = ({ mensagem }) => {
    return (
        <LoadingContainer>
            <img src={Loading} alt="loading gif" />
            <p>{mensagem}</p>
        </LoadingContainer>
    );
};

export default LoadingScreen;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin-top: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
