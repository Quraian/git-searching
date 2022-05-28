import { Box, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { User } from "../models";
import UserCard from "./UserCard";
import UserListItem from "./UserListItem";

const Users: FC<{
  users?: User[];
  selectedUser?: User;
  onUserSelect: (id: number) => void;
}> = ({ users, selectedUser, onUserSelect }) => (
  <>
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
  </>
);

export default Users;
