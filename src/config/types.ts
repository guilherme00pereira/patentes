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

export type FollowTableData = {
  id: string
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

export type RadicalSearchParams = {
  termo: string[];
  classe: string;
  situacao: string;
}

export type DistanceSearchParams = {
  termo: string;
  classe: string;
  situacao: string;
  distance: string;
}

export type PreTableParams = {
  total: number;
  columns: IExcelColumn[];
  dataSource: any[];
}

export type columnType = {
  title: string,
  dataIndex: string,
}

export type resultType = {
  success: boolean,
  message: string,
}