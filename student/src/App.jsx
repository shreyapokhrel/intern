import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./constants/store";
import "@mantine/core/styles.css";
//import Insertion from "./components/Insertion";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
const App = () => {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications position="top-right" zIndex={2077} />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
