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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../stores/authSlice";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "../../../constants/common";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/students");
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to="/students" replace />;
  }

  const handleSubmit = ({ email, password }) => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        dispatch(login());
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setLoading(false);
        navigate("/students");
      } else {
        setLoading(false);
        setError("Invalid email or password");
      }
    }, 1500);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Student Management Login</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="admin@gmail.com"
            withAsterisk
            disabled={loading}
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Admin123"
            withAsterisk
            mt="md"
            disabled={loading}
            {...form.getInputProps("password")}
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
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </Text>
      </Paper>
    </Container>
  );
}
