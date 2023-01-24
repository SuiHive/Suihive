import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import ProposalCard from "../components/ProposalCard";

const Proposals = () => {
  return (
    <Container p={0}>
      <Flex justify="space-between" align="center">
        <Text
          bgGradient="linear(to-l, #7D8DA8 , #3B8FD3)"
          bgClip="text"
          fontSize="xl"
          fontWeight="bold"
        >
          3 Active Grants
        </Text>
        <Button>Submit a Proposal</Button>
      </Flex>
      <Box my={10}>
        <ProposalCard
          timeLeft="5d 20m 5s"
          desc="This is a test proposal. Voting will be live on mainnet."
          title="Deploy SuiHive on DevNet"
          status="In Progress"
        />
        <ProposalCard
          timeLeft="5d 20m 5s"
          desc="This is a test proposal. Voting will be live on mainnet."
          title="Deploy SuiHive on DevNet"
          status="Updated"
        />
        <ProposalCard
          timeLeft="Closed"
          desc="This is a test proposal. Voting will be live on mainnet."
          title="Deploy SuiHive on DevNet"
          status="Removed"
        />
      </Box>
    </Container>
  );
};

export default Proposals;
