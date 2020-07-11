import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import "jquery"
import "popper.js"
import "bootstrap"
import './styles/general.css'

//import your own components
import Layout from "./layout";


//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
