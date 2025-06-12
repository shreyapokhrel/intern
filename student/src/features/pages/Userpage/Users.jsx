import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../../stores/userSlice";
import { Card, Text, Container, Loader } from "@mantine/core";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users) || [];
console.log ("Users from redux:",users);
  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: "Max", email: "max@gmail.com" },
        { id: 2, name: "Bob", email: "bob@gmail.com" },
      ];
      dispatch(setUsers(mockData));
    }, 1000);
  }, [dispatch]);

  return (
    <Container>
      <Text size="xl" fw={700} mb="md">
        Users:
      </Text>

      {users.length === 0 ? (
        <Loader />
      ) : (
        users.map((user) => (
          <Card key={user.id} shadow="sm" padding="md" radius="md" withBorder mb="sm">
            <Text fw={500}>{user.name}</Text>
            <Text size="sm" c="dimmed">
              {user.email}
            </Text>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Users;
