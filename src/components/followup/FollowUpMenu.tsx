import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import MessageSection from './MessageSection'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Incluir/Excluir Processo`,
    children: <MessageSection />,
  },
  {
    key: '2',
    label: `Busca de processo`,
    children: <MessageSection />,
  },
  {
    key: '3',
    label: `Processos em Acompanhamento`,
    children: <MessageSection />,
  },
]

const FollowUpMenu = () => {
  const onChange = () => {}

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default FollowUpMenu
