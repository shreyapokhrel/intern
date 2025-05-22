import React from "react";
import { Paper, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const PostCard = ({ post, number }) => {
  return (
    <Paper
      p="lg"
      mb="md"
      radius="md"
      shadow="xs"
      withBorder
      component={Link}
      to={`/posts/${post.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Text fw={700} size="lg" color="dark.9">
        {number !== undefined ? `${number}. ` : ""}
        . {post.title}
      </Text>
    </Paper>
  );
};

export default PostCard;
