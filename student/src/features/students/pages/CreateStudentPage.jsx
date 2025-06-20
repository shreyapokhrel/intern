import React from "react";
import { useDispatch } from "react-redux";
import { Box, Title } from "@mantine/core";
import { addStudent } from "../../../stores/studentSlice";
import StudentCreateEditFormView from "../viewmodules/StudentCreateEditFormView";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
const emptyStudent = {
  name: "",
  gender: "",
  contact: "",
  email: "",
  permanentAddress: "",
  temporaryAddress: "",
  grade: "",
};

const CreateStudentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newStudent) => {
    const studentId = Date.now();
    const studentWithId = { ...newStudent, id: studentId };

    dispatch(addStudent(studentWithId));

    notifications.show({
      title: "Student Added",
      message: `${newStudent.name} has been added successfully.`,
      color: "green",
      onClick: () => navigate(`/students/${studentId}`),
    });
  };

  return (
    <Box maw={400} mx="auto" mt="md">
      <Title order={2} mb="md">
        Create Student
      </Title>
      <StudentCreateEditFormView
        initialValues={emptyStudent}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default CreateStudentPage;
