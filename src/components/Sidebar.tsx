import {useContext, useEffect, useState} from 'react'
import { Layout, Button } from 'antd'
import { siderTheme } from '../config/theme.ts'
import { ConfigProvider, Menu } from 'antd'
import { MdOutlineSearch, MdOutlineDescription, MdOutlineLogout } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import {FormActionContext} from "../config/context.tsx";
import { useAuth } from '../hooks/useAuth.tsx'

const { Sider } = Layout

const Sidebar = () => {
    const { setRenderTable, setTableData, setBlank, setRenderResult, setResult, setLoading } = useContext(FormActionContext)
  const [collapsed, setCollapsed] = useState(true)
    const [selectedKey, setSelectedKey] = useState('')
    const location = useLocation()

    const auth = useAuth()

    const logout = () => {
        auth.signOut()
        window.location.href = '/'
    }

    useEffect(() => {
        setTableData([])
        setBlank(true)
        setRenderResult(false)
        setResult({success: false, message: ''})
        setLoading(false)
        setRenderTable(false)
        location.pathname === '/acompanhamento-de-processos' ? setSelectedKey('ap') : setSelectedKey('bm')
    }, [location])

  return (
    <ConfigProvider theme={siderTheme}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={340}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
        style={{
            overflow: 'auto',
          position: 'fixed',
          minHeight: '100vh',
            left: 0,
            bottom: 0,
            top: 0,
          zIndex: 1,
          backgroundColor: '#080C66',
        }}
      >
        <div className="sidebar-menu">
          <Menu selectedKeys={[selectedKey]} mode="inline" theme="dark" inlineCollapsed={collapsed}>
            <Menu.Item
              key="bm"
              icon={<MdOutlineSearch/>}
              className="sidebar-menu-item"
            >
              <Link to="/painel">Busca de Marcas</Link>
            </Menu.Item>
            <Menu.Item
              key="ap"
              icon={<MdOutlineDescription/>}
              className="sidebar-menu-item"
            >
              <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>
            </Menu.Item>
          </Menu>
            <Menu theme="dark" mode="inline" inlineCollapsed={collapsed}>
                <Menu.Item
                    key="lo"
                    icon={<MdOutlineLogout/>}
                    className="sidebar-menu-item"
                >
                    <Button 
                      type='text' 
                      style={{color: 'rgb(255, 255, 255, 0.65)', fontSize: '18px'}}
                      onClick={logout}>Sair</Button>
                </Menu.Item>
            </Menu>
        </div>
      </Sider>
    </ConfigProvider>
  )
}

export default Sidebar
