import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Colors } from "../Consts";
import UserListItem from "./UserListItem";

import { users } from "./users.data";

const Users = () => {
  return (
    <Container maxW="100vw" centerContent>
      <Flex w="100%" padding="4" gap={2}>
        <FormControl>
          <FormLabel htmlFor="user-name">Search GitHub users</FormLabel>
          <Input id="user-name" placeholder="username" autoFocus />
        </FormControl>
        <Button alignSelf="flex-end">Search</Button>
      </Flex>
      <Flex w="90%" gap={4}>
        <Stack spacing={4}>
          {users.map((user) => (
            <Box key={user.username} p={1}>
              <UserListItem {...user}></UserListItem>
              <Divider mt={2} />
            </Box>
          ))}
        </Stack>
        <Flex
          flexFlow="column"
          flexGrow={2}
          p={5}
          shadow="sm"
          borderWidth="1px"
        >
          <Flex justifyContent="center" gap={2}>
            <Heading fontSize="xl">Mohammad AlQuraian</Heading>
            <Heading alignSelf="center" fontSize="md" color={Colors.DARK_GRAY}>
              Quraian
            </Heading>
          </Flex>
          <Text fontSize="md" my={2}>
            Software Engineer .NET/Java/Angular/Ionic
          </Text>
          <Image
            alignSelf="center"
            borderRadius="full"
            boxSize="150px"
            src="https://avatars.githubusercontent.com/u/66378240?v=4"
            alt="Mohammad AlQuraian"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Users;
