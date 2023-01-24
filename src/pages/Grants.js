import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const Grants = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        my={4}
        direction={["column", "row"]}
        align="center"
        justify="space-between"
      >
        <Text
          bgGradient="linear(to-l, #7D8DA8 , #3B8FD3)"
          bgClip="text"
          fontSize="xl"
          fontWeight="bold"
        >
          3 Active Grants
        </Text>
        <Flex align="stretch">
          <Input
            border="1px"
            outline="none"
            borderColor="#DEDEDE"
            placeholder={"Search Grant"}
            size="md"
          />
          <Button
            onClick={() => {
              navigate("/create-grant");
            }}
            px={10}
            ml={[2, 4]}
            leftIcon={<AiOutlinePlus />}
          >
            Create Grant
          </Button>
        </Flex>
      </Flex>
      <Cards />
    </Box>
  );
};

export default Grants;
