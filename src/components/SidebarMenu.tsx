import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import {useState} from "react";
import { HiMagnifyingGlass, HiOutlineDocument } from "react-icons/hi2";
import { Link } from "react-router-dom";

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Busca de Marcas</Link>,
    key: 'bm',
    icon: <HiMagnifyingGlass />,
  },
  {
    label: <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>,
    key: 'ap',
    icon: <HiOutlineDocument />,
    disabled: true,
  },
];

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    
      <Menu
        defaultSelectedKeys={['bm']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    
  );
};

export default SidebarMenu;