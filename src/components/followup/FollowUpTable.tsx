import {Table} from "antd";
import {useContext} from "react";
import {FormActionContext} from "../../config/context.tsx";
import { followTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";
import {usePDF} from '@react-pdf/renderer'
import { BrandTableData } from "../../config/types.ts";
import PdfDoc from "../PdfDoc.tsx";

const TableContent = ({data}: {data: BrandTableData[]}) => {
return <Table columns={followTableColumns} pagination={{position: ["bottomCenter"]}} dataSource={data} />
}

const FollowUpTable = () => {
  const { tableData } = useContext(FormActionContext)
  const [instance] = usePDF({ document: <PdfDoc children={<TableContent data={tableData} />} /> });

  const exportPdf = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.open(instance.url, '_blank', 'noreferrer')
  }

  return (
      <div className="table-wrapper">
        <PreTable total={followTableColumns.length} columns={followTableColumns} dataSource={tableData} export={exportPdf}/>
        <TableContent data={tableData} />
      </div>
  );
};

export default FollowUpTable;