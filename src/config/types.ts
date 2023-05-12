export type BrandSearch = {
  term: string,
  class: string[],
  situation: string,
  distance?: number 
}

export type BrandTableData = {
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