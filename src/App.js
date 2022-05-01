import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Home from './components/Home'
  import Maps from './components/Map';
  import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/onde-descartar" element={<Maps/>}/>
        <Route exact path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
