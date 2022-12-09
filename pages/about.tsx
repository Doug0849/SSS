import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import react from "react";
import PersonalCard from "../components/PersonalCard";

const Expolore: NextPage = () => {
  return (
    <Flex w="100%" justifyContent='center'>
        <Image w="60%" src="/imgs/about.png" alt="About" />
    </Flex>
  );
};

export default Expolore;
