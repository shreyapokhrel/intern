import React from 'react';
import { Container, Paper, Title, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CreateEditPostForm1 from './CreateEditPostForm1';
import { usePostContext } from '../../context/PostContext'; 

const CreatePostPage1 = () => {
  const { addPost } = usePostContext(); 
  const navigate = useNavigate();

  const handleCreate = (data) => {
    const newPost = {
      id: Date.now(),
      title: data.title,
      body: data.body,
    };

    addPost(newPost); 
    navigate(`/posts/${newPost.id}`);
  };

  return (
    <Container size="sm" mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper p="xl" radius="md" shadow="sm" withBorder style={{ width: '100%', maxWidth: '400px' }}>
        <Title order={2} mb="lg">📝 Create New Post</Title>
        <Stack spacing="md">
          <CreateEditPostForm1 onSubmit={handleCreate} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CreatePostPage1;
