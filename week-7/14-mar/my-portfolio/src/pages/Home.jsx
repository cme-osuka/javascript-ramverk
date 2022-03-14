import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import ProjectsBlock from "./../components/blocks/Projects";
import { projectsState } from "./../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";


function Home() {
  const projects = useRecoilValue(projectsState);

  return (
    <AnimatedPage>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Oscar Nilsson</Heading>

          <Heading>Full-stack developer</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sunt blanditiis hic mollitia quisquam rerum porro a ullam quos,
            recusandae similique, quam minima esse, reprehenderit provident
            molestiae sapiente? Magni, a.
          </Text>
          <Button as={Link} to="/projects">
            Kolla in mina projekt
          </Button>
        </Stack>
      </Flex>

      <ProjectsBlock projects={projects} />
    </AnimatedPage>
  );
}

export default Home;
