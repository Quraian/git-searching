import { FC } from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Colors } from "../Consts";
import { User } from "./user.model";

const UserCard: FC<Partial<User>> = ({
  name,
  username,
  image,
  description,
}) => (
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
        {username}
      </Heading>
    </Flex>
    <Text fontSize="md" my={2}>
      {description}
    </Text>
    <Image
      alignSelf="center"
      borderRadius="full"
      boxSize="150px"
      src={image}
      alt={name}
    />
  </Flex>
);

export default UserCard;
