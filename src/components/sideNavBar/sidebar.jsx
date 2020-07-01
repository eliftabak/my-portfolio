import React from 'react';
import "../../App.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
 PieChartOutlined,
 DesktopOutlined,
 ContainerOutlined
} from "@ant-design/icons";

export default function Sidebar() {
 return (
  <div className="sidenav">
   <Menu
    className="menu-container"
    defaultSelectedKeys={["1"]}
    defaultOpenKeys={["sub1"]}
    mode="inline"
   >
    <Menu.Item key="1" icon={<PieChartOutlined />} />
    <Menu.Item key="2" icon={<DesktopOutlined />} />
    <Menu.Item key="3" icon={<ContainerOutlined />} />
   </Menu>
   
  </div>
 )
}
