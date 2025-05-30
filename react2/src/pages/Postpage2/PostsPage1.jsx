import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Title, Container } from "@mantine/core";
import PostCard1 from "../../components/PostCard1";
import { usePostContext } from "../../context/PostContext";
import PostList1 from "../../components/PostList1";

const PostsPage1 = () => {
  const { posts, loading, error, fetchPosts, firstRender, setFirstRender } =
    usePostContext();

  useEffect(() => {
    if (!firstRender) {
      fetchPosts();
      setFirstRender(true);
    }
  }, [firstRender, fetchPosts, setFirstRender]);

  return (
    <Container size="md" mt="xl">
      <Stack spacing="md">
        <Title order={2}>All Posts</Title>

        <Button component={Link} to="/posts/create" color="blue" mb="md">
          Create New Post
        </Button>

        {loading && <div>Loading posts.</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {!loading && posts.length === 0 && <div>No posts available.</div>}

        {posts.map((post) => (
          <PostCard1 key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
  );
};

export default PostsPage1;
