import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import SearchBox from "./searchBox";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Covid extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to={`/stats`}></Link>
              Covid Stats
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/covid`}></Link>
              Covid Table
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="Covid Details"
                >
                  <Menu.Item key="1" to="/stats">
                    <Link to={`/covid`}></Link>
                    Covid Table
                  </Menu.Item>
                  <Menu.Item key="2" to="/covid">
                    <Link to={`/stats`}></Link>
                    Covid Stats
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <SearchBox />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Covid App ©2021 created by Muhammad Wasal Imtiaz
        </Footer>
      </Layout>
    );
  }
}

export default Covid;
