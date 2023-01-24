import React from "react";
import { Flex, Text, Image, HStack } from "@chakra-ui/react";

export default function SideBar() {
  return (
    <Flex
      flexDirection={"column"}
      borderTopRightRadius="2xl"
      h={"600px"}
      w={["200px", "200px", "200px", "200px", "300px"]}
      bgGradient="linear(180deg, #0F151D 0%,#041B3E 100% )"
    >
      <HStack cursor="pointer" my="2" mx="4" px="2" py="2">
        <Image src="./assets/icons/category.svg" alt="category" />
        <Text color={"#FFFFFF"}>Categories</Text>
      </HStack>
      <HStack
        cursor="pointer"
        justifyContent={"space-between"}
        borderTopRightRadius="lg"
        my="2"
        mx="4"
        bg="#FFFFFF1A"
        py="2"
        px="4"
      >
        <Text color={"#FFFFFF"}>General</Text>
        <Image src="./assets/icons/arrow-top.svg" alt="arrow-top" />
      </HStack>
      <HStack
        cursor="pointer"
        my="2"
        mx="4"
        bg="#FFFFFF1A"
        py="2"
        justifyContent={"space-between"}
        borderTopRightRadius="lg"
        px="4"
      >
        <Text color={"#FFFFFF"}>SuiHive</Text>
        <Image src="./assets/icons/arrow-bottom.svg" alt="arrow-bottom" />
      </HStack>
      <HStack
        cursor="pointer"
        my="2"
        mx="4"
        bg="#FFFFFF1A"
        py="2"
        justifyContent={"space-between"}
        borderTopRightRadius="lg"
        px="4"
      >
        <Text color={"#FFFFFF"}>SuiGEEKS</Text>
        <Image src="./assets/icons/arrow-bottom.svg" alt="arrow-bottom" />
      </HStack>

      <HStack
        cursor="pointer"
        my="2"
        mx="4"
        bg="#FFFFFF1A"
        py="2"
        justifyContent={"space-between"}
        borderTopRightRadius="lg"
        px="4"
      >
        <Text color={"#FFFFFF"}>Feedback</Text>
        <Image src="./assets/icons/arrow-bottom.svg" alt="arrow-bottom" />
      </HStack>
    </Flex>
  );
}
