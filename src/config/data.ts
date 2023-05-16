import type { SelectProps } from 'antd'
import type { ColumnsType } from 'antd/es/table'

export const selectOptions: SelectProps['options'] = [
  { value: 'td', label: 'Todos' },
  { value: 'pa', label: 'Pedidos Ativos' },
  { value: 'pe', label: 'Pedidos Extintos/Arquivados' },
]

const createSelectClassOptions: SelectProps['options'] = [{ value: '0', label: 'Todos' }]

export const selectClassOptions = () => {
  for (let i = 1; i <= 45; i++) {
    createSelectClassOptions.push({
      label: i.toString(),
      value: i.toString(),
    })
  }
  return createSelectClassOptions
}

interface BrandDataType {
  key: string
    class: string
    processo: string
    marca: number
    apresentacao: string
    situacao: string
    nome: string
    atividades: string
    pais: string
    uf: string
}

interface FollowDataType {
    key: string
    processo: string
    marca: number
    rpi: string
    dataRpi: string
    complemento: string
}

export const brandTableColumns: ColumnsType<BrandDataType> = [
  {
    title: 'Classe',
    dataIndex: 'class',
    key: 'classe',
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
  },
]

export const brandTableData: BrandDataType[] = [
  {
    key: '1',
    class: 'John Brown',
    processo: 'John Brown',
    marca: 32,
    apresentacao: 'New York No. 1 Lake Park',
    situacao: 'New York No. 1 Lake Park',
    nome: 'New York No. 1 Lake Park',
    atividades: 'New York No. 1 Lake Park',
    pais: 'New York No. 1 Lake Park',
uf: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    class: 'Jim Green',
    processo: 'Jim Green',
    marca: 42,
    apresentacao: 'London No. 1 Lake Park',
    situacao: 'London No. 1 Lake Park',
    nome: 'London No. 1 Lake Park',
    atividades: 'London No. 1 Lake Park',
    pais: 'London No. 1 Lake Park',
    uf: 'London No. 1 Lake Park',
  },
]

export const followTableColumns: ColumnsType<FollowDataType> = [
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
        title: 'RPI',
        dataIndex: 'rpi',
        key: 'rpi',
    },
    {
        title: 'Data RPI',
        dataIndex: 'dataRpi',
        key: 'dataRpi',
    },
    {
        title: 'Complemento',
        dataIndex: 'complemento',
        key: 'complemento',
    },
]

export const followTableData: FollowDataType[] = [
    {
        key: '1',
        processo: 'John Brown',
        marca: 32,
        rpi: 'New York No. 1 Lake Park',
        dataRpi: 'New York No. 1 Lake Park',
        complemento: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        processo: 'Jim Green',
        marca: 42,
        rpi: 'London No. 1 Lake Park',
        dataRpi: 'London No. 1 Lake Park',
        complemento: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        processo: 'Joe Black',
        marca: 32,
        rpi: 'Sydney No. 1 Lake Park',
        dataRpi: 'Sydney No. 1 Lake Park',
        complemento: 'Sydney No. 1 Lake Park',
    }
]
export const exportSelect: Array<object> = [
    { value: 'pdf', label: '.pdf' },
    { value: 'xlsx', label: '.xlsx' },
]