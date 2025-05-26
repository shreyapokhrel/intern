import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Title,
  Stack,
  Loader,
  Notification,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, updatePost, setTitle, setBody } from '../../redux/postSlice';
import CreateEditPostForm from './CreateEditPostForm';

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, loading, error, post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(setTitle(post.title));
      dispatch(setBody(post.body));
    }
  }, [post, dispatch]);

  const handleEdit = (data) => {
    dispatch(updatePost({ id: Number(id), ...data }));
    navigate('/posts');
  };
  const formData ={ title, body };

  if (loading) return <Loader size="lg" style={{ marginTop: '5rem' }} />;
  if (error) return <Notification color="red" mt="xl">{error}</Notification>;

  return (
    <Container size="sm" mt="xl" style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper p="xl" radius="md" shadow="sm" withBorder style={{ width: '100%', maxWidth: '400px' }}>
        <Title order={2} mb="lg">✏️ Edit Post</Title>
        <Stack spacing="md">
          <CreateEditPostForm
            onSubmit={handleEdit}
            formData={formData}
            initialTitle={title}
            initialBody={body}
          />
        </Stack>
      </Paper>
    </Container>
  );
};

export default EditPostPage;
