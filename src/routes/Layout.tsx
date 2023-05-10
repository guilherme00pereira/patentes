import { useState } from "react";
import { Layout as Container, Space, Menu } from "antd";
import type { MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { HiMagnifyingGlass, HiOutlineDocument } from "react-icons/hi2";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Container;

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Busca de Marcas</Link>,
    key: 'bm',
    icon: <HiMagnifyingGlass />,
  },
  {
    label: <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>,
    key: 'ap',
    icon: <HiOutlineDocument />,
    disabled: true,
  },
];

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
      <Container style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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