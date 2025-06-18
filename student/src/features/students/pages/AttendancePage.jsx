import React, { useState, useEffect } from "react";
import {
  Table,
  Select,
  Button,
  Title,
  Box,
  Group,
  Paper,
  Stack,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

export default function AttendancePage() {
  const students = useSelector((state) => state.students.students);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 1));
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const key = dayjs(selectedDate).format("YYYY-MM-DD");
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    setAttendance(stored[key] || {});
  }, [selectedDate]);

  const handleChange = (studentId, value) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: value,
    }));
  };

  const handleSave = () => {
    const key = dayjs(selectedDate).format("YYYY-MM-DD");
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    stored[key] = attendance;
    localStorage.setItem("attendance", JSON.stringify(stored));
    alert("Attendance saved!");
  };

  const handleReset = () => {
    const key = dayjs(selectedDate).format("YYYY-MM-DD");
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    if (stored[key]) {
      delete stored[key];
      localStorage.setItem("attendance", JSON.stringify(stored));
      setAttendance({});
      alert(`Attendance reset for ${key}`);
    } else {
      alert(`No attendance found to reset for ${key}`);
    }
  };

  return (
    <Paper shadow="sm" p="md" radius="md" withBorder maw={500} mx="auto">
      <form>
        <Stack spacing="md">
          <Title order={2} align="center">
            Attendance
          </Title>

          <DateInput
            label="Select Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date || new Date(2025, 0, 1))}
            minDate={new Date(2025, 0, 1)}
            maxDate={new Date(2025, 11, 31)}
            required
          />

          <Box sx={{ overflowX: "auto" }}>
            <Table
              striped
              highlightOnHover
              withBorder
              verticalSpacing="sm"
              fontSize="md"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th style={{ minWidth: 150 }}>Present / Absent</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>
                        <Select
                          placeholder="Select status"
                          data={["Present", "Absent"]}
                          value={attendance[student.id] || ""}
                          onChange={(value) => handleChange(student.id, value)}
                          searchable={false}
                          clearable={false}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} align="center">
                      No students available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Box>

          <Group position="right" spacing="sm">
            <Button onClick={handleSave} color="blue" type="button">
              Save Attendance
            </Button>
            <Button onClick={handleReset} color="red" variant="outline">
              Reset Attendance
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
