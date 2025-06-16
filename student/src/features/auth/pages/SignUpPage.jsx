import {
  Button,
  TextInput,
  Paper,
  Title,
  Container,
  PasswordInput,
  Text,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate, Link } from "react-router-dom";
import { signUpSchema } from "../../../constants/common"; 

export default function SignUp() {
  const navigate = useNavigate();

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
    navigate("/login");
  };

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
          />

          <PasswordInput
            label="Password"
            placeholder="Enter password"
            withAsterisk
            mt="md"
            {...form.getInputProps("password")}
          />

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
