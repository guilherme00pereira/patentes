import {Table} from "antd";
import { brandTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import {useContext} from "react";
import {BrandContext} from "../../config/context.tsx";
import Column from "antd/es/table/Column";
import { badgeTypes } from "../../config/data.tsx";


const BrandTable = () => {
    const { tableData } = useContext(BrandContext)

  return (
      <div className="table-wrapper">
        <PreTable total={tableData.length} columns={brandTableColumns} dataSource={tableData}/>
        <Table pagination={{position: ["bottomCenter"]}} dataSource={tableData}>
            <Column title="Classe" dataIndex="class"/>
            <Column title="Processo" dataIndex="process"/>
            <Column title="Marca" dataIndex="brand"/>
            <Column title="Apresentação" dataIndex="presentation" render={(presentation) => {
                return badgeTypes.find(type => type.key === presentation)?.value()
            }}/>
            <Column title="Situação" dataIndex="situation" render={(situation) => {
                return badgeTypes.find(type => type.key === situation)?.value()
            }}/>
            <Column title="Nome/Razão Social" dataIndex="name"/>
            <Column title="Atividades" dataIndex="activities"/>
            <Column title="País" dataIndex="country"/>
            <Column title="UF" dataIndex="state"/>
        </Table>
      </div>
  )
};

export default BrandTable;