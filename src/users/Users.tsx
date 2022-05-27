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

import { Response, User } from "../models";
import UserCard from "./UserCard";
import UserListItem from "./UserListItem";

const Users = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [error, setError] = useState<{ message: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<Response<User>>();

  console.log({ data, selectedUser, selectedUserId });

  useEffect(() => {
    setSelectedUser(data?.items.find((u) => u.id === selectedUserId));
  }, [data?.items, selectedUserId]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
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
            {data?.items.map((user) => (
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
  }
};

export default Users;
