import {
  Flex,
  VStack,
  Spacer,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <VStack h="full">
      <Flex
        spacing="10px"
        w="full"
        flex="1"
        mt={[2, 2, 2, 8]}
        direction={["column", "column", "column", "row"]}
      >
        <Flex
          direction={"column"}
          justify={["flex-end", "flex-end", "flex-end", "flex-start"]}
          flex="1"
          textAlign={["center", "center", "center", "left"]}
        >
          <Heading
            as="h2"
            fontFamily="Cantarell"
            fontSize={["44px", "62px", "96px"]}
          >
            Welcome to
          </Heading>
          <Heading
            as="h1"
            fontSize={["56px", "82px", "96px", "118px"]}
            fontFamily="Zen Dots"
          >
            SuiHive
            <Text as="span" color="#FFCC16">
              .
            </Text>
          </Heading>
          <Heading
            color="#BFC7DC"
            as="h5"
            fontSize={["20px", "22px", "24px", "26px"]}
            fontFamily="Cantarell"
            my={["4", "4", "4", "0"]}
          >
            Open source crowdfunding platform powered by Sui.
          </Heading>
        </Flex>
        <Flex align={["flex-start"]} pos="relative" flex="1">
          <Box maxW={["100%", "lg", "xl", "xs"]} my={["6", "6", "0"]} mx="auto">
            <Text
              textAlign={["center", "center", "center", "left"]}
              bgGradient="linear(180deg, #6E94F4 0% , #8ba6eaad 100%)"
              bgClip="text"
              fontSize={["18px", "18px", "22px", "28px"]}
              fontFamily="Cantarell"
            >
              SuiHive is web3 grant decentralized application that allows the
              community to vote and fund open source public goods.
            </Text>
          </Box>
          <Heading
            display={["none", "none", "block"]}
            pos="absolute"
            top="10%"
            right="-720px"
            opacity="5%"
            fontSize="288px"
            translate="400px"
          >
            SuiHive
          </Heading>
        </Flex>
      </Flex>

      <Spacer display={["none", "none", "none", "block"]} />

      <Button
        onClick={() => {
          navigate("/grants");
        }}
      >
        Launch App
      </Button>
    </VStack>
  );
};

export default Landing;
