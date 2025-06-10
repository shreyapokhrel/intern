import { AppShell, NavLink, Text, Box, useMantineTheme,Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {logout} from "../constants/studentSlice";
export default function PublicWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useMantineTheme();
  const dispatch = useDispatch();
   const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

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
          paddingLeft: theme.spacing.md,
        }}
      >
        
        <Text size="xl" fw={600}>
          Student Management System
        </Text>
         <Button variant="light" color="red" size="xs" onClick={handleLogout}>
          Logout
        </Button>
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
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
