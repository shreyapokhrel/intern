import React from "react";
import { Title, Text, Container, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Title order={1}>Page Not Found</Title>
      <Text mt="sm" mb="md">
        The page you are looking for does not exist.
      </Text>
      <Button component={Link} to="/" mt="md">
        Go to Home
      </Button>
    </Container>
  );
}
