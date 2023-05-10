import {Table} from "rsuite";

const { Column, HeaderCell, Cell } = Table;


const BrandTable = () => {
  return (
    <Table height={400}>
      <Column width={300}>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>
    </Table>
  );
};

export default BrandTable;