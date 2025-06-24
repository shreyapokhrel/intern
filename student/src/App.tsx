/*  import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";
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
 



 */
import React, { useEffect } from "react";

import { Person, User as IUser } from "./typescript/interface";

import { Status, AddFunc, userProfile } from "./typescript/types";

const user1: Person = {
  firstName: "Shreya",
  lastName: "Pokhrel",
  age: 21,
};
const user2: IUser = {
  id: 101,
  name: "Alex",
  getDetails() {
    return `User: ${this.name} (ID: ${this.id})`;
  },
};

const add: AddFunc = (a, b) => a + b;

function showStatus(status: Status): string {
  if (status === "loading") return "Loading...";
  if (status === "success") return "Success!";
  return "Error!";
}

const App: React.FC = () => {
  const currentStatus: Status = "success";
   useEffect(() => {
    console.log("userProfile:", userProfile);
  }, []);
  

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>
        Hello, {user1.firstName} {user1.lastName}!
      </h1>
      <p>Age: {user1.age}</p>

      <hr />

      <p>{user2.getDetails()}</p>

      <hr />

      <p>Add function result: {add(5, 3)}</p>

      <hr />

      <p>Status message: {showStatus(currentStatus)}</p>
    </div>
  );
};

export default App;
