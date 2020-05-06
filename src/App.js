import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./components/Routes";
import MyNavbar from "./components/MyNavbar";


function App() {
  
  return (
    <div className="App">
      <Router>
      <MyNavbar></MyNavbar>
      <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
