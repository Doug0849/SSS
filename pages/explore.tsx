import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import react from "react";
import PersonalCard from "../components/PersonalCard";

const Expolore: NextPage = () => {
  return (
    <>
      <Flex w="100%" wrap="wrap" justifyContent="flex-start" textAlign="left">
        <PersonalCard />
        <PersonalCard />
        <PersonalCard />
        <PersonalCard />
        <PersonalCard />
      </Flex>
    </>
  );
};

export default Expolore;
