import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  history
} from 'react-router-dom';
import Sobre from './sobre/sobre';
import Inicio from './inicio/inicio';
import Contato from './contato/contato';
import Login from './login/login';


const App = () => {
    return (
      <Router>
        <div className="App">
            <ul>
              <li><Link to="/inicio">Inicio</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>

          <Switch>
            <Route exact path="/" render={Login} />
            <Route path="/inicio" render={Inicio} />
            <Route path="/sobre" render={Sobre} />
            <Route path="/contato" render={Contato} />
            <Route path="" render={() => <h1>NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
