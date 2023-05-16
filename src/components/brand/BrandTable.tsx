import {Table} from "antd";
import { brandTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import {useContext} from "react";
import {BrandContext} from "../../config/context.tsx";
import Column from "antd/es/table/Column";

const BrandTable = () => {
    const { tableData } = useContext(BrandContext)

    const renderPresentationBadge = (presentation: string) => {
        switch (presentation) {
            case "Nominativa":
                return <div className="badge-table nominativa"><span>N</span></div>
            case "Figurativa":
                return <div className="badge-table figurativa"><span>F</span></div>
            case "Mista":
                return <div className="badge-table mista"><span>M</span></div>
        }
    }

    const renderSituationBadge = (situation: string) => {
        switch (situation) {
            case "Registered":
                return <div className=""><span>Registrado</span></div>
            default:
                return <div className=""></div>
        }
    }

  return (
      <div className="table-wrapper">
        <PreTable total={tableData.length} columns={brandTableColumns} dataSource={tableData}/>
        <Table pagination={{position: ["bottomCenter"]}} dataSource={tableData}>
            <Column title="Classe" dataIndex="class"/>
            <Column title="Processo" dataIndex="process"/>
            <Column title="Marca" dataIndex="brand"/>
            <Column title="Apresentação" dataIndex="presentation" render={(presentation) => {
                return renderPresentationBadge(presentation)
            }}/>
            <Column title="Situação" dataIndex="situation" render={(situation) => {
                return renderSituationBadge(situation)
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