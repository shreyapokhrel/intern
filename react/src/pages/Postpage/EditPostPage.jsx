import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextInput, Textarea, Button, Paper, Title, Stack, Container, Loader, Notification } from '@mantine/core';

const EditPostPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log('Updating Post:', { id, title, body });
  };

  if (loading) return <Loader size="lg" />;
  if (error) return <Notification color="red">{error}</Notification>;

  return (
    <Container size="sm" mt="xl">
      <Paper p="xl" radius="md" shadow="sm" withBorder>
        <Title order={2} mb="lg">✏️ Edit Post</Title>
        <form onSubmit={handleEdit}>
          <Stack spacing="md">
            <TextInput
              label="Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Textarea
              label="Post Content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              minRows={4}
              required
            />
            <Button type="submit" color="green">
              Save Changes
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default EditPostPage;
