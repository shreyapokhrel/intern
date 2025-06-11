import {
  Button,
  TextInput,
  Paper,
  Title,
  Container,
  PasswordInput,
  Text,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login} from "../../../stores/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setIsLoggedIn(true);
        dispatch(login());
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setEmail("");
        setPassword("");
        setError("");
        setLoading(false);
        navigate("/students");
      } else {
        setLoading(false);
        setError("Invalid email or password");
      }
    }, 3000);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Student Management Login</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <PasswordInput
            label="Password"
            placeholder="admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            mt="md"
            disabled={loading}
          />
          {error && (
            <Text color="red" size="sm" mt="sm" align="center">
              {error}
            </Text>
          )}
          <Button fullWidth mt="xl" type="submit" disabled={loading}>
            {loading ? <Loader size="xs" color="white" /> : "Login"}
          </Button>
        </form>
        <Text align="center" mt="md" size="sm">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Text>
      </Paper>
    </Container>
  );
}
