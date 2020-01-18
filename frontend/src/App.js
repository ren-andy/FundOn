import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <Router> 
      <Landing/>
      <Route >

      </Route>
    </Router>
  );
}

export default App;
