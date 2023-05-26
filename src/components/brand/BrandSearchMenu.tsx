import { Tabs } from 'antd'
import { brandMenuItems } from '../../config/data.tsx'
import { useContext } from 'react'
import { FormActionContext } from '../../config/context.tsx'

const BrandSearchMenu = () => {
  const { setRenderTable, setTableData, setBlank, setRenderResult, setResult, setLoading } =
    useContext(FormActionContext)

  const onChange = (activeKey: string) => {
    if (activeKey === '4' || activeKey === '5') {
      setRenderTable(false)
    } else {
      setRenderTable(true)
    }
    setTableData([])
    setBlank(true)
    setRenderResult(false)
    setResult({ success: false, message: '' })
    setLoading(false)
  }

  return (
    <div className="tab-wrapper">
      <Tabs
        defaultActiveKey="1"
        items={brandMenuItems}
        onChange={onChange}
        centered
        tabBarStyle={{ color: '#F2843A' }}
      />
    </div>
  )
}

export default BrandSearchMenu
