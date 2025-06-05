import React from "react";
import { useDispatch } from "react-redux";
import { Box, Title } from "@mantine/core";
import { addStudent } from "../../constants/studentSlice";
import StudentCreateEditForm from "./StudentCreateEditForm";

const CreateStudent = () => {
  const dispatch = useDispatch();
  const handleSubmit = (newStudent) => {
    dispatch(addStudent({ ...newStudent, id: Date.now() }));
  };

  return (
    <Box maw={400} mx="auto" mt="md">
      <Title order={2} mb="md">
        Create Student
      </Title>
      <StudentCreateEditForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default CreateStudent;
