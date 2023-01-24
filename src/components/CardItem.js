import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Divider,
  CardFooter,
  Flex,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

const CardItem = ({ title, desc, raisedAmount, remainingDays, img }) => {
  return (
    <Card
      cursor="pointer"
      borderBottom
      borderBottomWidth="8px"
      borderBottomColor="#364C6FCC"
      overflow="hidden"
      borderRadius="8px"
    >
      <CardHeader p="0">
        <Image
          h="138px"
          w="full"
          objectFit="cover"
          src={`./assets/images/${img}.png`}
          alt={img}
        />
      </CardHeader>
      <CardBody px="20px" py="10px">
        <Flex>
          <Heading as="h3" fontWeight={600} fontSize="xl">
            {title}
          </Heading>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53977 10.4602 9.16668 10 9.16668C9.53977 9.16668 9.16667 9.53977 9.16667 10C9.16667 10.4602 9.53977 10.8333 10 10.8333Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 5.00001C10.4602 5.00001 10.8333 4.62691 10.8333 4.16668C10.8333 3.70644 10.4602 3.33334 10 3.33334C9.53977 3.33334 9.16667 3.70644 9.16667 4.16668C9.16667 4.62691 9.53977 5.00001 10 5.00001Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 10 15C9.53977 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53977 16.6667 10 16.6667Z"
              stroke="#98A2B3"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Flex>
        <Text as="p" mt={1} color="#219653">
          {desc}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter flexDirection="column" px="20px" py="10px">
        <Flex w="full" justify="space-between">
          <Box>
            <Text fontWeight={500} fontSize="lg">
              <Text as="span" color="#7CAA7C">
                Target
              </Text>{" "}
              <Text as="span">$5000</Text>
            </Text>
          </Box>
          <Box>
            <Text fontWeight={500} fontSize="lg">
              <Text as="span" color="#9EAEC8">
                Contributors
              </Text>{" "}
              <Text as="span">15</Text>
            </Text>
          </Box>
        </Flex>
        <Flex w="full" align="center" mt={1} justify="space-between">
          <Flex flex="1" spacing={4} align="center">
            <Box bg="#1082ED" borderRadius="md" py="0.5" px="2">
              <Text
                as="p"
                color="#ffffff"
                fontWeight="semibold"
                fontSize="14px"
              >
                Donate
              </Text>
            </Box>
            <Text ml={1} color="#9EAEC8" fontWeight={600} fontSize="md">
              ${raisedAmount}
            </Text>
          </Flex>
          <Box flex="1" textAlign="right">
            <Text color="#9EAEC8" fontWeight={500} fontSize="sm">
              Remaning Days {remainingDays}
            </Text>
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
