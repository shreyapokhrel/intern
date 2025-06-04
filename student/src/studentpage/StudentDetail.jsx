import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container,Button,Group, Title, Text, Box } from "@mantine/core";

const StudentDetail = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students.students);
  const student = students.find((indvStudent) => indvStudent.id === id || indvStudent.id === Number(id));
 const navigate =useNavigate();
  if (!student) {
    return (
      <Container>
        <Title order={2}>Student Not Found</Title>
      </Container>
    );
  }

  return (
    <Container size="sm" mt="md">
      <Title order={2} mb="md">
        {student.name}
      </Title>
      <Box>
        <Text>
          <strong>Gender:</strong> {student.gender}
        </Text>
        <Text>
          <strong>Contact:</strong> {student.contact}
        </Text>
        <Text>
          <strong>Email:</strong> {student.email}
        </Text>
        <Text>
          <strong>Permanent Address:</strong> {student.permanentAddress}
        </Text>
        <Text>
          <strong>Temporary Address:</strong> {student.temporaryAddress}
        </Text>
        <Text>
          <strong>Grade:</strong> {student.grade}
        </Text>
      </Box>
       <Button variant="outline" size="sm"  mt="md" onClick={()=> navigate("/students")}>
      Back to List
      </Button>
    </Container>
  );
};

export default StudentDetail;
