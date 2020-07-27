import React from 'react'
import Main from './components/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './container/homePage/HomePage'
import './App.css'

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
  )
}

export default App
