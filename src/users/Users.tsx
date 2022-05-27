import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { User } from "./user.model";
import UserCard from "./UserCard";
import UserListItem from "./UserListItem";
import { users } from "./users.data";

const Users = () => {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    setSelectedUser(users.find((u) => u.id === selectedUserId));
  }, [selectedUserId]);

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
        <Stack w="50%" maxW="50%" spacing={4}>
          {users.map((user) => (
            <Box key={user.id} p={1}>
              <UserListItem
                selected={user.id === selectedUserId}
                onUserSelect={() => setSelectedUserId(user.id)}
                {...user}
              ></UserListItem>
            </Box>
          ))}
        </Stack>
        <Box w="50%" maxW="50%">
          {selectedUser && <UserCard {...selectedUser} />}
        </Box>
      </Flex>
    </Container>
  );
};

export default Users;
