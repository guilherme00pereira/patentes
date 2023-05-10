import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SimpleSearchSection from './SimpleSearchSection';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Simples`,
    children: <SimpleSearchSection />,
  },
  {
    key: '2',
    label: `Radical`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Distância`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `Relatório`,
    children: `Content of Tab Pane 4`,
  },
  {
    key: '5',
    label: `Inteligência Artificial`,
    children: `Content of Tab Pane 5`,
  },
];

const BrandSearchMenu = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default BrandSearchMenu;