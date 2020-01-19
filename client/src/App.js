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

      <div style={{ textAlign: "center" }}>
        <Flex px={5} color="Black" bg="beige" alignItems="center">
          <Image
            src={logo}
            sx={{
              width: ["100%", "18%"],
              borderRadius: 8
            }}
          />
          <Box mx="auto" />
          <Link variant="nav" href="/SignIn">
            <Text fontSize={[3, 2, 3]} fontWeight="bold">
              Sign in
            </Text>
          </Link>
        </Flex>

        <div className="App-header">
          <Text fontSize={[3, 4, 5]} fontFamily="monospace" fontWeight="bold">
            <Typist>
              Welcome to FundOn, the student-to-startup incubator!
            </Typist>
          </Text>
          <Box p={3} fontSize={2} width={[1, 1, 1 / 2]} bg="white"></Box>
          <Flex>
            <Card width={256}>
              <Link href="/SignIn">
                {/* include link to login page */}
                <Image
                  sx={{
                    width: ["100%", "45%"],
                    borderRadius: 8
                  }}
                  src={login}
                />
              </Link>
              <Heading fontSize={[5, 6, 5]} color="primary">
                Login
              </Heading>
            </Card>

            <Card width={256}>
              <Link href="/SignUp">
                {/* include link to login page */}
                <Image
                  sx={{
                    width: ["100%", "60%"],
                    borderRadius: 8
                  }}
                  src={signup_img}
                />
              </Link>
              <Heading fontSize={[5, 6, 5]} color="primary">
                Sign up
              </Heading>
            </Card>
          </Flex>
        </div>
        <p align="center">Copyright © 2020 FundOn</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
