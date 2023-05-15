import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import IncludeProcess from './sections/IncludeProcess.tsx'
import ProcessSearch from "./sections/ProcessSearch.tsx";
import FollowingProcess from "./sections/FollowingProcess.tsx";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Inclusao/Exclusao de Processos`,
    children: <IncludeProcess />,
  },
  {
    key: '2',
    label: `Busca de Processos`,
    children: <ProcessSearch />,
  },
  {
    key: '3',
    label: `Processos em Acompanhamento`,
    children: <FollowingProcess />,
  },
]

const FollowUpMenu = () => {
  const onChange = () => {
    console.log('change')
  }

  return (
      <div className="tab-wrapper">
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        centered
        tabBarStyle={{ color: '#F2843A' }}
      />
    </div>
  )
}

export default FollowUpMenu
