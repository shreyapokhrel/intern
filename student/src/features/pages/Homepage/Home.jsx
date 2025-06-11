import { Stack, Title, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Stack align="center" mt="xl" spacing="md">
      <Title order={2}>Welcome to Home page</Title>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Stack>
  );
}
