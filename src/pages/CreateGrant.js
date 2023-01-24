import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateGrant = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={["xs", "sm"]}>
        <ModalOverlay />
        <ModalContent
          borderRadius="2xl"
          mx="4"
          bgGradient="linear(180deg, #101419 0% , #031C41 100%)"
        >
          <ModalCloseButton
            onClick={() => {
              navigate("/grants");
            }}
            mr={2}
            mt={4}
            color="#FFFFFF"
          />
          <ModalBody mt={36} mb={14} px={[4, 10, 20]}>
            <Text
              color="#FFFFFF"
              textAlign="center"
              fontSize="xl"
              fontWeight={500}
            >
              Creating new grant is not available now please check back later.
            </Text>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Image src="./assets/icons/logo.png" alt="logo" w="24" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreateGrant;
