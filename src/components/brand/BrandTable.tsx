import {Table} from "antd";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Classe',
    dataIndex: 'classe',
    key: 'classe',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Processo',
    dataIndex: 'processo',
    key: 'processo',
  },
  {
    title: 'Marca',
    dataIndex: 'marca',
    key: 'marca',
  },
  {
    title: 'Apresentação',
    dataIndex: 'apresentacao',
    key: 'apresentacao',
  },
  {
    title: 'Situação',
    dataIndex: 'situacao',
    key: 'situacao',
  },
  {
    title: 'Nome/Razão Social',
    dataIndex: 'nome',
    key: 'nome',
  },
  {
    title: 'Atividades',
    dataIndex: 'atividades',
    key: 'atividades',
  },
  {
    title: 'País',
    dataIndex: 'pais',
    key: 'pais',
  },
  {
    title: 'UF',
    dataIndex: 'uf',
    key: 'uf',
  }
];

const data: DataType[] = [
  {
    key: '1',
    classe: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    classe: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    classe: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];


const BrandTable = () => {
  return <Table columns={columns} dataSource={data} />
};

export default BrandTable;