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
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
