// APP
// DESC:    Entry point

// REACT IMPORTS
import React, { Component } from 'react'
// ROUTER IMPORTS
import { BrowserRouter as Router, Route } from 'react-router-dom';
// NAVBAR IMPORT
import Navbar from './components/Navbar/navbar';
// PAGE IMPORTS
import HomePage from './pages/HomePage/HomePage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
// REDUX IMPORTS
import { store } from "./store";
import { loadUser } from "./actions/authActions";
// AXIOS IMPORT
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/auth' component={AuthenticationPage} />
          {/* <Route exact path='/' component={} /> */}
        </Router>
      </div>
    );
  }

}

export default App;