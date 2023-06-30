import { exportSelect } from '../config/data.tsx'
import { Select } from 'antd'
import { Excel } from 'antd-table-saveas-excel'
import {PreTableParams} from "../config/types.ts";
//import {usePDF} from '@react-pdf/renderer'
//import PdfDoc from "./PdfDoc.tsx";



const PreTable = (props: PreTableParams) => {
  //const [instance] = usePDF({ document: <PdfDoc /> })!;

  const handleChange = (value: string) => {
    if (value === 'xlsx') {
      const excel = new Excel()
      excel
        .addSheet('export')
        .addColumns(props.columns)
          .addDataSource(props.dataSource)
        .saveAs('export.xlsx')
    } else {
      // @ts-ignore
      //window.open(instance.url, '_blank', 'noreferrer')
    }
  }

  return (
    <div className="pretable">
      <div>Total de {props.total.toString()} ocorrencias</div>
      <div>
        <Select
          allowClear
          style={{ width: '200px' }}
          placeholder="Exportar dados"
          onChange={handleChange}
          options={exportSelect}
        />
      </div>
    </div>
  )
}

export default PreTable
