import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Title } from "@mantine/core";
import PostCard from "../../components/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Stack spacing="md">
        <Title order={2}>All Posts</Title>

        <Button component={Link} to="/posts/create" color="blue" mb="md">
          Create New Post
        </Button>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </div>
  );
};

export default PostsPage;
