import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  TextInput,
  Select,
  Button,
  Container,
  Title,
  Box,
} from "@mantine/core";
import { updateStudent } from "../../constants/studentSlice";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const student = useSelector((state) =>
    state.students.students.find((indvStudent) => indvStudent.id === Number(id))
  );

  const [form, setForm] = useState({
    name: "",
    gender: "",
    contact: "",
    email: "",
    permanentAddress: "",
    temporaryAddress: "",
    grade: "",
  });

  useEffect(() => {
    if (student) {
      setForm(student);
    }
  }, [student]);

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(form));
    navigate("/students");
  };

  if (!student) {
    return <p>Student not found</p>;
  }

  return (
    <Container size="sm">
      <Title order={2} mb="md">
        Edit Student
      </Title>
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
          <Button type="submit">Save</Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditStudent;
