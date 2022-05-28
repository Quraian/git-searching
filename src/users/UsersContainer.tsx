import { ChangeEvent, useEffect, useState, ChangeEventHandler } from "react";
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
} from "@chakra-ui/react";
import { Defaults } from "../Consts";

const UsersContainer = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [error, setError] = useState<{ message: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Response<User>>();

  const [query, setQuery] = useState("");

  useEffect(() => {
    setSelectedUser(data?.items.find((u) => u.id === selectedUserId));
  }, [data?.items, selectedUserId]);

  // useEffect(() => {
  //   fetch(
  //     "/users?" +
  //       new URLSearchParams({
  //         page: page.toString(),
  //         per_page: Defaults.PER_PAGE.toString(),
  //         q: query,
  //       }).toString()
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setData(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, [page, query]);

  const handlePageChange = (_: ChangeEvent<unknown>, p: number) => {
    console.log({ p });

    setPage(p);
    handleClick();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };
  // const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   console.log(e.currentTarget.value);
  // };

  const handleClick = () => {
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
  };

  const renderUsers = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      const pagesCount =
        (data && Math.ceil(data?.total_count / Defaults.PER_PAGE)) || 0;

      return (
        <>
          <Flex p={2}>
            <Pagination
              count={pagesCount}
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
            autoFocus
          />
        </FormControl>
        <Button alignSelf="flex-end" onClick={handleClick}>
          Search
        </Button>
      </Flex>
      {data?.items && renderUsers()}
    </Container>
  );
};

export default UsersContainer;
