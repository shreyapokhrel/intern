import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Stack,
} from "@mantine/core";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <Container size={420} my={40}>
      <Title align="center" mb="sm">
        Contact Us
      </Title>
      <Text color="dimmed" size="sm" align="center" mb="xl">
        Fill out the form below and we will get back to you soon.
      </Text>

      <Paper padding="md" shadow="sm" withBorder>
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              label="Message"
              placeholder="Write your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minRows={4}
            />
            <Button type="submit" fullWidth mt="md">
              Send Message
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
