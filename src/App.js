import React, { Component } from 'react';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
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
          {/* <Header /> */}
          {/* <Navbar /> */}
          {/* <Home /> */}
          {/* <div className="container my-3"> */}
          {/* <div class="box1 my-2">  */}
          <Routes>
               <Route exact path="/" index element={<Home />} head1="The" head2="Siren">
              </Route> 
              {/* <Route exact path="/home" element={<Home />}>
              </Route> */}
              <Route exact path="/bollywood" element={<Bollywood />} head1="The" head2="Siren">
              </Route>
              <Route exact path="/technology" element={<Technology />} head1="The" head2="Siren">
              </Route>
              <Route exact path="/hollywood" element={<Hollywood />} head1="The" head2="Siren">
              </Route>
              <Route exact path="/fitness" element={<Fitness />} head1="The" head2="Siren">
              </Route>
              <Route exact path="/food" element={<Food />} head1="The" head2="Siren">
              </Route>
            </Routes>
          {/* </div> */}
            
          {/* </div> */}
        </Router>

      </>
    )
  }
}
