import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Title,
  Text,
  Loader,
  Notification,
  Button,
  Divider,
  Group,
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, resetPost, setPost } from '../../redux/postSlice';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading, error, posts } = useSelector((state) => state.post);

  const localPost = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    dispatch(resetPost());
    if (localPost) {
      dispatch(setPost(localPost));
    } else {
      dispatch(fetchPost(id));
    }
  }, [id, dispatch, localPost]);

  if (loading)
    return <Loader size="xl" variant="dots" style={{ marginTop: '5rem' }} />;
  if (error) return <Notification color="red">{error}</Notification>;
  if (!post) return null;

  return (
    <Container size="md" mt="xl">
      <Paper p="xl" radius="md" shadow="md" withBorder>
        <Title
          order={1}
          style={{ fontWeight: 800, fontSize: '2rem', color: '#1c7ed6' }}
          mb="sm"
        >
          {post.title}
        </Title>

        <Divider mb="lg" />

        <Text size="md" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
          {post.body}
        </Text>

        <Group position="apart" mt="xl">
          <Button component={Link} to="/posts" variant="outline" color="gray">
            ← Back to Posts
          </Button>

          <Button component={Link} to={`/posts/${post.id}/edit`} color="yellow">
            ✏️ Edit Post
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default PostDetail;
