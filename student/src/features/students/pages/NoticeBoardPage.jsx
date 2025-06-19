import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextInput,
  Textarea,
  Title,
  Stack,
  Paper,
  Text,
  Group,
  Table,
} from "@mantine/core";

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
    <Paper shadow="sm" p="md" radius="md" withBorder maw={500} mx="auto">
      <form>
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
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.title}</td>
                <td>{notice.description}</td>

                <td>
                  <Button color="red" onClick={() => deleteNotice(notice.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Paper>
  );
}
