import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Business from './components/business/index'
import Home from './components/home/index'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/business" component={Business}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
