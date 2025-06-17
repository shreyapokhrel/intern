import { useNavigate } from "react-router-dom";
import { Text } from "@mantine/core";

export default function useStudentTableColumns() {
  const navigate = useNavigate();

  return [
    {
      label: "Name",
      source: "name",
      render: (indvStudent) => (
        <Text
          fw={600}
          style={{
            cursor: "pointer",
            color: "#1c7ed6",
            textDecoration: "underline",
          }}
          onClick={() => navigate(`/students/${indvStudent.id}`)}
        >
          {indvStudent.name}
        </Text>
      ),
    },
    { label: "Gender", source: "gender" },
    { label: "Contact", source: "contact" },
    { label: "Email", source: "email" },
    { label: "Permanent Address", source: "permanentAddress" },
    { label: "Temporary Address", source: "temporaryAddress" },
    { label: "Grade", source: "grade" },
  ];
}
