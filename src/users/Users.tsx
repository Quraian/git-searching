import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const users = [
  {
    name: "Mohammad AlQuraian",
    username: "Quraian",
    description: "Software Engineer .NET/Java/Angular/Ionic",
    avatar: "https://avatars.githubusercontent.com/u/66378240?s=80&v=4",
    url: "https://github.com/Quraian",
  },
  {
    name: "Mohammad AlQuraian",
    username: "Quraian2",
    description: "Software Engineer .NET/Java/Angular/Ionic",
    avatar: "https://avatars.githubusercontent.com/u/66378240?s=80&v=4",
    url: "https://github.com/Quraian",
  },
  {
    name: "Mohammad AlQuraian",
    username: "Quraian3",
    description: "Software Engineer .NET/Java/Angular/Ionic",
    avatar: "https://avatars.githubusercontent.com/u/66378240?s=80&v=4",
    url: "https://github.com/Quraian",
  },
];

const Users = () => {
  return (
    <Container maxW="100vw" centerContent>
      <Flex w="100%" padding="4" gap={2}>
        <FormControl>
          <FormLabel htmlFor="user-name">Search GitHub users</FormLabel>
          <Input id="user-name" placeholder="user name" autoFocus />
        </FormControl>
        <Button alignSelf="flex-end">Search</Button>
      </Flex>
      <Stack spacing={4}>
        {users.map(({ name, username, url, avatar, description }) => (
          <Flex key={username} gap={2}>
            <Avatar name={name} src={avatar} size="sm" />
            <Flex flexFlow="column">
              <Flex gap={2}>
                <Link href={url} color="rgb(9, 105, 218)" isExternal>
                  <Flex alignContent="center" gap="1">
                    <Text fontSize="lg">{name}</Text>{" "}
                    <Box alignSelf="center">
                      <FaExternalLinkAlt size="10px" />
                    </Box>
                  </Flex>
                </Link>
                <Text fontSize="md" fontWeight={600} color="rgb(87, 96, 106)">
                  {username}
                </Text>
              </Flex>
              <Text fontSize="md">{description}</Text>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Container>
  );
};

export default Users;
