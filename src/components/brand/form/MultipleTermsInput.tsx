import { Input, Form } from 'antd'

const MultipleTermsInput = () => {
  return (
    <div style={{display: "flex"}}>
      <div className="multiple-terms">
        <div className='multiple-terms-titles'>Termo</div>
        <div>
          <div className="multiple-terms-box">
            <Form.Item name="input01">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input02">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input03">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input04">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input05">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input06">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
        </div>
      </div>
      <div>
        <div className='multiple-terms-titles' style={{textAlign: "center"}}>NÃO</div>
        <div className="multiple-terms-box">
            <Form.Item name="input07">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input08">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input09">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                className="multiple-terms-box-input"
              />
            </Form.Item>
          </div>
      </div>
    </div>
  )
}

export default MultipleTermsInput
