import React, { Component }from "react";
import { Flex, Text, Box, Link, Heading, Card, Image, Button } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import Typist from "react-typist";
import signup_img from "../../signup.png";
import login from "../../login.png";
import logo from "../../logo.png";
import "../../App.css";

class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
                <Link href="/login">
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
                <Link href="/register">
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
                  Register
                </Heading>
              </Card>
            </Flex>
          </div>
          <p align="center">Copyright © 2020 FundOn</p>
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;