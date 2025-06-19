import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextInput,
  Textarea,
  Title,
  Stack,
  Paper,
  Table,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
export default function NoticeBoardPage() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(saved);
  }, []);

  const addNotice = () => {
    if (!title.trim() || !description.trim()) return;

    const newNotice = {
      id: Date.now(),
      title,
      description,
      date: new Date().toISOString().split("T")[0],
    };

    const updated = [newNotice, ...notices];
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));

    setTitle("");
    setDescription("");
  };

  const deleteNotice = (id) => {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
  };

  return (
    <Paper shadow="sm" p="md" radius="md" withBorder maw={600} mx="auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack spacing="md">
          <Title order={2} align="center">
            Notice Board
          </Title>
          <TextInput
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button onClick={addNotice}>Add Notice</Button>
        </Stack>
      </form>

      <Box mt="md">
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.date}</td>
                <td>{notice.title}</td>
                <td>{notice.description}</td>
                <td>
                  <Tooltip
                    label="Delete notice"
                    withArrow
                    position="right"
                    color="red"
                  >
                    <ActionIcon
                      color="red"
                      onClick={() => deleteNotice(notice.id)}
                    >
                      <IconTrash size={18} />
                    </ActionIcon>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Paper>
  );
}
