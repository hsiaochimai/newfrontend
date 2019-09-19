import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Contact from './components/contact/contact';

import Details from './components/Details/Details'
import Map from './components/map/map';

import './App.css';

export default function App() {
    return (
      <Router>
        <>
        <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/map" component={Map} />

      </Switch>
    </>
    </Router>
    );
  }
