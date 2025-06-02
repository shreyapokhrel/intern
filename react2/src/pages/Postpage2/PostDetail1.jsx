import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
} from "@mantine/core";
import { usePostContext } from "../../context/PostContext";

const PostDetail1 = () => {
  const { id } = useParams();
  const { posts } = usePostContext();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPost(null);

    const localPost = posts.find((indvPost) => indvPost.id === Number(id));

    if (localPost) {
      setPost(localPost);
      setLoading(false);
    } else {
      setTimeout(() => {
        setError("Post not found");
        setLoading(false);
      }, 500);
    }
  }, [id, posts]);

  if (loading)
    return <Loader size="xl" variant="dots" style={{ marginTop: "5rem" }} />;
  if (error) return <Notification color="red">{error}</Notification>;
  if (!post) return null;

  return (
    <Container size="md" mt="xl">
      <Paper p="xl" radius="md" shadow="md" withBorder>
        <Title
          order={1}
          style={{ fontWeight: 800, fontSize: "2rem", color: "#1c7ed6" }}
          mb="sm"
        >
          {post.title}
        </Title>

        <Divider mb="lg" />

        <Text size="md" style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
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

export default PostDetail1;
