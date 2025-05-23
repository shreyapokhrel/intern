import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Title, Container } from "@mantine/core";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, resetPosts } from "../../redux/postSlice";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(fetchPosts());
  }, [dispatch]);

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
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
  );
};

export default PostsPage;
