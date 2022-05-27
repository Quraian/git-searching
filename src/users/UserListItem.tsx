import { FC } from "react";
import { Flex, Avatar, Link, Box, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { User } from "../models/user.model";
import { Colors } from "../Consts";

const UserListItem: FC<
  User & { selected?: boolean; onUserSelect: () => void }
> = ({ login, html_url, avatar_url, selected, onUserSelect }) => {
  return (
    <Box
      maxW="sm"
      p="2"
      borderWidth="1px"
      rounded="md"
      bg={selected ? "blackAlpha.100" : "#fff"}
      onClick={onUserSelect}
      _hover={{ cursor: "pointer" }}
    >
      <Flex gap={2}>
        <Avatar name={html_url} src={avatar_url} size="sm" />
        <Flex flexFlow="column">
          <Flex gap={2}>
            <Link href={html_url} color="blue.500" isExternal>
              <Flex alignContent="center" gap="1">
                <Text fontSize="lg">{login}</Text>
                <Box alignSelf="center">
                  <FaExternalLinkAlt size="10px" />
                </Box>
              </Flex>
            </Link>
            <Text fontSize="md" fontWeight={600} color={Colors.DARK_GRAY}>
              {login}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserListItem;
