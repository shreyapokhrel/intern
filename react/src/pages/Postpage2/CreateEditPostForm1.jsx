import React, { useState, useEffect } from 'react';
import { TextInput, Textarea, Button, Stack } from '@mantine/core';
import { usePostContext } from '../context/PostContext';

const CreateEditPostForm1 = ({ onSubmit, initialTitle = '', initialBody = '', isEdit = false, postId }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const { addPost, editPost } = usePostContext();

  useEffect(() => {
    setTitle(initialTitle);
    setBody(initialBody);
  }, [initialTitle, initialBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      if (isEdit && postId != null) {
        editPost(postId, { title, body });
      } else {
        addPost({ title, body });
      }

      setTitle('');
      setBody('');

      if (onSubmit) onSubmit(); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="md">
        <TextInput
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          required
        />
        <Textarea
          label="Body"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          required
          minRows={4}
        />
        <Button type="submit">{isEdit ? 'Update' : 'Submit'}</Button>
      </Stack>
    </form>
  );
};

export default CreateEditPostForm1;
