import { ConfigProvider, Layout as Container } from 'antd'
import { Outlet } from 'react-router-dom'
import {contentTheme} from '../config/theme.ts'
import Sidebar from "../components/Sidebar.tsx";
import { IconContext } from "react-icons";

const { Content } = Container

const Layout = () => {

  return (
    <Container style={{ minHeight: '100vh' }}>
      <IconContext.Provider value={{ size: "1.25em" }}>
      <Sidebar />
      <Container>
        <ConfigProvider theme={contentTheme}>
          <Content style={{ paddingLeft: '80px', backgroundColor: "white" }}>
            <Outlet />
          </Content>
        </ConfigProvider>
      </Container>
      </IconContext.Provider>
    </Container>
  )
}

export default Layout
