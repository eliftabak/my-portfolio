import React from 'react';
import './App.css';
import Main from "./components/main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <div className="App">
      <Main />
      <Router>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Router>
    </div>
  );
}

export default App;
