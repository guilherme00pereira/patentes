import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import GeneralSection from './sections/GeneralSection.tsx';
import RadicalSection from "./sections/RadicalSection.tsx";
import DistanceSection from "./sections/DistanceSection.tsx";
import {useContext} from "react";
import {BrandContext} from "../../config/context.tsx";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Simples`,
    children: <GeneralSection/>,
  },
  {
    key: '2',
    label: `Radical`,
    children: <RadicalSection/>,
  },
  {
    key: '3',
    label: `Distância`,
    children: <DistanceSection/>,
  },
  {
    key: '4',
    label: `Relatório`,
    children: <GeneralSection/>,
  },
  {
    key: '5',
    label: `Inteligência Artificial`,
    children: <GeneralSection/>,
  },
];

const BrandSearchMenu = () => {
  const {setRenderTable} = useContext(BrandContext);

  const onChange = (activeKey: string) => {
    if (activeKey === '4' || activeKey === '5') {
      setRenderTable(false);
    } else {
      setRenderTable(true);
    }
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
    </div>
  );
};

export default BrandSearchMenu;