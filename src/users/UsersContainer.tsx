import {
  ChangeEvent,
  useEffect,
  useState,
  ChangeEventHandler,
  KeyboardEventHandler,
} from "react";
import { Pagination } from "@mui/material";

import { Response, User } from "../models";
import Users from "./Users";
import {
  Flex,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { Defaults } from "../Consts";

const UsersContainer = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [error, setError] = useState<{ message: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Response<User>>();

  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSelectedUser(data?.items.find((u) => u.id === selectedUserId));
  }, [data?.items, selectedUserId]);

  const handlePageChange = (_: ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  };

  const handleSearchClick = () => {
    setQuery(inputValue);
  };

  useEffect(() => {
    console.log({ page, query });

    if (!!query) {
      setIsLoading(true);
      // https://api.github.com/search/users
      fetch(
        "/users?" +
          new URLSearchParams({
            page: page.toString(),
            per_page: Defaults.PER_PAGE.toString(),
            q: query,
          }).toString()
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoading(false);
            setData(result);
          },
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        );
    }
  }, [page, query]);

  const renderUsers = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else if (!!data?.items.length) {
      const totalNumberOfPages =
        (data && Math.ceil(data?.total_count / Defaults.PER_PAGE)) || 0;

      return (
        <>
          <Flex p={2}>
            <Pagination
              count={totalNumberOfPages}
              page={page}
              onChange={handlePageChange}
            />
          </Flex>
          <Flex w="90%" gap={4}>
            <Users
              users={data?.items}
              onUserSelect={(id) => setSelectedUserId(id)}
              selectedUser={selectedUser}
            />
          </Flex>
        </>
      );
    }
  };

  return (
    <Container maxW="100vw" centerContent>
      <Flex w="100%" p={4} gap={2}>
        <FormControl>
          <FormLabel htmlFor="user-name">Search GitHub users</FormLabel>
          <Input
            id="user-name"
            placeholder="username"
            onChange={handleInputChange}
            onKeyDown={handleInputKeydown}
            autoFocus
          />
        </FormControl>
        <Button
          alignSelf="flex-end"
          onClick={handleSearchClick}
          disabled={!inputValue}
        >
          Search
        </Button>
      </Flex>
      {renderUsers()}
    </Container>
  );
};

export default UsersContainer;
