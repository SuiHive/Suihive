import { Outlet } from "react-router-dom";
import { Flex, Container, useColorModeValue } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const bgColor = useColorModeValue(
    "whiteAlpha.50",
    "linear(90deg, #002952, #010203)"
  );
  return (
    <Flex
      position={["relative"]}
      direction="column"
      minHeight="100vh"
      bgGradient={bgColor}
    >
      <Header />

      <Flex overflow="hidden" align="stretch" flex="1" as="main">
        <Container my={["10px", "10px", "10px", "25px"]} maxW={["80em"]}>
          <Outlet />
        </Container>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Layout;
