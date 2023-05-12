import { Select } from "antd";
import { useContext } from 'react'
import { BrandContext } from '../../../config/context.tsx'
import { selectOptions } from '../../../config/data.ts'

const SituationDropdown = () => {
    const { data, setData } = useContext(BrandContext)

    const handleChange = (value: string) => {
        setData({ ...data, situation: value  })
      }

    return (
        <div>
            <Select
            allowClear
            style={{ width: '200px' }}
            placeholder="selecionar situação"
            onChange={handleChange}
            options={selectOptions}
            />
        </div>
    );
};

export default SituationDropdown;