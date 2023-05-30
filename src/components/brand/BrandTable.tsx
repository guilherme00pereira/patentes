import {Table} from "antd";
import { brandTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import {useContext} from "react";
import {FormActionContext} from "../../config/context.tsx";
import Column from "antd/es/table/Column";
import { badgeTypes } from "../../config/data.tsx";
import {usePDF} from '@react-pdf/renderer'
import { BrandTableData } from "../../config/types.ts";
import PdfDoc from "../PdfDoc.tsx";

const TableContent = ({data}: {data: BrandTableData[]}) => {
    return (
        <Table pagination={{position: ["bottomCenter"]}} dataSource={data}>
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
    )
}


const BrandTable = () => {
    const { tableData } = useContext(FormActionContext)

    const [instance] = usePDF({ document: <PdfDoc children={<TableContent data={tableData} />} /> });

  const exportPdf = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.open(instance.url, '_blank', 'noreferrer')
  }

  return (
      <div className="table-wrapper">
        <PreTable total={tableData.length} columns={brandTableColumns} dataSource={tableData} export={exportPdf}/>
        <TableContent data={tableData} />
      </div>
  )
};

export default BrandTable;