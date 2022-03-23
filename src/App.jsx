import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import Movie from './components/Movie/Movie';
import Session from './components/Session/Session';

const App = () => {
    return (
        <Router>
            <header>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p>CINEFLEX</p>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/filme" element={<Movie />}></Route>
                <Route path="/sessao" element={<Session />}></Route>
            </Routes>
            <footer>
                <div className="selectedMovie">
                    <img
                        src="https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"
                        alt="Enola"
                    />
                </div>
                <div className="description">
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </Router>
    );
};

export default App;
