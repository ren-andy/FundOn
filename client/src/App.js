import React from "react";
import { Route, Switch } from "react-router-dom";
import Business from "./components/business/index";
import Home from "./components/home/index";
import Login from "./components/login/index";
import Register from "./components/register/index";
import "materialize-css/dist/css/materialize.min.css";
import BusinessRegister from "./components/register/businessIndex";
import BusinessLogin from "./components/login/businessIndex";
import Dashboard from "./components/Dashboard";
import BusinessDashboard from "./components/business/businessIndex";
import CreateBusiness from "./components/CreateBusiness";
import Navbar from "./components/Navbar";
import { Flex, Text, Box, Link, Heading, Card, Image, Button } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import Typist from "react-typist";
import signup_img from "./signup.png";
import login from "./login.png";
import logo from "./logo.png";
import "./App.css";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/business" component={Business}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/businessRegister" component={BusinessRegister}></Route>
          <Route path="/businessLogin" component={BusinessLogin}></Route>
          <Route path="/businessIndex" component={BusinessDashboard}></Route>
          <Route path="/createBusiness" component={CreateBusiness}></Route>
        </Switch>
      </div>

    </ThemeProvider>
  );
}

export default App;
