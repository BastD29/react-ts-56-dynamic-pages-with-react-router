import { useState } from "react";
import Content from "../../features/Content/Content";
import Header from "../../features/Header/Header";
import Sidebar from "../../features/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import style from "./DashboardLayout.module.scss";

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style["dashboard-layout"]}>
      <Header />
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Content isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <Outlet />
      </Content>
    </div>
  );
}
