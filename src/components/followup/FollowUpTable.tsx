import {Table} from "antd";
import { followTableColumns, followTableData } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";

const FollowUpTable = () => {
  return (
      <div className="table-wrapper">
        <PreTable/>
        <Table columns={followTableColumns} pagination={{position: ["bottomCenter"]}} dataSource={followTableData} />
      </div>
  );
};

export default FollowUpTable;