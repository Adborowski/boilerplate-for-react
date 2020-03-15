console.log("[APP.JS]");

import ReactDOM from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp.js'
import './styles/styles.scss';

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp/>, appRoot); // you can straight up stick your component JSX tag in there
