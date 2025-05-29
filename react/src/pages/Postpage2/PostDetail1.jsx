import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../../PostContext';
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

const PostDetail1 = () => {
  const { id } = useParams();
  const { getPostById, setPost, post } = useContext(PostContext);

  useEffect(() => {
    const localPost = getPostById(id);
    if (localPost) setPost(localPost);
    else setPost(null); 
  }, [id]);

  if (!post) return <Notification color="red">Post not found</Notification>;

  return (
    <Container size="md" mt="xl">
      <Paper p="xl" radius="md" shadow="md" withBorder>
        <Title order={1} mb="sm" style={{ fontWeight: 800, fontSize: '2rem', color: '#1c7ed6' }}>
          {post.title}
        </Title>

        <Divider mb="lg" />
        <Text size="md" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{post.body}</Text>

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

export default PostDetail1;
