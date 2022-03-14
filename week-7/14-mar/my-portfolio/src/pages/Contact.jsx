import React from "react";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import AnimatedPage from "../partials/AnimatedPage";

function Contact() {
  return (
    <AnimatedPage>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Get in touch</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sunt blanditiis hic mollitia quisquam rerum porro a ullam quos,
            recusandae similique, quam minima esse, reprehenderit provident
            molestiae sapiente? Magni, a.
          </Text>
          <Button as="a" href="mailto:oscar@osuka.dev">
            oscar@osuka.dev
          </Button>
        </Stack>
      </Flex>
    </AnimatedPage>
  );
}

export default Contact;
