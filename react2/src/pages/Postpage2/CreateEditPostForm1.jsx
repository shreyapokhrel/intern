import React, { useState, useEffect } from 'react';
import { TextInput, Textarea, Button, Stack } from '@mantine/core';

const CreateEditPostForm1 = ({ onSubmit, initialTitle = '', initialBody = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  useEffect(() => {
    setTitle(initialTitle);
    setBody(initialBody);
  }, [initialTitle, initialBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onSubmit({ title, body });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="md">
        <TextInput
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          required
        />
        <Textarea
          label="Body"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          required
          minRows={4}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default CreateEditPostForm1;
