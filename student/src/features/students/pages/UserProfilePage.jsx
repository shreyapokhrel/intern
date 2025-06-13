import { Group, Text } from "@mantine/core";

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) return null;

  return (
    <Group spacing="sm">
      <Text size="sm" fw={500}>
        {user.email}
      </Text>
    </Group>
  );
}
