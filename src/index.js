import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import Dashboard from "./components/Admin/Content/Dashboard";
import ManageUser from "./components/Admin/Content/ManageUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/users" element={<User></User>}></Route>
      </Route>
      <Route path="/admin" element={<Admin></Admin>}>
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="manage-users" element={<ManageUser></ManageUser>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
