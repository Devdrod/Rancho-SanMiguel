import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';


// Layout import
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Footer/>
        </div>
    </Router>);
  }
}

export default App;
