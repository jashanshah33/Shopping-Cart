import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCInYR39ZDnASmmngwI9mIdF2q5kgZO60Y",
    authDomain: "cart-21f82.firebaseapp.com",
    projectId: "cart-21f82",
    storageBucket: "cart-21f82.appspot.com",
    messagingSenderId: "420116899040",
    appId: "1:420116899040:web:f13cf28d2127aaf17e5c85"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));