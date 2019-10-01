import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <BrowserRouter>
   <div>
  
   <Navbar/>
   <Switch>
   <Route path="/" exact={true} component={Home}/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   <Route path="/:post_id" component={Post}/>
   </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
