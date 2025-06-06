import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./constants/store";
import "@mantine/core/styles.css";
//import Insertion from "./components/Insertion";
const App = () => {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <AppRoutes />
          
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
