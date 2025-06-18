import React from "react";
import { Container, Title, Text, List, ThemeIcon } from "@mantine/core";
import {
  IconUser,
  IconMail,
  IconAddressBook,
  IconChartBar,
} from "@tabler/icons-react";

export default function AboutPage() {
  return (
    <Container size="md" py="xl">
      <Title order={2} mb="sm">
        About This Application
      </Title>
      <Text mb="md">
        This system helps manage and view student information efficiently. It
        allows you to store and access student records including personal and
        academic details.
      </Text>

      <Title order={4} mt="lg" mb="sm">
        What We Store:
      </Title>
      <List
        spacing="sm"
        size="sm"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconUser size={16} />
          </ThemeIcon>
        }
      >
        <List.Item icon={<IconUser size={16} />}>Full Name</List.Item>
        <List.Item icon={<IconMail size={16} />}>Email Address</List.Item>
        <List.Item icon={<IconAddressBook size={16} />}>
          Gender and Address
        </List.Item>
        <List.Item icon={<IconChartBar size={16} />}>Academic Grade</List.Item>
      </List>
    </Container>
  );
}
