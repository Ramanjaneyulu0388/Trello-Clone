import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Boards from "./components/Boards";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Boards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
