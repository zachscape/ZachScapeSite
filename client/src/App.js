import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/AboutContact/About';
import Afterlands from './Components/afterlands/Afterlands';
import Email from './Components/email/Email';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/afterlands' element={<Afterlands />}></Route>
        </Routes>
        <Email />
        <Footer />
      </Router>
    </div>
 
  );
}
}

