import type {SelectProps} from 'antd'
import {columnType} from './types'
import {TabsProps} from "antd";
import { MdHourglassBottom, MdClose } from 'react-icons/md';
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
  {value: '1', label: 'Todos'},
  {value: '2', label: 'Pedidos Ativos'},
  {value: '3', label: 'Pedidos Extintos/Arquivados'},
]


export const selectClassOptions = () => {
  const createSelectClassOptions: SelectProps['options'] = [
    {
      value: Array.from(Array(45).keys()).map((i) => i + 1).toString(), 
      label: 'Todos'
    }
  ]
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
    dataIndex: 'process',
  },
  {
    title: 'Marca',
    dataIndex: 'brand',
  },
  {
    title: 'Classe',
    dataIndex: 'class',
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
    dataIndex: 'complement',
  },
]

export const exportSelect: Array<object> = [
  //{value: 'pdf', label: '.pdf'},
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
    <div className='situation-template'>{value}{icon()}</div>
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
export const badgeTypes: ITableBadges[] = [
  {key: "Nominativa", value: () => presentationTemplate({value: "N", className: "nominativa"})},
  {key: "Figurativa", value: () => presentationTemplate({value: "F", className: "figurativa"})},
  {key: "Mista", value: () => presentationTemplate({value: "M", className: "mista"})},
  {key: "Registered", value: () => situationTemplate({value: "", icon: registeredIcon})},
  {key: "Expired", value: () => situationTemplate({value: "", icon: expiredIcon})},
  {key: "Application withdrawn", value: () => situationTemplate({value: "", icon: awatingIcon})},
  {key: "Application refused", value: () => situationTemplate({value: "", icon: expiredIcon})},
  {
    key: "Application refused/cancelled/withdraw/expired",
    value: () => situationTemplate({value: "", icon: expiredIcon})
  },
]