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
//import CounterApp from './components/CounterApp.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
//import { Provider } from 'react-redux';
//import store from './redux/store';
import { PostProvider } from './context/PostContext';
import AppRoutes from './routes/AppRoutes';
const App = () => (
  <PostProvider>
    <Router>
      <AppRoutes />
    </Router>
  </PostProvider>
);
/* <Provider store ={store}>
  <Router>
    <AppRoutes/>
    </Router>
    </Provider>
    ); */

export default App;



/* function App() {
  return (
   < div className="App">
    <CounterApp />
    </div> */
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
  
