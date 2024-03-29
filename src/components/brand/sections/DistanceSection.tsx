import ClassDropdown from '../form/ClassDropdown.tsx'
import SituationDropdown from '../form/SituationDropdown.tsx'
import TermInput from '../form/TermInput.tsx'
import { Form } from 'antd'
import DistanceDropdown from '../form/DistanceDropdown.tsx'
import SearchButton from '../form/SearchButton.tsx'

const DistanceSection = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Form layout="inline" requiredMark="optional" style={{ alignItems: 'end' }}>
        <Form.Item
          name="termo"
          label="Termo"
          colon={false}
          rules={[{ required: true, message: 'Preencha o campo' }]}
        >
          <TermInput placeholder="Insira o termo de busca" />
        </Form.Item>
        <Form.Item
          name="distancia"
          label="Distancia"
          colon={false}
          rules={[{ required: true, message: 'Selecione ao menos uma opção' }]}
        >
          <DistanceDropdown />
        </Form.Item>
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
          <SearchButton source="d" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default DistanceSection
