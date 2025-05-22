import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  Title,
  Stack,
  Loader,
  Notification,
  Button,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
//import { setPost } from '../../redux/postSlice'; 
import CreateEditPostForm from './CreateEditPostForm'; 

const EditPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { title, body } = useSelector((state) => state.post);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPost({ title: data.title, body: data.body }));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [id, dispatch]);

  const handleEdit = (data) => {
    console.log('Updating Post:', { id, ...data });
  };

  if (loading) return <Loader size="lg" />;
  if (error) return <Notification color="red">{error}</Notification>;

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
    <Title order={2} mb="lg">✏️ Edit Post</Title>
    <Stack spacing="md">
      <CreateEditPostForm onSubmit={handleEdit} />
    </Stack>
  </Paper>
</Container>


  );
};

export default EditPostPage;
