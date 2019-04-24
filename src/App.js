import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';


// Layout import
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

// Pages
import Landing from './Components/Pages/Landing'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
