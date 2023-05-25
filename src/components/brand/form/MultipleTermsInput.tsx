import { Input, Form } from 'antd'

const MultipleTermsInput = () => {
  
  return (
    <div style={{display: "flex"}}>
      <div className="multiple-terms">
        <div className='multiple-terms-titles'>Termo</div>
        <div>
          <div className="multiple-terms-box">
            <Form.Item name="input01" rules={[{ required: true, message: 'Preencha o campo' }]}>
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input02">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input03">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input04">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input05">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="input06">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
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
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input08">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="input09">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
      </div>
    </div>
  )
}

export default MultipleTermsInput
