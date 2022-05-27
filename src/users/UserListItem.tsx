import { FC } from "react";
import { Flex, Avatar, Link, Box, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { User } from "./user.model";
import { Colors } from "../Consts";

const UserListItem: FC<
  User & { selected?: boolean; onUserSelect: () => void }
> = ({ name, login, html_url, avatar, selected, onUserSelect }) => {
  return (
    <Box
      maxW="sm"
      p="5"
      borderWidth="1px"
      rounded="md"
      bg={selected ? "blackAlpha.100" : "#fff"}
      onClick={onUserSelect}
      _hover={{ cursor: "pointer" }}
    >
      <Flex gap={2}>
        <Avatar name={name} src={avatar} size="sm" />
        <Flex flexFlow="column">
          <Flex gap={2}>
            <Link href={html_url} color="blue.500" isExternal>
              <Flex alignContent="center" gap="1">
                <Text fontSize="lg">{name}</Text>
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
