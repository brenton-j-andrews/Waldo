import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import './Styles/App.css';
import Header from './Components/General/Header';
import Homepage from './Pages/Homepage';
import Game from './Pages/Game';
import Leaderboard from "./Pages/Leaderboard";
import Footer from './Components/General/Footer';

function App() {

  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={ <Homepage  setLevel={setLevel} />} />
          <Route path="/game" element={ <Game level={level} />} />
          <Route path="/leaderboard" element={ <Leaderboard level={level} setLevel={setLevel} />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
