import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <Box>
      <SimpleGrid
        spacingX={20}
        spacingY={10}
        templateColumns="repeat(auto-fill, minmax(327px, 1fr))"
      >
        <CardItem
          title="SuiPlace - A web3 based Fireplace for the Sui community."
          desc="Let us come together to build the Sui community."
          remainingDays="25"
          raisedAmount="2000"
          img="1"
        />
        <CardItem
          title="Web3 crash cource. Fund to be part of us."
          desc="This is the beginiing of the great stuff."
          remainingDays="184"
          raisedAmount="3000"
          img="2"
        />
        <CardItem
          title="First EV based blockchain project built by the people."
          desc="A unique Concept EV for everyday transport, leisure & Biking fun"
          remainingDays="184"
          raisedAmount="3000"
          img="3"
        />

        <CardItem
          title="Raising Capital for inhouse Ev Startup"
          desc="A unique Concept EV for everyday transport, leisure & Biking fun"
          remainingDays="184"
          raisedAmount="3000"
          img="4"
        />
        <CardItem
          title="AI will change the world, Blockchain will make it a better."
          desc="Fund a AI blockahin based builder on Sui network."
          remainingDays="184"
          raisedAmount="3000"
          img="5"
        />
        <CardItem
          title="Web3 or nothing!"
          desc="We are experimenting what the world will look on web3 with Sui leading the race."
          remainingDays="184"
          raisedAmount="3000"
          img="6"
        />
      </SimpleGrid>

      <Flex mt={10} mb={4} justify="center">
        <Button>See more Grants</Button>
      </Flex>
    </Box>
  );
};

export default Cards;
