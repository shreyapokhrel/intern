import React, { useEffect } from "react";
import { TextInput, Select, Button, Group } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { studentSchema } from "../schemas";

export default function StudentCreateEditForm({ initialValues, onSubmit }) {
  const form = useForm({
    initialValues,
    validate: zodResolver(studentSchema),
    validateInputOnBlur: true,
  });

  useEffect(() => {
    form.setValues(initialValues);
  }, [initialValues]);

  const handleSubmit = (values) => {
    const trimmed = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [
        k,
        typeof v === "string"
          ? v.trim() === ""
            ? ["permanentAddress", "temporaryAddress", "grade"].includes(k)
              ? "-"
              : ""
            : v.trim()
          : v,
      ])
    );
    onSubmit(trimmed);
  };

  const handleReset = () => {
    form.reset(initialValues);
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
        placeholder="e.g. A, B, C"
        {...form.getInputProps("grade")}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
        <Button
          type="button"
          variant="default"
          onClick={handleReset}
          disabled={!form.isDirty()}
        >
          Reset
        </Button>
      </Group>
    </form>
  );
}
