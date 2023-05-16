import {Tabs} from 'antd';
import {brandMenuItems} from "../../config/data.tsx";
import {useContext} from "react";
import {BrandContext} from "../../config/context.tsx";



const BrandSearchMenu = () => {
  const {setBlank, setLoading, setRenderTable} = useContext(BrandContext);

  const onChange = (activeKey: string) => {
    if (activeKey === '4' || activeKey === '5') {
      setRenderTable(false);
    } else {
      setRenderTable(true);
    }
    setLoading(false);
    setBlank(true);
  }

  return (
    <div className="tab-wrapper">
      <Tabs defaultActiveKey="1" items={brandMenuItems} onChange={onChange} centered tabBarStyle={{color: "#F2843A"}}/>
    </div>
  );
};

export default BrandSearchMenu;