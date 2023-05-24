import { ConfigProvider, Select, Form } from 'antd'
import type { SelectProps } from 'antd'
import { selectTheme } from '../../../config/theme.ts'

const options: SelectProps['options'] = []

for (let i = 0; i <= 5; i++) {
  options.push({
    label: i,
    value: i,
  })
}

const DistanceDropdown = () => {
  const form = Form.useFormInstance()

  const handleChange = (value: string[]) => {
    form.setFieldValue('distancia', value)
  }

  return (
    <ConfigProvider theme={selectTheme}>
      <Select
        allowClear
        size="large"
        style={{ width: '200px' }}
        placeholder="selecionar distancia"
        onChange={handleChange}
        options={options}
      />
    </ConfigProvider>
  )
}

export default DistanceDropdown
