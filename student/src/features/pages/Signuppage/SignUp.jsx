import {
  Button,
  TextInput,
  Paper,
  Title,
  Container,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      alert("User already exists with this email!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify({ email, password }));
    setIsLoggedIn(true);
    alert("User registered successfully!");

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/login");
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Student Management Sign Up</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            mt="md"
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            mt="md"
          />
          <Button fullWidth mt="xl" type="submit">
            Sign Up
          </Button>
        </form>
        <Text align="center" mt="md" size="sm">
          Already have an account? <Link to="/login">Login</Link>
        </Text>
      </Paper>
    </Container>
  );
}
