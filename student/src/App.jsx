 import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import Demo from './components/Demo';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Notifications position="top-right" zIndex={2077} />
          <BrowserRouter>
            <Demo />
            <AppRoutes/>
          </BrowserRouter>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
 




// import React from "react";

// import {
//   user1,
//   add as addInterface,
//   names,
//   Dog,
//   circle,
//   user2 as userInterface,
// } from "./typescript/interface";

// import {
//   worker1,
//   userProfile,
//   currentStatus,
//   showStatus,
//   direction,
//   point,
//   userId,
//   user as userType,
//   myStrings,
//   add as addType,
//   worker,
// } from "./typescript/types";

// const App: React.FC = () => {
//   const dog = new Dog("Buddy");

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>User1 Info</h2>
//       <p>
//         Hello, {user1.firstName} {user1.lastName}
//       </p>
//       <p>Age: {user1.age}</p>

//       <h2>Add Function (Interface)</h2>
//       <p>5 + 3 = {addInterface(5, 3)}</p>

//       <h2>Indexable Interface</h2>
//       <p>Second Name: {names[1]}</p>

//       <h2>Dog Class</h2>
//       <p>Name: {dog.name}</p>
//       <p>Sound: {dog.makeSound()}</p>

//       <h2>Circle (Extending Interface)</h2>
//       <p>Color: {circle.color}</p>
//       <p>Radius: {circle.radius}</p>

//       <h2>User2 Info (Interface with Method)</h2>
//       <p>{userInterface.getDetails()}</p>

//       <hr />

//       <h2>Status Info</h2>
//       <p>Status: {currentStatus}</p>
//       <p>Status Message: {showStatus(currentStatus)}</p>

//       <h2>Direction</h2>
//       <p>Direction: {direction}</p>

//       <h2>Worker Info (Intersection Type)</h2>
//       <p>Name: {worker.name}</p>
//       <p>Employee ID: {worker.employeeId}</p>

//       <h2>Point Tuple</h2>
//       <p>
//         Coordinates: ({point[0]}, {point[1]})
//       </p>

//       <h2>User ID</h2>
//       <p>{userId}</p>

//       <h2>User Details (Type with Method)</h2>
//       <p>{userType.getDetails()}</p>

//       <h2>StringArray</h2>
//       <ul>
//         {myStrings.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>

//       <h2>Add Function (Type)</h2>
//       <p>5 + 3 = {addType(5, 3)}</p>

//       <h2>Worker1 Info</h2>
//       <p>Name: {worker1.name}</p>
//       <p>Employee ID: {worker1.employeeId}</p>

//       <h2>User Profile (Recursive Type)</h2>
//       <pre>{JSON.stringify(userProfile, null, 2)}</pre>
//     </div>
//   );
// };


// export default App;
 