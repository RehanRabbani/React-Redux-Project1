import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
   <div>
  
   <Navbar/>
   
   <Route path="/" exact={true} component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   
   
   </div>
   </BrowserRouter>
  );
}

export default App;
