import { Flex, VStack, Box, Heading, Text, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack h="full" my={10}>
      <Box>
        <Heading fontSize={"4xl"} mb="4">
          About
        </Heading>
        <Flex
          spacing="10px"
          w="full"
          flex="1"
          direction={["column", "column", "column", "row"]}
        >
          <Flex
            flex={"1"}
            align={["flex-end", "flex-end", "flex-end", "flex-start"]}
            textAlign="left"
          >
            <Text
              marginX="auto"
              maxW={["100%", "lg", "xl"]}
              textAlign={["left"]}
              bgGradient="linear(180deg, #6E94F4 0% , #8ba6eaad 100%)"
              bgClip="text"
              fontSize={["26px", "32px", "36px", "36px"]}
              fontFamily="Cantarell"
            >
              SuiHive was created for developers building to not only improve
              the Sui network but to also attract more users to its ecosystem.
            </Text>
          </Flex>
          <Flex pos="relative" mt={[10, 10, 10, 0]} flex={"1"}>
            <Box maxW={["100%", "lg", "xl", "xl"]} mx="auto">
              <Text
                textAlign={["left"]}
                bgGradient="linear(180deg, #6E94F4 0% , #8ba6eaad 100%)"
                bgClip="text"
                fontSize={["24px", "30px", "30px", "30px"]}
                fontFamily="Cantarell"
              >
                Influenced by our official NFT SuiGeeks, we have put the control
                of the dapp in the hands of the community where they carry out a
                consensus and contribute to eligible open source projects that
                have great impacts on our modern day society.
              </Text>
            </Box>
            <Heading
              display={["none", "none", "block"]}
              pos="absolute"
              bottom="5%"
              right="-720px"
              opacity="5%"
              fontSize="288px"
              translate="400px"
            >
              SuiHive
            </Heading>
          </Flex>
        </Flex>
      </Box>
      <Image
        position="absolute"
        left="0"
        zIndex="0"
        bottom="10%"
        w={40}
        src="./assets/icons/eclipse.svg"
        alt="eclipse"
      />
    </VStack>
  );
};

export default About;
