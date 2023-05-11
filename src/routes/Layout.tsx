import { useState } from "react";
import { Layout as Container, Menu } from "antd";
import type { MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { SearchOutlined, FileTextOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Container;

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Busca de Marcas</Link>,
    key: 'bm',
    icon: <SearchOutlined />,
  },
  {
    label: <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>,
    key: 'ap',
    icon: <FileTextOutlined />,
  },
];

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
      <Container style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo">Logo</div>
          <Menu
            defaultSelectedKeys={['bm']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
        <Container>
          <Header>Header</Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </Container>
  );
};

export default Layout;