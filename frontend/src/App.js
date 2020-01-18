import React from "react";
import { Text, Flex, Box, Link, Heading, Card, Image } from "rebass";
import logo from "./logo.svg";
import "./App.css";

import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
// export default props =>
//   <ThemeProvider theme={theme}>
//     {props.children}
//   </ThemeProvider>

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Flex px={2} color="black" bg="white" alignItems="center">
          <Text p={2} fontSize={[3, 4, 2]} fontWeight="bold">
            FundOn
          </Text>
          <Box mx="auto" />
          <Link fontSize={[3, 4, 2]} variant="nav" href="#login">
            Login
          </Link>
        </Flex>
        <header className="App-header">
          <Text
            fontFamily="monospace"
            fontSize={[4, 5]}
            fontWeight="bold"
            lineHeight="body"
          >
            Hello.
          </Text>
          <Flex mx={-2}>
            <Card width={256}>
              <Image src={logo} />
              <Heading>Students</Heading>
            </Card>
            <Card width={256}>
              <Image src={logo} />
              <Heading>Startups</Heading>
            </Card>
          </Flex>
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
