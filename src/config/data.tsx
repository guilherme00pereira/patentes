import type {SelectProps} from 'antd'
import {columnType, FollowTableData} from './types'
import {TabsProps} from "antd";
import { MdHourglassBottom, MdClose, MdCheck } from 'react-icons/md';
import GeneralSection from "../components/brand/sections/GeneralSection.tsx";
import RadicalSection from "../components/brand/sections/RadicalSection.tsx";
import DistanceSection from "../components/brand/sections/DistanceSection.tsx";
import IncludeProcess from "../components/followup/sections/IncludeProcess.tsx";
import ProcessSearch from "../components/followup/sections/ProcessSearch.tsx";
import FollowingProcess from "../components/followup/sections/FollowingProcess.tsx";
import SearchButton from "../components/brand/form/SearchButton.tsx";
import React from "react";


export const brandMenuItems: TabsProps['items'] = [
  {
    key: '1',
    label: `Simples`,
    children: <GeneralSection button={<SearchButton showText source='g' />}/>,
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
    children: <GeneralSection button={<SearchButton showText source='e' />}/>,
  },
  {
    key: '5',
    label: `Inteligência Artificial`,
    children: <GeneralSection button={<SearchButton showText source='i' />}/>,
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
  },
  {
    title: 'Processo',
    dataIndex: 'process',
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
  },
  {
    title: 'Apresentação',
    dataIndex: 'presentation',
  },
  {
    title: 'Situação',
    dataIndex: 'situation',
  },
  {
    title: 'Nome/Razão Social',
    dataIndex: 'name',
  },
  {
    title: 'Atividades',
    dataIndex: 'activities',
  },
  {
    title: 'País',
    dataIndex: 'country',
  },
  {
    title: 'UF',
    dataIndex: 'state',
  },
]


export const followTableColumns: columnType[] = [
  {
    title: 'Processo',
    dataIndex: 'processo',
  },
  {
    title: 'Marca',
    dataIndex: 'marca',
  },
  {
    title: 'RPI',
    dataIndex: 'rpi',
  },
  {
    title: 'Data RPI',
    dataIndex: 'dataRpi',
  },
  {
    title: 'Complemento',
    dataIndex: 'complemento',
  },
]

export const followTableData: FollowTableData[] = [
  {
    id: '1',
    processo: 'John Brown',
    marca: 32,
    rpi: 'New York No. 1 Lake Park',
    dataRpi: 'New York No. 1 Lake Park',
    complemento: 'New York No. 1 Lake Park',
  },
  {
    id: '2',
    processo: 'Jim Green',
    marca: 42,
    rpi: 'London No. 1 Lake Park',
    dataRpi: 'London No. 1 Lake Park',
    complemento: 'London No. 1 Lake Park',
  },
  {
    id: '3',
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

const situationTemplate = ({value, icon}: { value: string, icon: () => any }) => {
  return (
    <div style={{display: "flex"}}>{value}{icon()}</div>
  )
}

const registeredIcon = () => {
  return (
    <span className='registered-icon'>R</span>
  )
}

const expiredIcon = () => {
  return (
    <MdClose style={{color: "#DC3545"}}/>
  )
}

const awatingIcon = () => {
  return (
    <MdHourglassBottom style={{color: "#FFC107"}} />
  )
}

const activeIcon = () => {
  return (
    <MdCheck style={{color: "#28A745"}} />
  )
}

export const badgeTypes: ITableBadges[] = [
  {key: "Nominativa", value: () => presentationTemplate({value: "N", className: "nominativa"})},
  {key: "Figurativa", value: () => presentationTemplate({value: "F", className: "figurativa"})},
  {key: "Mista", value: () => presentationTemplate({value: "M", className: "mista"})},
  {key: "Registered", value: () => situationTemplate({value: "Registrado", icon: registeredIcon})},
  {key: "Expired", value: () => situationTemplate({value: "Extinto/Arquivado", icon: expiredIcon})},
  {key: "Application withdrawn", value: () => situationTemplate({value: "Extinto/Arquivado", icon: awatingIcon})},
  {key: "Application refused", value: () => situationTemplate({value: "Extinto/Arquivado", icon: expiredIcon})},
  {
    key: "Application refused/cancelled/withdraw/expired",
    value: () => situationTemplate({value: "Extinto/Arquivado", icon: activeIcon})
  },

]

export const lorem = `
Lorem ipsum dolor sit amet. 33 minima porro sed necessitatibus dolorem et labore minus. Qui iste maiores est impedit amet ad galisum quis. Eum voluptatem exercitationem eos maiores culpa vel ratione soluta et voluptatem cupiditate ex rerum architecto eos neque aspernatur. Qui mollitia magnam eum eius Quis et corrupti fugiat aut quas quia non corrupti consequatur in dolorem voluptas. Non rerum voluptatum cum expedita odio est officiis sint sit ducimus labore sit soluta corrupti sit vero saepe At sunt galisum. Est nobis repellendus sed neque fugiat sit dolorem earum eum earum voluptatum ab dolorem magni ab repudiandae harum id fuga facere? Eos iure libero ut magni facere aut inventore tenetur non enim obcaecati aut nostrum quas.
Vel dolores repellendus ut modi perferendis qui corrupti dolorem qui consequatur rerum qui dolorem alias. Et soluta molestias ut officiis numquam est unde dignissimos quo consectetur Quis et nemo similique hic delectus aperiam. Eos excepturi quasi id expedita quas id deserunt cupiditate aut nobis odio?
`