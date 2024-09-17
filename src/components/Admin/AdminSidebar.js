import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaGem,
  FaGithub,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import "react-pro-sidebar/dist/css/styles.css";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const AdminSidebar = (props) => {
  const { image, collapsed, rtl, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        // image={image ? sidebarBg : false}
        image={sidebarBg}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <span><DiReact size={"3em"} color={"00bfff"}></DiReact>Amity Shop</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<MdDashboard />}
              suffix={<span className="badge red"></span>}
            >
             <Link to="/admin"> Dashboard</Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title="Features" icon={<FaGem />}>
              <MenuItem> <Link to="/admin/manage-users">Quản lý Users</Link> </MenuItem>
              <MenuItem> <Link to="/admin/quizs">Quản lý Bài Quiz</Link> </MenuItem>
              <MenuItem> <Link to="/admin/questions">Quản lý Câu hỏi</Link> </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              ></span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      ;
    </>
  );
};
export default AdminSidebar;
