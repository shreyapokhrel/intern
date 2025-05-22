import React from 'react';
import { Paper, Title, Stack, Container } from '@mantine/core';
import { useSelector } from 'react-redux';
import CreateEditPostForm from './CreateEditPostForm'; 


const CreatePostPage = () => {
  const title = useSelector((state) => state.post.title);
  const body = useSelector((state) => state.post.body);

  const handleCreate = (data) => {
    console.log('Creating Post:', data); 
  };

  return (
     <Container size="sm" mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper
        p="xl"
        radius="md"
        shadow="sm"
        withBorder
        style={{
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Title order={2} mb="lg">📝 Create New Post</Title>
        <Stack spacing="md">
          <CreateEditPostForm onSubmit={handleCreate} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CreatePostPage;
