import React from 'react';
import Login from './Login';
import './App.css'

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
      <Login />
    </div>
    </React.Fragment>
    
  );
}

export default App;
