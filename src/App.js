import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import News from "./News";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          {/* API call to get the Home Page */}

          <Route
            path="/about"
            element={<About />}
          />
          {/* API call to get the About Page */}
                    
          <Route
            path="/news"
            element={<News />}
          />
          {/* API call to get the News Page */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
