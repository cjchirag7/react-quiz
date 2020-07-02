import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
          <Header/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/quiz'>
              <Quiz/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
