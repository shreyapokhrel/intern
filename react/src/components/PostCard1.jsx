import React from "react";
import { Card, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";

const PostCard1 = ({ post }) => {
  const { deletePost } = usePosts();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
    }
  };

  return (
    <Card
      withBorder
      shadow="sm"
      p="md"
      className="post-card-hover"
      style={{ position: "relative" }}
    >
      <Group position="apart" align="center">
        <Text
          component={Link}
          to={`/posts/${post.id}`}
          size="lg"
          weight={600}
          style={{ color: "#000", textDecoration: "none", cursor: "pointer" }}
        >
          . {post.title}
        </Text>

        <Button
          size="xs"
          color="red"
          variant="light"
          onClick={handleDelete}
          className="hover-delete-button"
        >
          Delete
        </Button>
      </Group>
    </Card>
  );
};

export default PostCard1;
