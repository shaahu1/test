
import './App.css';
import FormLogin from './FormLogin';
import React, { Component } from 'react';


import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';



class App extends Component{
  
  
  render()
  {
    return (
      <Router>
         
          <Switch>
            <Route path="/user"/>
            <Route path="/" component={FormLogin} />
          </Switch>
          
      
      </Router>
    );
  }
  
}


export default App;
