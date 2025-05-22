/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' */
import React from "react";
//import "./index.css";
//import Effect from "./components/Effect";
//import { FunctionalGreeting } from "./components/FunctionalGreeting";
//import { Form } from "./components/Form";
//import Fetchapi from "./components/Fetchapi";
//import Axios from './components/Axios';
//import Axiospost from "./components/Axiospost";
//import AppRoutes from './routes/AppRoutes';
//import { BrowserRouter } from 'react-router-dom';
//import ErrorStates from "./components/ErrorStates";
//import { MyProvider } from "./components/MyContext";
//import Page1 from "./pages/Page1";
//import Page2 from "./pages/Page2";
import CounterApp from './components/CounterApp.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import './App.css';

function App() {
  //const seatNumbers =[1,4,3,5];
  //const [count, setCount] = useState(0)
  /* const person={
  name: "Rob",
  message:"Hi there!",
  emoji:"👋",
  seatNumbers:[1,2,3,4],
} */
  return (
   < div className="App">
    <CounterApp />
    </div>
   /*  <MyProvider>
      <Router>
        <nav style={{ padding: "10px", background: "#ccc" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Page 1
          </Link>
          <Link to="/page2">Page 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </MyProvider> */
  );
}
/*  { <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  ) } */

export default App;
/* import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
  */
