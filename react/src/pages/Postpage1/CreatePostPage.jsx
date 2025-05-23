import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Title, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import CreateEditPostForm from './CreateEditPostForm';
import { addPost, resetPost } from '../../redux/postSlice';

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = (data) => {
    const newPost = {
      id: Date.now(),
      title: data.title,
      body: data.body,
    };
    dispatch(addPost(newPost));
    dispatch(resetPost());
    navigate(`/posts/${newPost.id}`);
  };

  return (
    <Container size="sm" mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper p="xl" radius="md" shadow="sm" withBorder style={{ width: '100%', maxWidth: '400px' }}>
        <Title order={2} mb="lg">📝 Create New Post</Title>
        <Stack spacing="md">
          <CreateEditPostForm onSubmit={handleCreate} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CreatePostPage;
