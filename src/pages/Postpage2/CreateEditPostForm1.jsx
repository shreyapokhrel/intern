import React, {useStste, useEffect} from 'react';
import { TextInput, Textarea, Button, Stack } from '@mantine/core';

const CreateEditPostForm1 = ({ postId =null, initialTitle ='', initiaalBody ='', onSuccess}) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  useEffect(() => {
    setTitle(initialTitle);
    setBody(initialBody);
  }, [initialTitle, initialBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onSuccess({ id: postId, title, body });
      setTitle('');
      setBody('');
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
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}