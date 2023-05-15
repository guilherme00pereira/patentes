import { Select } from 'antd'
import { exportSelect } from '../config/data.ts'
const DataExporter = () => {

    const handleChange = (value: string) => {
        console.log(value)
    }

    return <Select
        mode="multiple"
        allowClear
        style={{ width: '200px' }}
        placeholder="Exportar dados"
        onChange={handleChange}
        options={exportSelect}
    />
};

export default DataExporter;