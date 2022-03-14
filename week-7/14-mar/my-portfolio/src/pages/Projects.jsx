import React from "react";
import ProjectsBlock from "./../components/blocks/Projects";
import { Container, Heading } from "@chakra-ui/react";
import { projectsState } from "./../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";
import { Link } from "react-router-dom";

function Projects() {
  const projects = useRecoilValue(projectsState);

  return (
    <AnimatedPage>
      <Heading>Mina projekt</Heading>
      <ProjectsBlock projects={projects} />
    </AnimatedPage>
  );
}

export default Projects;
