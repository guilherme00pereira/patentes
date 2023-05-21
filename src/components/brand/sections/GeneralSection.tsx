import ClassDropdown from '../form/ClassDropdown.tsx'
import SituationDropdown from '../form/SituationDropdown.tsx'
import TermInput from '../form/TermInput.tsx'
import { Form } from 'antd'
import React from "react";

const GeneralSection = ({button}: {button: React.ReactNode}) => {
  const [form] = Form.useForm()

  return (
    <div style={{ padding: '20px' }}>
      <Form form={form} layout="inline" requiredMark="optional" style={{alignItems: "flex-start"}}>
        <Form.Item
          name="termo"
          label="Termo"
          colon={false}
          rules={[{ required: true, message: 'Preencha o campo' }]}
        >
          <TermInput placeholder="Insira o termo de busca" />
        </Form.Item>
        <Form.Item name="classe" label="Classe" colon={false} rules={[{ required: true, message: 'Preencha o campo' }]}>
          <ClassDropdown />
        </Form.Item>
        <Form.Item name="situacao" label="Situação" colon={false} rules={[{ required: true, message: 'Preencha o campo' }]}>
          <SituationDropdown />
        </Form.Item>
        <Form.Item>
          {button}
        </Form.Item>
      </Form>
    </div>
  )
}

export default GeneralSection
