import { FC } from "react";
import { Flex, Avatar, Link, Box, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { User as UserModel } from "./user.model";

const User: FC<UserModel> = ({ name, username, url, avatar, description }) => (
  <Flex gap={2}>
    <Avatar name={name} src={avatar} size="sm" />
    <Flex flexFlow="column">
      <Flex gap={2}>
        <Link href={url} color="rgb(9, 105, 218)" isExternal>
          <Flex alignContent="center" gap="1">
            <Text fontSize="lg">{name}</Text>{" "}
            <Box alignSelf="center">
              <FaExternalLinkAlt size="10px" />
            </Box>
          </Flex>
        </Link>
        <Text fontSize="md" fontWeight={600} color="rgb(87, 96, 106)">
          {username}
        </Text>
      </Flex>
      <Text fontSize="md">{description}</Text>
    </Flex>
  </Flex>
);

export default User;
