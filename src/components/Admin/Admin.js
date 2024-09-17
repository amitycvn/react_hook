import AdminSidebar from "./AdminSidebar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <AdminSidebar collapsed={collapsed}></AdminSidebar>
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
        </div>
        <div className="admin-main">
            Admin content
        </div>
            <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Admin;
