import React, { useEffect } from "react";
import { TextInput, Select, Button, Box, Group } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  contact: z
    .string()
    .min(7, "Contact must be at least 7 digits")
    .regex(/^\d+$/, "Contact must be a valid number"),
  email: z.string().email("Invalid email format"),
  permanentAddress: z.string().optional(),
  temporaryAddress: z.string().optional(),
  grade: z.string().optional(),
});
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
    validate: zodResolver(studentSchema),
    validateInputOnBlur: true,
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
        placeholder="e.g. A, B, C"
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
