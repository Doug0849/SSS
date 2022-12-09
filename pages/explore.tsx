import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import react from "react";
import PersonalCard from "../components/PersonalCard";

const Expolore: NextPage = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="auto" wrap="wrap" justifyContent="flex-start" flexGrow="1">
        <PersonalCard />
      </Flex>
    </Flex>
  );
};

export default Expolore;
