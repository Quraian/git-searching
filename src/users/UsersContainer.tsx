import { useEffect, useState } from "react";

import { Response, User } from "../models";
import Users from "./Users";

const UsersContainer = () => {
  const [selectedUserId, setSelectedUserId] = useState<number>();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [error, setError] = useState<{ message: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<Response<User>>();

  useEffect(() => {
    setSelectedUser(data?.items.find((u) => u.id === selectedUserId));
  }, [data?.items, selectedUserId]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Users
        users={data?.items}
        onUserSelect={(id) => setSelectedUserId(id)}
        selectedUser={selectedUser}
      />
    );
  }
};

export default UsersContainer;
