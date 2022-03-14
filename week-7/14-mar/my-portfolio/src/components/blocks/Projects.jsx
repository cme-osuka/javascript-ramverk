import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";


function Projects({ projects }) {
  return (
    <Box minHeight="60vh">
      <Heading>Projekt jag är stolt över</Heading>
      <Stack spacing="32px">
        {projects.map((project) => (
          <SimpleGrid key={project.id} columns={2}>
            <Image src={project.image} />
            <Box>
              <Heading>{project.title}</Heading>
              <Text>{project.description}</Text>
              <Button as={Link} to={`/projects/${project.id}`}>
                Läs mer
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;
