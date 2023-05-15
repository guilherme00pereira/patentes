import { ConfigProvider, Input, Form } from 'antd'

const TermInput = ({placeholder}: {placeholder: string}) => {
  const form = Form.useFormInstance()

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ termo: e.target.value })

  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#080C66' } }}>
      <Input
        placeholder={placeholder}
        size="large"
        style={{ width: '300px' }}
        onChange={onChangeHandler}
      />
    </ConfigProvider>
  )
}

export default TermInput
