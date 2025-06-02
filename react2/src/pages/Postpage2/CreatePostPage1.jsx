import React from "react";
import { Container, Paper, Title, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import CreateEditPostForm1 from "./CreateEditPostForm1";
import { usePostContext } from "../../context/PostContext";
import {showNotification} from "@mantine/notifications";
const CreatePostPage1 = () => {
  const { createPost } = usePostContext();
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const newPost = await createPost({ title: data.title, body: data.body });
      showNotification({
        title: "Post Created",
        message: "Your post has been created successfully!",
        color: "green",
        autoClose: 5000,
      });
      navigate(`/posts/${newPost.id}`);
    } catch (error) {
      console.error("Failed to create post", error);
      showNotification({
        title: "Error",
        message: "Failed to create post. Please try again.",
        color: "red",
      });
    }

  };

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
          📝 Create New Post
        </Title>
        <Stack spacing="md">
          <CreateEditPostForm1 onSubmit={handleCreate} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default CreatePostPage1;
