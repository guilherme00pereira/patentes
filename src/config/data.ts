import { BrandSearch } from './types'
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

interface DataType {
  key: string
  class: string
  age: number
  address: string
}

export const brandTableColumns: ColumnsType<DataType> = [
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

export const brandTableData: DataType[] = [
  {
    key: '1',
    class: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    class: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    class: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
]

export const exportSelect: Array<object> = [
    { value: 'pdf', label: '.pdf' },
    { value: 'xlsx', label: '.xlsx' },
]