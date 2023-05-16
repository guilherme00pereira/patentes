import React, { useState } from 'react'
import { Input, Form, Modal, Button, ConfigProvider, Typography } from 'antd'
import { MdOutlineDeleteForever, MdPlaylistAdd } from 'react-icons/md'
import { ButtonProps } from 'antd/es/button/button'

const { Title } = Typography

const okButtonProps: ButtonProps = {
  icon: <MdOutlineDeleteForever />,
  style: { direction: 'rtl', boxShadow: 'none', margin: '0px 10px' },
}

const IncludeProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [processNumber, setProcessNumber] = useState('')

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '')
    console.log(numbers)
    setProcessNumber(numbers)
  }

  const handleIncludeProcess = () => {
    console.log('Incluir processo')
  }

  return (
    <div className="include-process">
      <div>
        <Form layout="vertical">
          <Form.Item name="incexcprocess" label="Incluir/Excluir processo" colon={false}>
            <Input
              value={processNumber}
              size="large"
              onChange={handleInputChange}
              placeholder="Insira o número do processo"
              style={{ width: '300px' }}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="buttons">
        <ConfigProvider theme={{ token: { colorPrimary: '#DC3545' } }}>
          <Button
            type="primary"
            size="large"
            icon={<MdOutlineDeleteForever />}
            onClick={showModal}
            className="iconic-button"
            style={{ width: '200px', fontWeight: 'bold' }}
          >
            Excluir Processo
          </Button>
        </ConfigProvider>
        <ConfigProvider theme={{ token: { colorPrimary: '#28A745' } }}>
          <Button
            type="primary"
            size="large"
            icon={<MdPlaylistAdd />}
            onClick={handleIncludeProcess}
            className="iconic-button"
            style={{ width: '200px', fontWeight: 'bold' }}
          >
            Incluir Processo
          </Button>
        </ConfigProvider>
      </div>
      <ConfigProvider theme={{ token: { colorPrimary: '#DC3545' } }}>
        <Modal
          title="Basic Modal"
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
