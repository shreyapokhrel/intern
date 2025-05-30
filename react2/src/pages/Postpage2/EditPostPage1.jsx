import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Title,
  Stack,
  Loader,
  Notification,
} from "@mantine/core";
import { usePostContext } from "../../context/PostContext";
import CreateEditPostForm1 from "./CreateEditPostForm1";

const EditPostPage1 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, editPost } = usePostContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === Number(id));

    if (foundPost) {
      setPost(foundPost);
      setLoading(false);
    } else {
      setError("Post not found");
      setLoading(false);
    }
  }, [id, posts]);

  const handleEdit = (data) => {
    setLoading(true);
    setError(null);
    try {
      editPost(Number(id), data);
      setPost((prev) => ({ ...prev, ...data }));
      setLoading(false);
      navigate("/posts");
    } catch (err) {
      setError("Failed to update post");
      setLoading(false);
    }
  };

  if (loading) return <Loader size="lg" style={{ marginTop: "5rem" }} />;
  if (error)
    return (
      <Notification color="red" mt="xl">
        {error}
      </Notification>
    );

  return (
    <Container
      size="sm"
      mt="xl"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Paper
        p="xl"
        radius="md"
        shadow="sm"
        withBorder
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Title order={2} mb="lg">
          ✏️ Edit Post
        </Title>
        <Stack spacing="md">
          <CreateEditPostForm1
            onSubmit={handleEdit}
            initialTitle={post.title}
            initialBody={post.body}
          />
        </Stack>
      </Paper>
    </Container>
  );
};

export default EditPostPage1;
