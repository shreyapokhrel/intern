import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Title } from "@mantine/core";
import { updateStudent } from "../../../stores/studentSlice";
import StudentCreateEditForm from "./StudentCreateEditForm";

const EditStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const student = useSelector((state) =>
    state.students.students.find((s) => s.id === Number(id))
  );

  if (!student) return <p>Student not found</p>;

  const handleSubmit = (updatedStudent) => {
    dispatch(updateStudent(updatedStudent));
    navigate("/students");
  };

  return (
    <Container size="sm">
      <Title order={2} mb="md">
        Edit Student
      </Title>
      <StudentCreateEditForm initialValues={student} onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditStudentPage;
