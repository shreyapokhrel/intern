import {
  Button,
  TextInput,
  Paper,
  Title,
  Container,
  PasswordInput,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate, Link } from "react-router-dom";
import { signUpSchema } from "../schemas";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
    navigate("/login");
  };

  const isMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
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

          <List mt="xs" spacing="xs" size="sm">
            {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
              <>
                <List.Item
                  icon={
                    <ThemeIcon
                      color={email.includes("@") ? "teal" : "red"}
                      size={20}
                      radius="xl"
                    >
                      {email.includes("@") ? (
                        <IconCheck size={14} />
                      ) : (
                        <IconX size={14} />
                      )}
                    </ThemeIcon>
                  }
                >
                  Must include '@'
                </List.Item>

                <List.Item
                  icon={
                    <ThemeIcon
                      color={email.includes(".") ? "teal" : "red"}
                      size={20}
                      radius="xl"
                    >
                      {email.includes(".") ? (
                        <IconCheck size={14} />
                      ) : (
                        <IconX size={14} />
                      )}
                    </ThemeIcon>
                  }
                >
                  Must include '.'
                </List.Item>
              </>
            )}

            {email.length > 0 && isValidEmail && (
              <List.Item
                icon={
                  <ThemeIcon color="teal" size={20} radius="xl">
                    <IconCheck size={14} />
                  </ThemeIcon>
                }
              >
                Valid email address
              </List.Item>
            )}
          </List>

          <PasswordInput
            label="Password"
            placeholder="Enter password"
            withAsterisk
            mt="md"
            {...form.getInputProps("password")}
            value={password}
            onChange={(event) => {
              const val = event.currentTarget.value;
              setPassword(val);
              form.setFieldValue("password", val);
            }}
          />

          <List mt="xs" spacing="xs" size="sm">
            {!(isMinLength && hasUppercase) && (
              <>
                <List.Item
                  icon={
                    <ThemeIcon
                      color={password.length >= 8 ? "teal" : "red"}
                      size={20}
                      radius="xl"
                    >
                      {password.length >= 8 ? (
                        <IconCheck size={14} />
                      ) : (
                        <IconX size={14} />
                      )}
                    </ThemeIcon>
                  }
                >
                  At least 8 characters
                </List.Item>

                <List.Item
                  icon={
                    <ThemeIcon
                      color={/[A-Z]/.test(password) ? "teal" : "red"}
                      size={20}
                      radius="xl"
                    >
                      {/[A-Z]/.test(password) ? (
                        <IconCheck size={14} />
                      ) : (
                        <IconX size={14} />
                      )}
                    </ThemeIcon>
                  }
                >
                  At least one uppercase letter
                </List.Item>
              </>
            )}

            {password.length >= 8 && /[A-Z]/.test(password) && (
              <List.Item
                icon={
                  <ThemeIcon color="teal" size={20} radius="xl">
                    <IconCheck size={14} />
                  </ThemeIcon>
                }
              >
                Valid password
              </List.Item>
            )}
          </List>
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            withAsterisk
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
