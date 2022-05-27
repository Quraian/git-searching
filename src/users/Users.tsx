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
import { FC } from "react";

import { User } from "../models";
import UserCard from "./UserCard";
import UserListItem from "./UserListItem";

const Users: FC<{
  users?: User[];
  selectedUser?: User;
  onUserSelect: (id: number) => void;
}> = ({ users, selectedUser, onUserSelect }) => (
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
        {users?.map((user) => (
          <Box key={user.id} p={1}>
            <UserListItem
              selected={user.id === selectedUser?.id}
              onUserSelect={() => onUserSelect(user.id)}
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

export default Users;
