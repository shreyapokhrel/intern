/* import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client ={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>
);
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { user1 } from"./typescript/interface";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App user={user1} />);
