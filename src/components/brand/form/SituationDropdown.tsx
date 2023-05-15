import { ConfigProvider, Select, Form } from 'antd'
import { selectOptions } from '../../../config/data.ts'
import { selectTheme } from '../../../config/theme.ts'

const SituationDropdown = () => {
  const form = Form.useFormInstance()

  const handleChange = (value: string) => {
    form.setFieldsValue({ situacao: value })
  }

  return (
    <ConfigProvider theme={selectTheme}>
      <Select
        allowClear
        size="large"
        style={{ width: '200px' }}
        placeholder="selecionar situação"
        onChange={handleChange}
        options={selectOptions}
      />
    </ConfigProvider>
  )
}

export default SituationDropdown
