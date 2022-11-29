import React from "react";

import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Press from "./Pages/Press";

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      {/* <Home /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/ba" element={Press} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
