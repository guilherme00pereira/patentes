import {useEffect, useState} from 'react'
import { Layout } from 'antd'
import { siderTheme } from '../config/theme.ts'
import { ConfigProvider, Menu } from 'antd'
import { MdOutlineSearch, MdOutlineDescription, MdOutlineLogout } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true)
    const [selectedKey, setSelectedKey] = useState('')
    const location = useLocation()

    useEffect(() => {
        location.pathname === '/acompanhamento-de-processos' ? setSelectedKey('ap') : setSelectedKey('bm')
    }, [location])

  return (
    <ConfigProvider theme={siderTheme}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={256}
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
              style={{ margin: '32px 0', height: '40px' }}
            >
              <Link to="/">Busca de Marcas</Link>
            </Menu.Item>
            <Menu.Item
              key="ap"
              icon={<MdOutlineDescription/>}
              style={{ margin: '32px 0', height: '40px' }}
            >
              <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>
            </Menu.Item>
          </Menu>
            <Menu theme="dark" mode="inline" inlineCollapsed={collapsed}>
                <Menu.Item
                    key="lo"
                    icon={<MdOutlineLogout/>}
                    style={{ margin: '32px 0', height: '40px' }}
                >
                    <Link to="logout">Sair</Link>
                </Menu.Item>
            </Menu>
        </div>
      </Sider>
    </ConfigProvider>
  )
}

export default Sidebar
