import {Drawer, Table} from "antd";
import { brandTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import {useContext, useState} from "react";
import {FormActionContext} from "../../config/context.tsx";
import Column from "antd/es/table/Column";
import { badgeTypes } from "../../config/data.tsx";


const BrandTable = () => {
    const { tableData } = useContext(FormActionContext)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [drawerContent, setDrawerContent] = useState("")

    const handleOpenDrawer = (content: string) => {
        setDrawerContent(content)
        setOpenDrawer(true)
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }

  return (
      <div className="table-wrapper">
        <PreTable total={tableData.length} columns={brandTableColumns} dataSource={tableData}/>
        <Table pagination={{position: ["bottomCenter"]}} dataSource={tableData} rowKey="id">
            <Column title="Processo" dataIndex="process" width="10%" />
            <Column title="Marca" dataIndex="brand" width="15%" />
            <Column title="Classe" dataIndex="class" />
            <Column title="" dataIndex="presentation" width={50} render={(presentation) => {
                return badgeTypes.find(type => type.key === presentation)?.value()
            }}/>
            <Column title="" dataIndex="situation" width={50} render={(situation) => {
                return badgeTypes.find(type => type.key === situation)?.value()
            }}/>
            <Column title="Situação" dataIndex="situation" width="10%" render={(situation) => {
                switch (situation) {
                    case "EX":
                        return "Extinto/Arquivado";
                    case "EA":
                        return "Em Andamento";
                    case "R":
                        return "Registrado";
                    default:
                        return situation;
                }
            }} />
            <Column title="Nome/Razão Social" dataIndex="name" width="20%" />
            <Column title="Atividades" dataIndex="activities" ellipsis={{showTitle: false}} width={200} render={(activities) => {
                return <div onClick={() => handleOpenDrawer(activities)} style={{cursor: "pointer"}}>{activities}</div>
            }}/>
            <Column title="País" dataIndex="country" />
            <Column title="UF" dataIndex="state" />
        </Table>

          <Drawer
              placement="right"
              onClose={handleCloseDrawer}
              visible={false}
              open={openDrawer}
              key="right"
            >
              {drawerContent}
            </Drawer>
      </div>
  )
};

export default BrandTable;