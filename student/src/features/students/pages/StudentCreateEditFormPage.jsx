import React, { useEffect } from "react";
import { TextInput, Select, Button, Box, Group } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function StudentCreateEditFormPage({ initialValues, onSubmit }) {
  const form = useForm({
    initialValues: {
      name: "",
      gender: "",
      contact: "",
      email: "",
      permanentAddress: "",
      temporaryAddress: "",
      grade: "",
    },

    validateInputOnChange: true,

    validate: {
      name: (value) => (value.trim().length === 0 ? "Name is required" : null),

      gender: (value) => (!value ? "Please select a gender" : null),

      contact: (value) =>
        value.trim().length < 7 ? "Contact must be at least 7 digits" : null,

      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email format",
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.setValues(initialValues);
      form.resetDirty(initialValues);
    }
  }, [initialValues]);

  const handleSubmit = (values) => {
    const trimmed = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [
        k,
        typeof v === "string" ? v.trim() : v,
      ])
    );

    onSubmit(trimmed);

    if (!initialValues || Object.keys(initialValues).length === 0) {
      form.reset();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label="Name"
        placeholder="Full Name"
        withAsterisk
        {...form.getInputProps("name")}
      />

      <Select
        label="Gender"
        placeholder="Pick one"
        data={["Male", "Female", "Other"]}
        withAsterisk
        {...form.getInputProps("gender")}
      />

      <TextInput
        label="Contact"
        placeholder="Phone number"
        withAsterisk
        {...form.getInputProps("contact")}
      />

      <TextInput
        label="Email"
        placeholder="example@email.com"
        withAsterisk
        {...form.getInputProps("email")}
      />

      <TextInput
        label="Permanent Address"
        placeholder="e.g. Kathmandu"
        {...form.getInputProps("permanentAddress")}
      />

      <TextInput
        label="Temporary Address"
        placeholder="e.g. Pokhara"
        {...form.getInputProps("temporaryAddress")}
      />

      <TextInput
        label="Grade"
        placeholder="e.g. A,B,C"
        {...form.getInputProps("grade")}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
        <Button
          type="button"
          variant="default"
          onClick={() => form.reset()}
          disabled={!form.isDirty()}
        >
          Reset
        </Button>
      </Group>
    </form>
  );
}
