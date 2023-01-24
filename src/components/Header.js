import {
  Flex,
  Box,
  Image,
  HStack,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  ModalOverlay,
  IconButton,
  useColorMode,
  useDisclosure,
  ModalHeader,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box>
      <Flex align="center" justify="space-between" px={["2", "4"]} as="header">
        <Box
          onClick={() => {
            navigate("/");
          }}
          cursor="pointer"
        >
          <Image
            width="62px"
            height="72px"
            src="./assets/icons/logo-text.png"
            alt="Logo"
          />
        </Box>
        <Box display={["none", "none", "block"]}>
          <Navigation />
        </Box>
        <HStack>
          {location.pathname !== "/" && (
            <Button onClick={onOpen}>Connect to a wallet</Button>
          )}
          <Button onClick={toggleColorMode}>
            <Image
              src={`./assets/icons/${
                colorMode === "light" ? "moon" : "sun"
              }.svg`}
              alt={colorMode === "light" ? "moon" : "sun"}
            />
          </Button>

          <IconButton
            display={["flex", "flex", "none"]}
            onClick={onOpenDrawer}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5027 12.0001C18.5027 12.2764 18.2788 12.5003 18.0025 12.5003C17.7263 12.5003 17.5023 12.2764 17.5023 12.0001C17.5023 11.7239 17.7263 11.4999 18.0025 11.4999C18.2788 11.4999 18.5027 11.7239 18.5027 12.0001"
                  stroke="#3D8DFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5002 12.0001C12.5002 12.2764 12.2763 12.5003 12 12.5003C11.7238 12.5003 11.4998 12.2764 11.4998 12.0001C11.4998 11.7239 11.7238 11.4999 12 11.4999C12.2763 11.4999 12.5002 11.7239 12.5002 12.0001"
                  stroke="#3D8DFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.49773 12.0001C6.49773 12.2764 6.27378 12.5003 5.99752 12.5003C5.72127 12.5003 5.49731 12.2764 5.49731 12.0001C5.49731 11.7239 5.72127 11.4999 5.99752 11.4999C6.27378 11.4999 6.49773 11.7239 6.49773 12.0001"
                  stroke="#3D8DFF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </HStack>
      </Flex>

      <Box display={["block", "block", "none"]}>
        <Drawer isOpen={isOpenDrawer} placement="right" onClose={onCloseDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>SuiHive</DrawerHeader>

            <DrawerBody>
              <Navigation onClick={onCloseDrawer} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={["xs", "md"]}>
        <ModalOverlay />
        <ModalContent
          borderRadius="2xl"
          mx="4"
          bgGradient="linear(180deg, #101419 0% , #031C41 100%)"
        >
          <ModalHeader mt={4}>
            <Heading
              textAlign="center"
              as="h3"
              color="#FFFFFF"
              fontWeight={500}
              fontSize="md"
            >
              Connect to wallet
            </Heading>
          </ModalHeader>
          <ModalCloseButton mr={2} mt={4} color="#FFFFFF" />
          <ModalBody color="#FFFFFF" px={[4, 10]}>
            <Flex
              my={5}
              cursor="pointer"
              align="center"
              justify="space-between"
            >
              <Text>Sui Wallet</Text>
              <Image src="./assets/icons/suiwallet.svg" alt="suiwallet" />
            </Flex>
            <Flex
              my={5}
              cursor="pointer"
              align="center"
              justify="space-between"
            >
              <Text>Suiet</Text>
              <Image src="./assets/icons/suiet.svg" alt="suiet" />
            </Flex>
            <Flex
              my={5}
              cursor="pointer"
              align="center"
              justify="space-between"
            >
              <Text>Ethos Wallet</Text>
              <Image src="./assets/icons/ethos.svg" alt="ethos" />
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Image src="./assets/icons/logo.png" alt="logo" w="24" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
