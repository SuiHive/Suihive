import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Box position="relative">
      {/* <Box
        position="fixed"
        display={["none", "none", "none", "block"]}
        bottom={"0"}
        left={"0"}
      >
        <SideBar />
      </Box> */}
      <Container maxW="container.sm">
        <Box mb={4}>
          <Text
            textAlign="center"
            bgGradient="linear(to-l, #7D8DA8 , #3B8FD3)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="bold"
          >
            FAQ
          </Text>
        </Box>

        <Accordion defaultIndex={[0]} allowMultiple>
          <Heading textAlign={"center"} my={4} fontSize="2xl">
            General
          </Heading>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    What is SuiHive
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                SuiHive is web3 grant application that allows the community to
                vote and fund open source public goods on Sui Blockchain
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    Why Sui Blockhain?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                Sui is a new Layer 1 blockchain built for safe development and
                good user experience. It was designed to provide safe, scalable,
                and upgradeable web3 infrastructure.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Heading textAlign={"center"} my={4} fontSize="2xl">
            SuiHive
          </Heading>

          <AccordionItem py={1.5}>
            <h2 py={1.5}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    Why should I fund a project on Sui?{" "}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                Individual contributions can have a significant impact on public
                goods and the Sui
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    How can I submit my Sui project on SuiHive?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                If you have a project on Sui blockchain, click “Create Grant” in
                the top left, and fill in the project details! Submissions at
                the end will be done via the "Submit Grant”.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    What percentage of donations goes to the project on SuiHive?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                100% of funds raised on SuiHive go directly to the project.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    How can I verify my project on SuiHive to proof the
                    legitimacy of my project?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                If you would like to apply to receive the 'Verified' badge, to
                prove your project's legitimacy and encourage more donations,
                fill out this{" "}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4GQhG28r1MwYWE7hk40HH7XzJdI1PadLDmOoK8Tb4-wxW4g/closedform">
                  <u>form</u>
                </a>
                .
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Heading textAlign={"center"} my={4} fontSize="2xl">
            Sui Geeks{" "}
          </Heading>

          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    What is Sui Geeks NFT?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                Sui Geeks is an NFT Collectible that enables the most active
                contributors and builders on SuiHive to vote for any platform
                upgrades and participate in curation and moderation.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    How do I get involved in governance?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                To earn the right to vote or to make a proposal, you must hold
                the governance nft.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    Is there a SuiHive Token?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                In the future, we will have a native token as a reward mechanism
                for donors who fund projects on SuiHive.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <Heading textAlign={"center"} my={4} fontSize="2xl">
            Feedback
          </Heading>

          <AccordionItem py={1.5}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading fontSize="lg" fontWeight="semibold">
                    I encountered an issue on SuiHive, who do I contact?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} mx={4}>
              <Text fontWeight="normal" opacity={0.8}>
                Please get in touch with the admins on Discord
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQ;
