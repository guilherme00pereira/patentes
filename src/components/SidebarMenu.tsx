import { Sidenav, Nav } from "rsuite";
import {useState} from "react";
import { HiMagnifyingGlass, HiOutlineDocument } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div>
      <Sidenav expanded={expanded}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<HiMagnifyingGlass />}>
              <Link to='/'>Busca de Marcas</Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<HiOutlineDocument />}>
                <Link to="acompanhamento-de-processos">Acompanhamento de Processos</Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default SidebarMenu;