import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import './Styles/App.css';
import Header from './Components/General/Header';
import Homepage from './Components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={ <Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
