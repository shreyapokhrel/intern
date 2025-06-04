import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Container,
  Title,
  ScrollArea,
  TextInput,
  Group,
  Badge,
  Pagination,
  Text,
  Center,
  Box,
  Button,
} from "@mantine/core";
import { IconSearch, IconArrowUp, IconArrowDown } from "@tabler/icons-react";

const PAGE_SIZE = 10;

const StudentList = () => {
  const students = useSelector((state) => state.students.students);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();
  const filteredStudents = useMemo(() => {
    if (!search) return students;
    const lowerSearch = search.toLowerCase();
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerSearch) ||
        s.email.toLowerCase().includes(lowerSearch) ||
        s.contact.toLowerCase().includes(lowerSearch)
    );
  }, [search, students]);

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

  return (
     <Box
    sx={{
      height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    boxSizing: 'border-box',
    }}
  >
    <Title order={2} mb="md" align="center">
      Student List
    </Title>
      <Group position="apart" mb="sm">
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
      </Group>
      <Box sx={{ flex: 1, minHeight: 0 }}>
      <ScrollArea style={{ height: '100%' }}>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          withBorder
          verticalSpacing="md"
          horizontalSpacing="md"
          fontSize="sm"
          style={{minWidth:'100%'}}
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
            <Table.Th onClick={() => handleSort("name")}>
              <Group spacing={4}>
                Name <SortIcon columnKey="name" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("gender")}>
              <Group spacing={4}>
                Gender <SortIcon columnKey="gender" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("contact")}>
              <Group spacing={4}>
                Contact <SortIcon columnKey="contact" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("email")}>
              <Group spacing={4}>
                Email <SortIcon columnKey="email" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("permanentAddress")}>
              <Group spacing={4}>
                Permanent Address <SortIcon columnKey="permanentAddress" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("temporaryAddress")}>
              <Group spacing={4}>
                Temporary Address <SortIcon columnKey="temporaryAddress" />
              </Group>
            </Table.Th>
            <Table.Th onClick={() => handleSort("grade")}>
              <Group spacing={4}>
                Grade <SortIcon columnKey="grade" />
              </Group>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {paginatedStudents.length > 0 ? (
            paginatedStudents.map((student) => (
              <Table.Tr key={student.id}>
                <Table.Td>
                  <Text
                    fw={600}
                    style={{
                      cursor: "pointer",
                      color: "#1c7ed6",
                      textDecoration: "underline",
                    }}
                    onClick={() => navigate(`/students/${student.id}`)}
                  >
                    {student.name}
                  </Text>
                </Table.Td>
                <Table.Td>{student.gender}</Table.Td>
                <Table.Td>{student.contact}</Table.Td>
                <Table.Td>{student.email}</Table.Td>
                <Table.Td>{student.permanentAddress}</Table.Td>
                <Table.Td>{student.temporaryAddress}</Table.Td>
                <Table.Td>{student.grade}</Table.Td>
                 <Table.Td>
    <Button
      size="xs"
      variant="outline"
      onClick={() => navigate(`/students/${student.id}/edit`)}
    >
      Edit
    </Button>
  </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={7}>
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