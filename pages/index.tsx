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
import IndexContain from "../components/IndexContain"
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Container w="100vw" maxW="100%" display="flex" justifyContent="flex-start">
        <IndexContain />
      </Container>
    </>
  );
};

export default Home;
