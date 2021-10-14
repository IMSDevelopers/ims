import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Login from "./Login";
import Home from "./Home";
import NotFound from './NotFound';
import MyRouter from './MyRouter';

function App() {
  return (
    <React.Fragment>
    <head>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>
    </head>
    <div>
       <MyRouter /> 
    </div>           
    </React.Fragment>
  );
}

export default App;
