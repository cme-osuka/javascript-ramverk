import React, { useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageMotion = {
  first: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 10, transition: { duration: 1 } },
  exit: { opacity: 0, x: 0, transition: { duration: 1 } },
};

function AnimatedPage({ children }) {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <Container
      as={motion.div}
      initial="first"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      maxWidth="container.lg"
    >
      {children}
    </Container>
  );
}

export default AnimatedPage;
