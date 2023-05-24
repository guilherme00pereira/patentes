import { Form } from 'antd'
import ClassDropdown from '../form/ClassDropdown.tsx'
import SituationDropdown from '../form/SituationDropdown.tsx'
import MultipleTermsInput from '../form/MultipleTermsInput.tsx'
import SearchButton from '../form/SearchButton.tsx'

const RadicalSection = () => {
  const [form] = Form.useForm()

  return (
    <div style={{ padding: '20px' }}>
      <Form 
        form={form} 
        layout="inline" 
        requiredMark="optional" 
        style={{ alignItems: 'initial' }}
      >
        <MultipleTermsInput />
        <Form.Item
          name="classe"
          label="Classe"
          colon={false}
          rules={[{ required: true, message: 'Selecione ao menos uma opção' }]}
        >
          <ClassDropdown />
        </Form.Item>
        <Form.Item
          name="situacao"
          label="Situação"
          colon={false}
          rules={[{ required: true, message: 'Selecione ao menos uma opção' }]}
        >
          <SituationDropdown />
        </Form.Item>
        <Form.Item>
          <SearchButton showText source="r" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default RadicalSection
