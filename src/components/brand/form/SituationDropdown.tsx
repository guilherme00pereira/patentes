import { Select } from "antd";
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [
    { value: 'td', label: 'Todos' },
    { value: 'pa', label: 'Pedidos Ativos' },
    { value: 'pe', label: 'Pedidos Extintos/Arquivados' },
]

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

const SituationDropdown = () => {
    return (
        <div>
            <Select
            allowClear
            style={{ width: '200px' }}
            placeholder="selecionar situação"
            onChange={handleChange}
            options={options}
            />
        </div>
    );
};

export default SituationDropdown;