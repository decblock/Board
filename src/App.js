// APP
// DESC:    Entry point

// REACT IMPORTS
import React, { Component } from 'react'
// ROUTER IMPORTS
import { BrowserRouter as Router, Route } from 'react-router-dom';
// NAVBAR IMPORT
import Navbar from './components/Navbar/navbar'
// PAGE IMPORTS
import HomePage from './pages/HomePage/HomePage';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          {/* <Route exact path='/' component={} /> */}
          {/* <Route exact path='/' component={} /> */}
        </Router>
      </div>
    );
  }

}

export default App;