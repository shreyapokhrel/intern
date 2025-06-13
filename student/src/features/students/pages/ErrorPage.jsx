import React from "react";
import { Title, Text, Container, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container>
      <Title order={1}> Page Not Found</Title>
      <Text>The page you are looking for does not exist.</Text>
      <Button component={Link} to="/" mt="md">
        Go to Home
      </Button>
    </Container>
  );
}
