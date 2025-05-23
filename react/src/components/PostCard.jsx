import React from 'react';
import { Card, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/postSlice';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(post.id));
    }
  };

  return (
    <Card withBorder shadow="sm" p="md">
      <Group position="apart" align="center">
        <Text
          component={Link}
          to={`/posts/${post.id}`}
          size="lg"
          weight={600}
          style={{ color: '#000', textDecoration: 'none', cursor: 'pointer' }}
        >
         . {post.title}
        </Text>

        <Button
          size="xs"
          color="red"
          variant="light"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default PostCard;
