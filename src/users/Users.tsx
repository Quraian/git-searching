import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";

import { User } from "../models";
import UserCard from "./UserCard";
import UserListItem from "./UserListItem";

const Users: FC<{
  users?: User[];
  isLoading: boolean;
}> = ({ users, isLoading }) => {
  const [selectedUser, setSelectedUser] = useState<User>();

  return (
    <>
      <Stack w="50%" maxW="50%" spacing={4}>
        {isLoading ? (
          <>
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
          </>
        ) : (
          users?.map((user) => (
            <Box key={user.id} p={1}>
              <UserListItem
                selected={user.id === selectedUser?.id}
                onUserSelect={() =>
                  setSelectedUser(users.find((u) => u.id === user.id))
                }
                {...user}
              ></UserListItem>
            </Box>
          ))
        )}
      </Stack>
      <Box w="50%" maxW="50%">
        {selectedUser && <UserCard {...selectedUser} />}
      </Box>
    </>
  );
};

export default Users;
