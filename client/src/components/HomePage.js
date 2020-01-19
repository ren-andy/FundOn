import React from "react";
import { Flex } from "rebass";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

export default function HomePage(prop) {
  return (
    <Box width={256}>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
        }}
      >
        <Image src={props.image} />
        <Box px={2}>
          <Heading as="h3">Card Demo</Heading>
          <Text fontSize={0}>You can edit this code</Text>
        </Box>
      </Card>
    </Box>
  );
}
