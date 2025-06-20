import { Box, Button, Group, Stack, Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        backgroundColor: "#1e3a8a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Stack
        spacing="lg"
        align="center"
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        <Title
          order={1}
          style={{
            fontSize: 48,
            color: "white",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          📚 Student Management System
        </Title>

        <Group spacing="md">
          <Button
            variant="white"
            color="blue"
            onClick={() => navigate("/about")}
          >
            About Us
          </Button>
          <Button
            variant="white"
            color="blue"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="white"
            color="blue"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          <Button
            variant="white"
            color="blue"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
