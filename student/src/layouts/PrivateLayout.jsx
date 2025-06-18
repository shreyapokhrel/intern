import {
  AppShell,
  NavLink,
  Text,
  Box,
  useMantineTheme,
  Button,
  Group,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../stores/authSlice";
import { IconLogout, IconSun, IconMoonStars } from "@tabler/icons-react";
export default function PrivateLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  function UserProfile() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return null;
    return (
      <Group spacing="sm">
        <Text size="sm" fw={500}>
          {user.email}
        </Text>
      </Group>
    );
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm" }}
      padding="md"
      styles={{
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
        },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: theme.colors.blue[6],
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: theme.spacing.md,
        }}
      >
        <Text size="xl" fw={600}>
          Student Management System
        </Text>
        <Group spacing="md">
          <UserProfile />
          <Button leftIcon={<IconLogout size={16} />} onClick={handleLogout}>
            Logout
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Box>
          <NavLink
            label="Home"
            active={location.pathname === "/"}
            onClick={() => navigate("/")}
            color="blue"
            variant="light"
            radius="md"
            mb="sm"
          />
          <NavLink
            label="Student List"
            active={location.pathname.startsWith("/students")}
            onClick={() => navigate("/students")}
            color="teal"
            variant="light"
            radius="md"
          />

          <NavLink
            label="Attendance"
            active={location.pathname === "/attendance"}
            onClick={() => navigate("/attendance")}
            color="grape"
            variant="light"
            radius="md"
            mt="sm"
          />
          <NavLink label="About" onClick={() => navigate("/about")} />
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
