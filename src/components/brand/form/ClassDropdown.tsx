import { Select } from 'antd'
import { useContext } from 'react'
import { BrandContext } from '../../../config/context.tsx'
import { selectClassOptions } from '../../../config/data.ts'

const ClassDropdown = () => {
  const { data, setData } = useContext(BrandContext)

  const handleChange = (value: string[]) => {
    setData({ ...data, class: value  })
  }

  return (
    <div>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '200px' }}
        placeholder="selecionar classes"
        onChange={handleChange}
        options={selectClassOptions()}
      />
    </div>
  )
}

export default ClassDropdown
