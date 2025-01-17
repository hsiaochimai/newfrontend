import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from  './services/data'
import "typeface-roboto";
import "typeface-signika";
import "typeface-righteous";
import newData from  './services/newData'
ReactDOM.render(<App DATA={newData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
