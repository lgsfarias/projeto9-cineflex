import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from 'react-router-dom';

import Main from './components/Main';
import Movie from './components/Movie';
import Session from './components/Session';
import Success from './components/Success';

import Logo from './assets/img/logo.png';
// import Back from './assets/img/play-skip-back.svg';
import { AiFillStepBackward } from 'react-icons/ai';

const App = () => {
    const [order, setOrder] = useState({
        ids: [],
        name: '',
        cpf: '',
        title: '',
        date: '',
        time: '',
    });

    const [screen, setScreen] = useState('');

    return (
        <Router>
            <Header screen={screen} />
            <Routes>
                <Route
                    path="/"
                    element={<Main setScreen={setScreen} setOrder={setOrder} />}
                ></Route>
                <Route
                    path="/filme/:MovieId"
                    element={<Movie setScreen={setScreen} />}
                ></Route>
                <Route
                    path="/sessao/:ShowtimeId"
                    element={
                        <Session
                            setScreen={setScreen}
                            order={order}
                            setOrder={setOrder}
                        />
                    }
                ></Route>
                <Route
                    path="/sucesso"
                    element={<Success setScreen={setScreen} order={order} />}
                ></Route>
            </Routes>
        </Router>
    );
};

export default App;

const Header = (props) => {
    const { screen } = props;
    const navigate = useNavigate();
    return (
        <header>
            {screen !== 'main' && (
                <AiFillStepBackward
                    className="icon"
                    onClick={() => navigate(-1)}
                />
            )}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <p>CINEFLEX</p>
                </div>
            </Link>
        </header>
    );
};
