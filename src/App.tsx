import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Divider,
  Stack,
} from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import UsersContainer from "./users/UsersContainer";

export const App = () => (
  <ThemeProvider theme={createTheme()}>
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
          <UsersContainer />
        </Stack>
      </Box>
    </ChakraProvider>
  </ThemeProvider>
);
