import {Table} from "antd";
import { brandTableColumns, brandTableData } from "../../config/data";




const BrandTable = () => {
  return <Table columns={brandTableColumns} dataSource={brandTableData} />
};

export default BrandTable;