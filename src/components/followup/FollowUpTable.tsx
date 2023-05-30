import {Table} from "antd";
import {useContext} from "react";
import {FormActionContext} from "../../config/context.tsx";
import { followTableColumns } from "../../config/data.tsx";
import PreTable from "../PreTable.tsx";

const FollowUpTable = () => {
  const { tableData } = useContext(FormActionContext)

  return (
      <div className="table-wrapper">
        <PreTable total={followTableColumns.length} columns={followTableColumns} dataSource={tableData}/>
        <Table columns={followTableColumns} pagination={{position: ["bottomCenter"]}} dataSource={tableData} />
      </div>
  );
};

export default FollowUpTable;