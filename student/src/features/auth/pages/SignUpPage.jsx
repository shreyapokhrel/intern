import React, { useState } from "react";
import {
  Button,
  TextInput,
  Paper,
  Title,
  Container,
  PasswordInput,
  Text,
  ThemeIcon,
  Group,
  Progress,
  Box,
  Center,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate, Link } from "react-router-dom";
import { signUpSchema } from "../schemas";

function PasswordRequirement({ meets, label }) {
  return (
    <Text component="div" color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IconCheck size={14} stroke={1.5} />
        ) : (
          <IconX size={14} stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const passwordRequirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getPasswordStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(
    100 - (100 / (passwordRequirements.length + 1)) * multiplier,
    0
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(signUpSchema),
    validateInputOnChange: true,
  });

  const handleSubmit = (values) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === values.email)) {
      alert("User already exists with this email!");
      return;
    }

    users.push({ email: values.email, password: values.password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(values));

    alert("User registered successfully!");
    form.reset();
    setPassword("");
    setEmail("");
    navigate("/login");
  };

  const strength = getPasswordStrength(password);
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        key={index}
        size={4}
        styles={{ section: { transitionDuration: "0ms" } }}
        value={
          password.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
      />
    ));

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Container size={420} my={40}>
      <Title align="center">Student Management Sign Up</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            withAsterisk
            {...form.getInputProps("email")}
            value={email}
            onChange={(event) => {
              const val = event.currentTarget.value;
              setEmail(val);
              form.setFieldValue("email", val);
            }}
          />
          {email.length > 0 && (
            <Text size="xs" mt={5} color={isValidEmail ? "green" : "red"}>
              <ThemeIcon
                color={isValidEmail ? "teal" : "red"}
                size={16}
                radius="xl"
                mr={5}
              >
                {isValidEmail ? <IconCheck size={12} /> : <IconX size={12} />}
              </ThemeIcon>
              {isValidEmail ? "Valid email address" : "Invalid email format"}
            </Text>
          )}

          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
            value={password}
            onChange={(event) => {
              const val = event.currentTarget.value;
              setPassword(val);
              form.setFieldValue("password", val);
            }}
          />

          <Group gap={5} grow mt="xs" mb="md">
            {bars}
          </Group>

          <PasswordRequirement
            label="Has at least 6 characters"
            meets={password.length > 5}
          />

          {passwordRequirements.map((req, index) => (
            <PasswordRequirement
              key={index}
              label={req.label}
              meets={req.re.test(password)}
            />
          ))}

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            mt="md"
            {...form.getInputProps("confirmPassword")}
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
