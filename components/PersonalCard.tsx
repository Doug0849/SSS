import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Spacer } from "@chakra-ui/react";
import { people } from "../models/peoplaData.js";

export default function PersonalCard() {
  const peopleData = people.map(person => {
    return (
      <Card
        key={person.id}
        flexGrow="1"
        w="28rem"
        minW="20rem"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        margin="0 auto 0 auto"
        mt="1rem"
        ms="1rem"
        me="1rem"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={person.image}
          alt="Avatar"
        />

        <Stack ms="5px">
          <CardBody p="0.5rem">
            <Heading size="md">{person.name}</Heading>
            <Text pt="2" h="70px" style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '3'
            }}>
              {person.bio}
            </Text>
          </CardBody>
          <CardFooter p="0.5rem">
            <Button variant="solid" colorScheme="blue">
              Detail
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    );
  })

  return (
  <>
  {peopleData}
  </>
  );
}
