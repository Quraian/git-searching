import { FC } from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Colors } from "../Consts";
import { User } from "../models/user.model";

const UserCard: FC<Partial<User>> = ({ name, login, avatar_url, bio }) => (
  <Flex
    flexFlow="column"
    flexGrow={2}
    p={5}
    shadow="md"
    borderWidth="1px"
    rounded="md"
  >
    <Flex justifyContent="center" gap={2}>
      <Heading fontSize="xl">{name}</Heading>
      <Heading alignSelf="center" fontSize="md" color={Colors.DARK_GRAY}>
        {login}
      </Heading>
    </Flex>
    <Text fontSize="md" my={2}>
      {bio}
    </Text>
    <Image
      alignSelf="center"
      borderRadius="full"
      boxSize="150px"
      src={avatar_url}
      alt={name}
    />
  </Flex>
);

export default UserCard;
