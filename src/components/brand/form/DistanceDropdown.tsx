import {Select} from "antd";
import type {SelectProps} from 'antd';

const options: SelectProps['options'] = []

for (let i = 0; i <= 5; i++) {
    options.push({
        label: i,
        value: i,
    });
}

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const DistanceDropdown = () => {
    return (
            <Select
                mode="multiple"
                allowClear
                style={{width: '200px'}}
                placeholder="selecionar distancia"
                onChange={handleChange}
                options={options}
            />
    );
};

export default DistanceDropdown;