import { Tabs } from 'antd'
import { followupMenuItems } from "../../config/data.tsx";


const FollowUpMenu = () => {
  const onChange = () => {
    console.log('change')
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
