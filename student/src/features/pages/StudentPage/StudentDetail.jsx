import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button, Group, Title, Text, Box } from "@mantine/core";

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const students = useSelector((state) => state.students.students);

  const student = students.find(
    (indvStudent) => indvStudent.id === id || indvStudent.id === Number(id)
  );

  if (!student) {
    return (
      <Container>
        <Title order={2}>Student Not Found</Title>
      </Container>
    );
  }
  const tableColumns = [
    { label: "Gender", source: "gender" },
    { label: "Contact", source: "contact" },
    { label: "Email", source: "email" },
    { label: "Permanent Address", source: "permanentAddress" },
    { label: "Temporary Address", source: "temporaryAddress" },
    { label: "Grade", source: "grade" },
  ];

  return (
    <Container size="sm" mt="md">
      <Title order={2} mb="md">
        {student.name}
      </Title>
      <Box>
        {tableColumns.map(({ label, source }) => (
          <Text key={source}>
            <strong>{label}:</strong> {student[source]}
          </Text>
        ))}
      </Box>
      <Button
        variant="outline"
        size="sm"
        mt="md"
        onClick={() => navigate("/students")}
      >
        Back to List
      </Button>
    </Container>
  );
};

export default StudentDetail;
