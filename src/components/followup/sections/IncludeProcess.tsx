import React, {useState, useContext, useEffect} from 'react'
import {Input, Form, Modal, Button, ConfigProvider, Typography} from 'antd'
import {MdOutlineDeleteForever, MdPlaylistAdd} from 'react-icons/md'
import {ButtonProps} from 'antd/es/button/button'
import {FormActionContext} from '../../../config/context'
import {postIncludeProcess, postExcludeProcess} from "../../../lib/apiClient.ts";
import {useAuth} from "../../../hooks/useAuth.tsx";

const {Title} = Typography

const okButtonProps: ButtonProps = {
  icon: <MdOutlineDeleteForever/>,
  style: {direction: 'rtl', boxShadow: 'none', margin: '0px 10px'},
}

const IncludeProcess = () => {
  const {setLoading, setRenderTable, setRenderResult, setResult, showLoadingText} = useContext(FormActionContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [processNumber, setProcessNumber] = useState('')
  const [form] = Form.useForm()
  const auth = useAuth()

  const showModal = () => {
    showLoadingText(false)
    form.validateFields().then(() => {
      setRenderTable(false)
      setLoading(false)
      setIsModalOpen(true)
    })
  }

  const handleOk = () => {
    setIsModalOpen(false)
    setRenderResult(false)
    setRenderTable(false)
    setLoading(true)
    postExcludeProcess(auth.mail, processNumber).then((data) => {
      console.log(data)
      setTimeout(() => {
        setLoading(false)
        setResult({success: true, message: 'Processo excluído com sucesso!'})
        setRenderResult(true)
      }, 3000)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '')
    setProcessNumber(numbers)
  }

  const handleIncludeProcess = () => {
    showLoadingText(false)
    form.validateFields().then(() => {
      postIncludeProcess(auth.mail, processNumber).then((data) => {
        console.log(data)
        setRenderResult(false)
        setRenderTable(false)
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setResult({success: true, message: 'Processo incluído com sucesso!'})
          setRenderResult(true)
        }, 3000)
      })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  useEffect(() => {
    showLoadingText(false)
  }, [])

  return (
    <div className="include-process">
      <div>
        <Form form={form} layout="vertical">
          <Form.Item
            name="incexcprocess"
            label="Incluir/Excluir processo"
            colon={false}
            rules={[{required: true, message: 'Por favor, insira o número do processo'}]}
          >
            <Input
              value={processNumber}
              size="large"
              onChange={handleInputChange}
              placeholder="Insira o número do processo"
              style={{width: '300px'}}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="buttons">
        <ConfigProvider theme={{token: {colorPrimary: '#DC3545'}}}>
          <Button
            type="primary"
            size="large"
            icon={<MdOutlineDeleteForever/>}
            onClick={showModal}
            className="iconic-button"
            style={{width: '200px', fontWeight: 'bold'}}
          >
            Excluir Processo
          </Button>
        </ConfigProvider>
        <ConfigProvider theme={{token: {colorPrimary: '#28A745'}}}>
          <Button
            type="primary"
            size="large"
            icon={<MdPlaylistAdd/>}
            onClick={handleIncludeProcess}
            className="iconic-button"
            style={{width: '200px', fontWeight: 'bold'}}
          >
            Incluir Processo
          </Button>
        </ConfigProvider>
      </div>
      <ConfigProvider theme={{token: {colorPrimary: '#DC3545'}}}>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={okButtonProps}
        >
          <div className="modal-wrapper">
            <Title level={4}>Deseja excluir o processo {processNumber}?</Title>
            <p>Após a exclusão não será possível recuperar estes dados.</p>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  )
}

export default IncludeProcess
