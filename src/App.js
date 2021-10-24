import React from 'react';
import './App.css'
import MyRouter from './MyRouter';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
          <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"/>
        <div>
          <MyRouter /> 
        </div>           
      </React.Fragment>
    );
  }
}

export default App;
