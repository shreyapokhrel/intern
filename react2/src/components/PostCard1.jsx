import React from "react";
import { Card, Text, Button, Group, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";
import {showNotification} from "@mantine/notifications";
const PostCard1 = ({ post }) => {
  const { deletePost } = usePostContext();

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(post.id);
        showNotification({
          title: "Post Deleted",
          message: "The post was deleted successfully.",
          color: "red",
          autoClose: 5000,
        });
      } catch (error) {
        showNotification({
          title: "Error",
          message: "Failed to delete the post.",
          color: "red",
        });
      }
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
          color="blue"
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
