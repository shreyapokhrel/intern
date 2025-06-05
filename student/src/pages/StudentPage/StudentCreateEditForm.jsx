import React, { useState, useEffect } from "react";
import { TextInput, Select, Button, Box } from "@mantine/core";

export default function StudentCreateEditForm({ initialValues, onSubmit }) {
  const defaultInitialValues = {
    name: "",
    gender: "",
    contact: "",
    email: "",
    permanentAddress: "",
    temporaryAddress: "",
    grade: "",
  };

  const [form, setForm] = useState(defaultInitialValues);

  useEffect(() => {
    if (initialValues) {
      setForm(initialValues);
    }
  }, [initialValues]);

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );
    onSubmit(trimmedData);
    if (!initialValues || Object.keys(initialValues).length === 0) {
      setForm(defaultInitialValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        value={form.name}
        onChange={handleChange("name")}
        required
      />
      <Select
        label="Gender"
        data={["Male", "Female", "Other"]}
        value={form.gender}
        onChange={(value) => setForm({ ...form, gender: value })}
        required
      />
      <TextInput
        label="Contact"
        value={form.contact}
        onChange={handleChange("contact")}
        required
      />
      <TextInput
        label="Email"
        value={form.email}
        onChange={handleChange("email")}
        required
      />
      <TextInput
        label="Permanent Address"
        value={form.permanentAddress}
        onChange={handleChange("permanentAddress")}
      />
      <TextInput
        label="Temporary Address"
        value={form.temporaryAddress}
        onChange={handleChange("temporaryAddress")}
      />
      <TextInput
        label="Grade"
        value={form.grade}
        onChange={handleChange("grade")}
      />
      <Box mt="md">
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
}
