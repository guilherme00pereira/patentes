import { ConfigProvider, Layout as Container } from 'antd'
import { Outlet } from 'react-router-dom'
import {contentTheme} from '../config/theme.ts'
import Sidebar from "../components/Sidebar.tsx";

const { Content } = Container

const Layout = () => {

  return (
    <Container style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Container>
        <ConfigProvider theme={contentTheme}>
          <Content style={{ paddingLeft: '80px', backgroundColor: "white" }}>
            <Outlet />
          </Content>
        </ConfigProvider>
      </Container>
    </Container>
  )
}

export default Layout
