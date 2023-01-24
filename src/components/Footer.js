import { Flex, HStack, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="center" p={["4", "6"]} as="footer">
      <HStack spacing={["26px", "40px"]}>
        <a href="https://github.com/suihive">
          <Image
            boxSize={["28px", "40px"]}
            src="./assets/icons/github.svg"
            alt="github"
          />
        </a>
        <a href="https://discord.com/SuiHive">
          <Image
            boxSize={["28px", "40px"]}
            src="./assets/icons/discord.svg"
            alt="discord"
          />
        </a>

        <a href=" https://twitter.com/SuiHivecom">
          <Image
            boxSize={["28px", "40px"]}
            src="./assets/icons/twitter.svg"
            alt="twitter"
          />
        </a>
        <a href="https://docs.SuiHive.com/">
          <Image
            boxSize={["28px", "40px"]}
            src="./assets/icons/gitbook.svg"
            alt="gitbook"
          />
        </a>
      </HStack>
    </Flex>
  );
};

export default Footer;
