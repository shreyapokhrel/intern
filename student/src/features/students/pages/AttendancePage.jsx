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
import { DATE_FORMAT } from "../../../constants/dateFormat";

export default function AttendancePage() {
  const students = useSelector((state) => state.students.students);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 1));
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const key = DATE_FORMAT.GET_KEY(selectedDate);
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};

    if (stored[key]) {
      setAttendance(stored[key]);
    } else {
      const defaultAttendance = {};
      students.forEach((student) => {
        defaultAttendance[student.id] = "";
      });
      setAttendance(defaultAttendance);
    }
  }, [selectedDate, students]);

  const handleChange = (studentId, value) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: value,
    }));
  };

  const handleSave = () => {
    const key = DATE_FORMAT.GET_KEY(selectedDate);
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    stored[key] = attendance;
    localStorage.setItem("attendance", JSON.stringify(stored));
    alert("Attendance saved!");
  };

  const handleReset = () => {
    const key = DATE_FORMAT.GET_KEY(selectedDate);
    const stored = JSON.parse(localStorage.getItem("attendance")) || {};
    if (stored[key]) {
      delete stored[key];
      localStorage.setItem("attendance", JSON.stringify(stored));

      const defaultAttendance = {};
      students.forEach((student) => {
        defaultAttendance[student.id] = "";
      });
      setAttendance(defaultAttendance);
      alert(`Attendance reset for ${key}`);
    } else {
      alert(`No attendance found to reset for ${key}`);
    }
  };

  return (
    <Paper shadow="sm" p="md" radius="md" withBorder maw={600} mx="auto">
      <form>
        <Stack spacing="md">
          <Title order={2} align="center">
            Attendance
          </Title>

          <DateInput
            label="Select Date"
            value={selectedDate}
            onChange={setSelectedDate}
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
                          value={attendance[student.id] ?? ""}
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
