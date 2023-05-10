import { Select } from "antd";
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [
    { value: '0', label: 'Todos' },
]

for (let i = 1; i <= 45; i++) {
    options.push({
      label: i,
      value: i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

const ClassDropdown = () => {
    return (
        <div>
            <Select
            mode="multiple"
            allowClear
            style={{ width: '200px' }}
            placeholder="selecionar classes"
            onChange={handleChange}
            options={options}
            />
        </div>
    );
};

export default ClassDropdown;