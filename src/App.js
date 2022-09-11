import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Navbar />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/bollywood" element={<Bollywood />}>
              </Route>
              <Route exact path="/technology" element={<Technology />}>
              </Route>
              <Route exact path="/hollywood" element={<Hollywood />}>
              </Route>
              <Route exact path="/fitness" element={<Fitness />}>
              </Route>
              <Route exact path="/food" element={<Food />}>
              </Route>
            </Routes>
          </div>
        </Router>

      </>
    )
  }
}
