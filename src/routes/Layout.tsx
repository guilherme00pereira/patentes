import {Container, Content, Header, Sidebar} from "rsuite";
import {Outlet} from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu.tsx";

const Layout = () => {
  return (
    <div className="sidebar-page">
      <Container>
        <Sidebar>
          <SidebarMenu />
        </Sidebar>
        <Container>
          <Header>Header</Header>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;