import { Input, Form } from 'antd'

const MultipleTermsInput = () => {
  
  return (
    <div style={{display: "flex"}}>
      <div className="multiple-terms">
        <div className='multiple-terms-titles'>Termo</div>
        <div>
          <div className="multiple-terms-box">
            <Form.Item name="and01" rules={[{ required: true, message: 'Preencha o campo' }]}>
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="and02">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="and03">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="and04">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="and05">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
            <span>OU</span>
            <Form.Item name="and06">
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
            <Form.Item name="not01">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="not02">
              <Input
                placeholder="Insira o termo de busca"
                size="large"
                style={window.screen.width < 1281 ? {width: "120px"} : {width: "180px"}}
              />
            </Form.Item>
          </div>
          <div className="multiple-terms-box">
            <Form.Item name="not03">
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
