import { Input, Form } from 'antd'

const MultipleTermsInput = () => {
  return (
    <div>
      <div>
        <div>
          <Form.Item name="input01">
            <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
          </Form.Item>
          <span>OU</span>
          <Form.Item name="input02">
            <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
          </Form.Item>
        </div>
        <div>
          <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
          <span>OU</span>
          <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
        </div>
        <div>
          <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
          <span>OU</span>
          <Input placeholder="Insira o termo de busca" size="large" style={{ width: '100px' }} />
        </div>
      </div>
    </div>
  )
}

export default MultipleTermsInput
