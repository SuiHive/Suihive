import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProposalCard = ({ timeLeft, desc, title, status }) => {
  return (
    <Card my={4} p={0} bg={timeLeft === "Closed" ? "#FFFFFF" : "#000613"}>
      <CardHeader
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack align="center">
          <VStack color="#666A71">
            <Text>3</Text>
            <Text mt="0px">Jan</Text>
          </VStack>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Heading
            color={timeLeft === "Closed" ? "#000000" : "#FFFFFF"}
            fontWeight="medium"
            fontSize={["base", "xl"]}
          >
            {title}
          </Heading>
        </HStack>
        <Box
          p={1}
          rounded="md"
          bg={(() => {
            if (status === "In Progress") {
              return "#66204A";
            }
            if (status === "Updated") {
              return "#1c3971";
            }
            if (status === "Removed") {
              return "#FFB5B5";
            }
          })()}
        >
          <Text
            textAlign="center"
            color={(() => {
              if (status === "In Progress") {
                return "#FF459E";
              }
              if (status === "Updated") {
                return "#268df3";
              }
              if (status === "Removed") {
                return "#FF4545";
              }
            })()}
          >
            {status}
          </Text>
        </Box>
      </CardHeader>
      <Divider borderColor="#cdd6dad9" orientation="horizontal" />

      <CardBody>
        <Text color="#666A71" textAlign="center">
          {desc}
        </Text>
        <Text color={timeLeft === "Closed" ? "#000000" : "#FFFFFF"}>
          {timeLeft}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProposalCard;
