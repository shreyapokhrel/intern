import React, { useState } from 'react';
import {
  Paper,
  Button,
  Container,
  Title,
  ScrollArea,
  Stack,
  Box,
  useMantineTheme,
} from '@mantine/core';
import Home from '../pages/Home';
import StudentList from '../pages/StudentList';

export default function PostCard() {
  const [activePage, setActivePage] = useState('home');
  const theme = useMantineTheme();

  const buttonData = [
    { label: 'Home', color: theme.colors.blue[6], page: 'home' },
    { label: 'Student List', color: theme.colors.teal[6], page: 'students' },
  ];

  return (
    <Container size="md" py="xl">
      <Paper
        shadow="md"
        padding="xl"
        radius="md"
        style={{
          minHeight: 550,
          display: 'flex',
          gap: theme.spacing.xl,
        }}
      >
        
        <Stack
          spacing="md"
          style={{
            minWidth: 140,
            borderRight: `1px solid ${theme.colors.blue[3]}`,
            paddingRight: theme.spacing.md,
          }}
        >
          {buttonData.map(({ label, color, page }) => (
            <Button
              key={page}
              size="sm"
              color="gray"
              variant="subtle"
              onClick={() => setActivePage(page)}
              radius="md"
              styles={{
                root: {
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  borderLeft: `5px solid ${activePage === page ? color : 'transparent'}`,
                  paddingLeft: theme.spacing.sm,
                  transition: 'border-color 0.3s ease',
                  backgroundColor: activePage === page ? theme.colors.gray[0] : 'transparent',
                  '&:hover': {
                    backgroundColor: theme.colors.gray[1],
                  },
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>

    
        <Box style={{ flexGrow: 1, textAlign: 'center' }}>
         
          <ScrollArea style={{ height: 450, paddingRight: theme.spacing.md }}>
            {activePage === 'home' && <Home />}
            {activePage === 'students' && <StudentList />}
          </ScrollArea>
        </Box>
      </Paper>
    </Container>
  );
}
