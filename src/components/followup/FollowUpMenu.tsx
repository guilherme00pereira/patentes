import { Tabs } from 'antd'
import { followupMenuItems } from "../../config/data.tsx";
import {useContext} from "react";
import {FormActionContext} from "../../config/context.tsx";

const FollowUpMenu = () => {
const { setRenderTable, setTableData, setBlank, setRenderResult, setResult, setLoading } = useContext(FormActionContext)

  const onChange = () => {
    setRenderTable(false)
    setTableData([])
    setBlank(true)
    setRenderResult(false)
    setResult({success: false, message: ''})
    setLoading(false)
  }

  return (
      <div className="tab-wrapper">
      <Tabs
        defaultActiveKey="1"
        items={followupMenuItems}
        onChange={onChange}
        centered
        tabBarStyle={{ color: '#F2843A' }}
      />
    </div>
  )
}

export default FollowUpMenu
