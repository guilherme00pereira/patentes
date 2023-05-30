import {IExcelColumn} from "antd-table-saveas-excel/app";

export type BrandTableData = {
  id: string;
  class: string;
  process: string;
  brand: string;
  presentation?: string;
  situation?: string;
  name?: string;
  activities?: string;
  country?: string;
  state?: string;
  rpi?: string
  dataRpi?: string
}


export type GeneralSearchParams = {
  termo: string;
  classe: string;
  situacao: string;
}

export type RadicalSearchParams = {
  and01: string;
  and02?: string;
  and03?: string;
  and04?: string;
  and05?: string;
  and06?: string;
  not01?: string;
  not02?: string;
  not03?: string;
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