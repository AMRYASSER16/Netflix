import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/watch' component={Watch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
