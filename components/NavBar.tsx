/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Icon,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SiderBar from "./SiderBar";
import useBalanceOf from "../hooks/myToken/useBalanceOf"
import useIncreaseAllowance from "../hooks/myToken/useIncreaseAllowance";
import usePaidMint from "../hooks/myToken/usePaidMint";
import useFreeMint from "../hooks/myToken/useFreeMint";

const Links = ["ABOUT", "EXPLORE", "SEARCH"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children?.toString().toLowerCase()}
    fontSize="18px"
    fontWeight={700}
  >
    {children}
  </Link>
);

export default function withAction() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ sssToken, setSssToken ] = useState(0)
  const [ amount, setAmount ] = useState(1)
  const [ mintStatus, setMintStatus ] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { increaseAllowance, increaseStatus } = useIncreaseAllowance(amount);

  const sssBalance: number = useBalanceOf()
  const { paidiMint, paidMintStatus } = usePaidMint(amount);
  const { freeMint, status } = useFreeMint(amount);
  const toast = useToast();

  useEffect(() => {
    setSssToken(sssBalance);
  }, [sssBalance]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            {/* Logo */}
            <Box>
              <Link href="/">
                <Image h="10" src="/imgs/logo/NavLogo.png" alt="logo" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Text me="3" fontSize="20px" fontWeight="800">
              SSS Token: {sssToken}
            </Text>
            <Box w="30px" me="3">
              <Image src="/imgs/coinIcon.png" alt="icon" />
            </Box>
            <Button colorScheme="purple" variant="solid" me="3">
              <Link href="/register">Be Perfessional</Link>
            </Button>
            <Button onClick={onOpen} colorScheme="pink" variant="solid" me="3">
              Top up
            </Button>
            <Button onClick={async () => {
                let freeMintTx = await freeMint?.();
                await freeMintTx?.wait();
                toast({
                  title: "Swap Success!",
                  description: "Function: Mint",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });}}
                colorScheme="green"
                variant="solid"
                me="3">
              Free 1 Token
            </Button>
            <ConnectButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Swap SSS Token</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>1 SSS token = 0.1 ETH</Text>
            <Text>How much Token do you want to swap ?</Text>
            <NumberInput
              mt={2}
              mb={2}
              onChange={(v: number) => setAmount(v)}
              value={amount}
              min={1}
              max={5000}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Text>Confirm to swarp {amount} SSS token ?</Text>
            <pre>Status: {mintStatus || increaseStatus}</pre>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mt={5}
              onClick={async () => {
                let paidiMintTx = await paidiMint?.();
                await paidiMintTx?.wait();
                toast({
                  title: "Swap Success!",
                  description: "Function: Mint",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });

                let increaseAllowanceTx = await increaseAllowance?.();
                await increaseAllowanceTx?.wait();
                toast({
                  title: "Increase Allowance Success!",
                  description: "Function: increaseAllowance",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
                {
                  onClose();
                }
              }}
            >
              Swap Token
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
