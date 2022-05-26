import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Users from "./users/Users";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        {/* <Container w="100%"> */}
        <Box as="header" px={5}>
          <Flex justifyContent="space-between">
            <Heading>Git Searching..</Heading>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Box>
        {/* </Container> */}
        <Users />
      </Grid>
    </Box>
    {/* <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20} flexFlow="row">
        <Users />
        <ColorModeSwitcher alignSelf="flex-end" />
      </Flex>
    </Container> */}
  </ChakraProvider>
);
