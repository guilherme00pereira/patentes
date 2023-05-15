import {Table} from "antd";
import { brandTableColumns, brandTableData } from "../../config/data";
import PreTable from "../PreTable.tsx";




const BrandTable = () => {
  return (
      <div className="table-wrapper">
        <PreTable/>
        <Table columns={brandTableColumns} pagination={{position: ["bottomCenter"]}} dataSource={brandTableData} />
      </div>
  )
};

export default BrandTable;