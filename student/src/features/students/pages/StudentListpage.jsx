import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Table,
  Title,
  ScrollArea,
  TextInput,
  Group,
  Pagination,
  Text,
  Center,
  Box,
  ActionIcon,
  Select,
  Tooltip,
} from "@mantine/core";
import {
  IconSearch,
  IconArrowUp,
  IconArrowDown,
  IconTrash,
  IconEdit,
  IconPlus,
  IconEye,
  IconCheck,
  IconPin,
} from "@tabler/icons-react";
import { showNotification } from "@mantine/notifications";
import useStudentTableColumns from "../hooks/useStudentTableColumns";

const StudentListPage = () => {
  const location = useLocation();
  const studentsFromState = location.state?.students || [];
  const navigate = useNavigate();
  const students = useSelector((state) => state.students.students);

  const [studentsList, setStudentsList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [activePage, setActivePage] = useState(1);

  const tableColumns = useStudentTableColumns();

  useEffect(() => {
    const initialStudents = (
      studentsFromState.length > 0 ? studentsFromState : students
    ).map((s) => ({ ...s, pinned: s.pinned || false }));
    setStudentsList(initialStudents);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudentsList((prev) =>
        prev.filter((indvStudent) => indvStudent.id !== id)
      );
      showNotification({
        title: "Student Deleted",
        message: "The student was removed successfully ",
        color: "green",
        icon: <IconCheck size={16} />,
      });
    }
  };

  const togglePin = (id) => {
    setStudentsList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, pinned: !s.pinned } : s))
    );
  };

  const filteredStudents = useMemo(() => {
    if (!search) return studentsList;
    const lowerSearch = search.toLowerCase();
    return studentsList.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerSearch) ||
        s.email.toLowerCase().includes(lowerSearch) ||
        s.contact.toLowerCase().includes(lowerSearch)
    );
  }, [search, studentsList]);

  const sortedStudents = useMemo(() => {
    let sorted = [...filteredStudents];

    if (sortBy) {
      sorted.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    sorted.sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

    return sorted;
  }, [sortBy, sortDirection, filteredStudents]);

  const paginatedStudents = useMemo(() => {
    const start = (activePage - 1) * pageSize;
    return sortedStudents.slice(start, start + pageSize);
  }, [activePage, sortedStudents, pageSize]);

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

  const actions = (student) => [
    {
      label: student.pinned ? "Unpin student" : "Pin student",
      color: student.pinned ? "yellow" : "gray",
      icon: <IconPin size={18} />,
      onClick: () => togglePin(student.id),
      ariaLabel: `${student.pinned ? "Unpin" : "Pin"} ${student.name}`,
    },
    {
      label: "View student",
      color: "teal",
      icon: <IconEye size={18} />,
      onClick: () => navigate(`/students/${student.id}`),
      ariaLabel: `View ${student.name}`,
    },
    {
      label: "Edit student",
      color: "blue",
      icon: <IconEdit size={18} />,
      onClick: () => navigate(`/students/${student.id}/edit`),
      ariaLabel: `Edit ${student.name}`,
    },
    {
      label: "Delete student",
      color: "red",
      icon: <IconTrash size={18} />,
      onClick: () => handleDelete(student.id),
      ariaLabel: `Delete ${student.name}`,
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
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
        />
        <Tooltip
          label="Create student"
          withArrow
          position="left"
          color="green"
          transition="fade"
        >
          <ActionIcon
            color="green"
            size="lg"
            variant="filled"
            onClick={() => navigate("/students/create")}
            title="Create Student"
            aria-label="Create Student"
            style={{ marginLeft: "1000px" }}
          >
            <IconPlus size={24} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Box sx={{ flex: 1, minHeight: 0 }}>
        <ScrollArea style={{ height: "100%" }}>
          <Table
            striped
            highlightOnHover
            withColumnBorders
            verticalSpacing="md"
            fontSize="sm"
          >
            <Table.Thead>
              <Table.Tr
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  zIndex: 10,
                }}
              >
                <Table.Th>#</Table.Th>
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
                paginatedStudents.map((student, index) => (
                  <Table.Tr
                    key={student.id}
                    style={student.pinned ? { backgroundColor: "#fff8dc" } : {}}
                  >
                    <Table.Td>
                      {(activePage - 1) * pageSize + index + 1}
                    </Table.Td>
                    {tableColumns.map((column) => (
                      <Table.Td key={column.source}>
                        {column.render
                          ? column.render(student, navigate)
                          : student[column.source]}
                      </Table.Td>
                    ))}
                    <Table.Td>
                      <Group spacing={4}>
                        {actions(student).map(
                          ({ label, color, icon, onClick, ariaLabel }) => (
                            <Tooltip
                              key={label}
                              label={label}
                              withArrow
                              position="right"
                              color={color}
                              transition="fade"
                            >
                              <ActionIcon
                                color={color}
                                variant="outline"
                                size="sm"
                                onClick={onClick}
                                aria-label={ariaLabel}
                              >
                                {icon}
                              </ActionIcon>
                            </Tooltip>
                          )
                        )}
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={tableColumns.length + 2}>
                    <Center>
                      <Text color="dimmed" style={{ fontStyle: "italic" }}>
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

      <Select
        label="Rows per page"
        value={String(pageSize)}
        onChange={(val) => {
          setPageSize(Number(val));
          setActivePage(1);
        }}
        data={["5", "10", "20", "50", "100"]}
        size="xs"
        style={{ maxWidth: 120 }}
      />

      <Center mt="md">
        <Pagination
          total={Math.ceil(sortedStudents.length / pageSize)}
          page={activePage}
          onChange={setActivePage}
          withEdges
          size="sm"
        />
      </Center>
    </Box>
  );
};

export default StudentListPage;
