import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main/Main';
import Movie from './components/Movie/Movie';
import Session from './components/Session/Session';
import Success from './components/Success/Success';

import Logo from './assets/img/logo.png';

const App = () => {
    const [order, setOrder] = useState({ ids: [], name: '', cpf: '' });
    return (
        <Router>
            <header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                        <p>CINEFLEX</p>
                    </div>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/filme/:MovieId" element={<Movie />}></Route>
                <Route
                    path="/sessao/:ShowtimeId"
                    element={<Session order={order} setOrder={setOrder} />}
                ></Route>
                <Route
                    path="/sucesso"
                    element={<Success order={order} />}
                ></Route>
            </Routes>
        </Router>
    );
};

export default App;
