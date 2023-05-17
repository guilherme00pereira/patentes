import type {SelectProps} from 'antd'
import {columnType, FollowDataType} from './types'
import {TabsProps} from "antd";
import GeneralSection from "../components/brand/sections/GeneralSection.tsx";
import RadicalSection from "../components/brand/sections/RadicalSection.tsx";
import DistanceSection from "../components/brand/sections/DistanceSection.tsx";
import IncludeProcess from "../components/followup/sections/IncludeProcess.tsx";
import ProcessSearch from "../components/followup/sections/ProcessSearch.tsx";
import FollowingProcess from "../components/followup/sections/FollowingProcess.tsx";


export const brandMenuItems: TabsProps['items'] = [
  {
    key: '1',
    label: `Simples`,
    children: <GeneralSection/>,
  },
  {
    key: '2',
    label: `Radical`,
    children: <RadicalSection/>,
  },
  {
    key: '3',
    label: `Distância`,
    children: <DistanceSection/>,
  },
  {
    key: '4',
    label: `Relatório`,
    children: <GeneralSection/>,
  },
  {
    key: '5',
    label: `Inteligência Artificial`,
    children: <GeneralSection/>,
  },
];

export const followupMenuItems: TabsProps['items'] = [
  {
    key: '1',
    label: `Inclusao/Exclusao de Processos`,
    children: <IncludeProcess/>,
  },
  {
    key: '2',
    label: `Busca de Processos`,
    children: <ProcessSearch/>,
  },
  {
    key: '3',
    label: `Processos em Acompanhamento`,
    children: <FollowingProcess/>,
  },
];

export const selectOptions: SelectProps['options'] = [
  {value: 'td', label: 'Todos'},
  {value: 'pa', label: 'Pedidos Ativos'},
  {value: 'pe', label: 'Pedidos Extintos/Arquivados'},
]

const createSelectClassOptions: SelectProps['options'] = [{value: '0', label: 'Todos'}]

export const selectClassOptions = () => {
  for (let i = 1; i <= 45; i++) {
    createSelectClassOptions.push({
      label: i.toString(),
      value: i.toString(),
    })
  }
  return createSelectClassOptions
}

export const brandTableColumns: columnType[] = [
  {
    title: 'Classe',
    dataIndex: 'class',
    key: 'class',
  },
  {
    title: 'Processo',
    dataIndex: 'process',
    key: 'process',
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Apresentação',
    dataIndex: 'presentation',
    key: 'presentation',
  },
  {
    title: 'Situação',
    dataIndex: 'situation',
    key: 'situation',
  },
  {
    title: 'Nome/Razão Social',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Atividades',
    dataIndex: 'activities',
    key: 'activities',
  },
  {
    title: 'País',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'UF',
    dataIndex: 'state',
    key: 'state',
  },
]


export const followTableColumns: columnType[] = [
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
  {value: 'pdf', label: '.pdf'},
  {value: 'xlsx', label: '.xlsx'},
]

interface ITableBadges {
  key: string;
  value: () => React.ReactElement;
}

const presentationTemplate = ({value, className}: { value: string, className: string }) => {
  return (
    <div className={`badge-table ${className}`}><span>{value}</span></div>
  )
}

const situationTemplate = ({value, className}: { value: string, className: string }) => {
  return (
    <div className={className}><span>{value}</span></div>
  )
}

export const badgeTypes: ITableBadges[] = [
  {key: "Nominativa", value: () => presentationTemplate({value: "N", className: "nominativa"})},
  {key: "Figurativa", value: () => presentationTemplate({value: "F", className: "figurativa"})},
  {key: "Mista", value: () => presentationTemplate({value: "M", className: "mista"})},
  {key: "Registered", value: () => situationTemplate({value: "Registrado", className: "registrado"})},
  {key: "Expired", value: () => situationTemplate({value: "Extinto/Arquivado", className: "arquivado"})},
  {key: "Application withdrawn", value: () => situationTemplate({value: "Extinto/Arquivado", className: "arquivado"})},
  {key: "Application refused", value: () => situationTemplate({value: "Extinto/Arquivado", className: "arquivado"})},
  {
    key: "Application refused/cancelled/withdraw/expired",
    value: () => situationTemplate({value: "Extinto/Arquivado", className: "arquivado"})
  },

]

export const lorem = `
Lorem ipsum dolor sit amet. 33 minima porro sed necessitatibus dolorem et labore minus. Qui iste maiores est impedit amet ad galisum quis. Eum voluptatem exercitationem eos maiores culpa vel ratione soluta et voluptatem cupiditate ex rerum architecto eos neque aspernatur. Qui mollitia magnam eum eius Quis et corrupti fugiat aut quas quia non corrupti consequatur in dolorem voluptas. Non rerum voluptatum cum expedita odio est officiis sint sit ducimus labore sit soluta corrupti sit vero saepe At sunt galisum. Est nobis repellendus sed neque fugiat sit dolorem earum eum earum voluptatum ab dolorem magni ab repudiandae harum id fuga facere? Eos iure libero ut magni facere aut inventore tenetur non enim obcaecati aut nostrum quas.
Vel dolores repellendus ut modi perferendis qui corrupti dolorem qui consequatur rerum qui dolorem alias. Et soluta molestias ut officiis numquam est unde dignissimos quo consectetur Quis et nemo similique hic delectus aperiam. Eos excepturi quasi id expedita quas id deserunt cupiditate aut nobis odio?
`