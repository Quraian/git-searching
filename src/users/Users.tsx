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
} from "@chakra-ui/react";
import User from "./User";

import { users } from "./users.data";

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
      <Flex w="90%" gap={4}>
        <Stack spacing={4}>
          {users.map((user) => (
            <Box key={user.username}>
              <User {...user}></User>
              <Divider />
            </Box>
          ))}
        </Stack>
        <Box flexGrow={2} p={5} shadow="sm" borderWidth="1px">
          <Heading fontSize="xl">Mohammad AlQuraian</Heading>
          <Text mt={4}>Description</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Users;
