import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Users from "./users/Users";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Stack p={3}>
        <Box as="header" px={5}>
          <Flex justifyContent="space-between">
            <Heading>Git Searching..</Heading>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Box>
        <Divider />
        <Users />
      </Stack>
    </Box>
  </ChakraProvider>
);
