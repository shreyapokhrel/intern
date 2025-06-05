import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Container,
  Title,
  ScrollArea,
  TextInput,
  Group,
  Pagination,
  Text,
  Center,
  Box,
  Button,
  ActionIcon,
} from "@mantine/core";
import {
  IconSearch,
  IconArrowUp,
  IconArrowDown,
  IconTrash,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";

const PAGE_SIZE = 10;

const StudentList = () => {
  const navigate = useNavigate();

  const students = useSelector((state) => state.students.students);

  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    setStudentsList(students);
  }, [students]);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [activePage, setActivePage] = useState(1);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudentsList((prev) => prev.filter((student) => student.id !== id));
    }
  };

  const filteredStudents = useMemo(() => {
    if (!search) return studentsList;
    const lowerSearch = search.toLowerCase();
    return studentsList.filter(
      (indvStudent) =>
        indvStudent.name.toLowerCase().includes(lowerSearch) ||
        indvStudent.email.toLowerCase().includes(lowerSearch) ||
        indvStudent.contact.toLowerCase().includes(lowerSearch)
    );
  }, [search, studentsList]);

  const sortedStudents = useMemo(() => {
    if (!sortBy) return filteredStudents;

    const sorted = [...filteredStudents].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [sortBy, sortDirection, filteredStudents]);

  const paginatedStudents = useMemo(() => {
    const start = (activePage - 1) * PAGE_SIZE;
    return sortedStudents.slice(start, start + PAGE_SIZE);
  }, [activePage, sortedStudents]);

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnKey);
      setSortDirection("asc");
    }
    setActivePage(1);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortBy !== columnKey) return null;
    return sortDirection === "asc" ? (
      <IconArrowUp size={14} />
    ) : (
      <IconArrowDown size={14} />
    );
  };

  const tableColumns = [
    { label: "Name", source: "name" },
    { label: "Gender", source: "gender" },
    { label: "Contact", source: "contact" },
    { label: "Email", source: "email" },
    { label: "Permanent Address", source: "permanentAddress" },
    { label: "Temporary Address", source: "temporaryAddress" },
    { label: "Grade", source: "grade" },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Title order={2} mb="md" align="center">
        Student List
      </Title>

      <Group position="apart" mb="sm" style={{ width: "100%" }}>
        <TextInput
          placeholder="Search"
          icon={<IconSearch size={16} />}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ maxWidth: 300 }}
          radius="md"
          size="sm"
          clearable
        />
        <ActionIcon
          color="green"
          size="lg"
          variant="filled"
          onClick={() => navigate("/students/create")}
          title="Create Student"
          aria-label="Create Student"
        >
          <IconPlus size={24} />
        </ActionIcon>
      </Group>

      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ScrollArea style={{ height: "100%" }}>
          <Table
            striped
            highlightOnHover
            withColumnBorders
            withBorder
            verticalSpacing="md"
            horizontalSpacing="md"
            fontSize="sm"
            style={{ minWidth: "100%" }}
          >
            <Table.Thead>
              <Table.Tr
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                {tableColumns.map(({ label, source }) => (
                  <Table.Th key={source} onClick={() => handleSort(source)}>
                    <Group spacing={4}>
                      {label} <SortIcon columnKey={source} />
                    </Group>
                  </Table.Th>
                ))}
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((student) => (
                  <Table.Tr key={student.id}>
                    {tableColumns.map(({ source }) => (
                      <Table.Td key={source}>
                        {source === "name" ? (
                          <Text
                            fw={600}
                            style={{
                              cursor: "pointer",
                              color: "#1c7ed6",
                              textDecoration: "underline",
                            }}
                            onClick={() => navigate(`/students/${student.id}`)}
                          >
                            {student[source]}
                          </Text>
                        ) : (
                          student[source]
                        )}
                      </Table.Td>
                    ))}
                    <Table.Td>
                      <Group spacing={4}>
                        <ActionIcon
                          color="blue"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            navigate(`/students/${student.id}/edit`)
                          }
                          aria-label={`Edit ${student.name}`}
                        >
                          <IconEdit size={18} />
                        </ActionIcon>
                        <ActionIcon
                          color="red"
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(student.id)}
                          aria-label={`Delete ${student.name}`}
                        >
                          <IconTrash size={18} />
                        </ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={tableColumns.length + 1}>
                    <Center>
                      <Text color="dimmed" italic>
                        No students found.
                      </Text>
                    </Center>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>

      <Center mt="md">
        <Pagination
          total={Math.ceil(sortedStudents.length / PAGE_SIZE)}
          page={activePage}
          onChange={setActivePage}
          withEdges
          size="sm"
        />
      </Center>
    </Box>
  );
};

export default StudentList;
