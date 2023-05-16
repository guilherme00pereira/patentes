import {IExcelColumn} from "antd-table-saveas-excel/app";

export type BrandTableData = {
  id: string;
  class: string;
  process: string;
  brand: string;
  presentation: string;
  situation: string;
  name: string;
  activities: string;
  country: string;
  state: string;
}

export type FollowDataType = {
  key: string
  processo: string
  marca: number
  rpi: string
  dataRpi: string
  complemento: string
}

export type GeneralSearchParams = {
  termo: string;
  classe: string;
  situacao: string;
}

export type PreTableParams = {
  total: number;
  columns: IExcelColumn[];
  dataSource: BrandTableData[];
}

export type columnType = {
  title: string,
  dataIndex: string,
  key: string,
}