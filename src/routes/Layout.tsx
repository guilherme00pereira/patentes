import { useState } from 'react'
import { ConfigProvider, Layout as Container } from 'antd'
import { Outlet } from 'react-router-dom'
import { contentTheme } from '../config/theme.ts'
import Sidebar from '../components/Sidebar.tsx'
import { IconContext } from 'react-icons'
import '@fontsource/barlow'
import { FormActionContext } from '../config/context.tsx'
import { BrandTableData, resultType } from '../config/types.ts'

const { Content } = Container

const Layout = () => {
  const [tableData, setTableData] = useState<BrandTableData[]>([])
  const [blank, setBlank] = useState(true)
  const [renderTable, setRenderTable] = useState(true)
  const [renderResult, setRenderResult] = useState(false)
  const [result, setResult] = useState<resultType>({ success: false, message: '' })
  const [loading, setLoading] = useState(false)

  return (
    <ConfigProvider theme={{ token: { fontFamily: 'Barlow' } }}>
      <Container style={{ minHeight: '100vh' }}>
        <IconContext.Provider value={{ size: '1.25em' }}>
          <Sidebar />
          <Container>
            <ConfigProvider theme={contentTheme}>
              <Content style={{ paddingLeft: '80px', backgroundColor: 'white' }}>
                <FormActionContext.Provider
                  value={{
                    setRenderTable,
                    setLoading,
                    setBlank,
                    setRenderResult,
                    setResult,
                    tableData,
                    setTableData,
                    renderTable,
                    result,
                    loading,
                    blank,
                    renderResult
                  }}
                >
                  <Outlet />
                </FormActionContext.Provider>
              </Content>
            </ConfigProvider>
          </Container>
        </IconContext.Provider>
      </Container>
    </ConfigProvider>
  )
}

export default Layout
