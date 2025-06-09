import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store, persistor } from './stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Notifications position="top-right" zIndex={2077} />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
