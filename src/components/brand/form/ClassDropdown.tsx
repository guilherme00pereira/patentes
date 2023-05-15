import { ConfigProvider, Select, Form } from 'antd'
import { selectClassOptions } from '../../../config/data.ts'
import { selectTheme } from '../../../config/theme.ts'

const ClassDropdown = () => {
  const form = Form.useFormInstance()

  const handleChange = (value: string[]) => {
    form.setFieldValue('classe', value)
  }

  return (
    <ConfigProvider theme={selectTheme}>
      <Select
        mode="multiple"
        allowClear
        size='large'
        style={{ width: '200px' }}
        placeholder="selecionar classes"
        onChange={handleChange}
        options={selectClassOptions()}
      />
      </ConfigProvider>
  )
}

export default ClassDropdown
