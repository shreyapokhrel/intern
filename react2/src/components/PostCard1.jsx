import React from "react";
import { Card, Text, Button, Group, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

const PostCard1 = ({ post }) => {
  const { deletePost } = usePostContext();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
    }
  };

  return (
    <Card withBorder shadow="sm" p="md" radius="md" className="post-card">
      <Group position="apart" align="center" style={{ width: "100%" }}>
        <Box className="title-box">
          <Text
            component={Link}
            to={`/posts/${post.id}`}
            size="lg"
            weight={600}
            className="post-title"
          >
            {post.title}
          </Text>
        </Box>

        <Button
          size="xs"
          color="red"
          variant="light"
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default PostCard1;
