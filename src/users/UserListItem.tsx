import { FC } from "react";
import { Flex, Avatar, Link, Box, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { User } from "./user.model";
import { Colors } from "../Consts";

const UserListItem: FC<User> = ({ name, username, url, avatar }) => (
  <Flex gap={2}>
    <Avatar name={name} src={avatar} size="sm" />
    <Flex flexFlow="column">
      <Flex gap={2}>
        <Link href={url} color="blue.500" isExternal>
          <Flex alignContent="center" gap="1">
            <Text fontSize="lg">{name}</Text>
            <Box alignSelf="center">
              <FaExternalLinkAlt size="10px" />
            </Box>
          </Flex>
        </Link>
        <Text fontSize="md" fontWeight={600} color={Colors.DARK_GRAY}>
          {username}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default UserListItem;
