import React, { useState } from 'react';
import { TextInput, Textarea, Button, Paper, Title, Stack, Container } from '@mantine/core';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    console.log('Creating Post:', { title, body });
  };

  return (
    <Container size="sm" mt="xl">
      <Paper p="xl" radius="md" shadow="sm" withBorder>
        <Title order={2} mb="lg">📝 Create New Post</Title>
        <form onSubmit={handleCreate}>
          <Stack spacing="md">
            <TextInput
              label="Post Title"
              placeholder="Enter a new title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              label="Post Content"
              placeholder="Write your content here"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              minRows={4}
              required
            />
            <Button type="submit" color="blue">
              Publish Post
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default CreatePostPage;
