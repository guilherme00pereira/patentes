import React, { useState } from 'react'
import { Input, Form, Modal, Button, ConfigProvider, Typography } from 'antd'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography

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
              onChange={handleInputChange}
              placeholder="Insira o numero do processo"
              style={{ width: '300px', height: '40px' }}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="buttons">
        <ConfigProvider theme={{ token: { colorPrimary: '#DC3545' } }}>
          <Button
            type="primary"
            size="large"
            icon={<FontAwesomeIcon icon={faTrashCan} />}
            onClick={showModal}
            className="iconic-button"
            style={{ width: '180px' }}
          >
            Excluir Processo
          </Button>
        </ConfigProvider>
        <ConfigProvider theme={{ token: { colorPrimary: '#28A745' } }}>
          <Button
            type="primary"
            size="large"
            icon={<FontAwesomeIcon icon={faFileCirclePlus} />}
            onClick={handleIncludeProcess}
            className="iconic-button"
            style={{ width: '180px' }}
          >
            Incluir Processo
          </Button>
        </ConfigProvider>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="modal-wrapper">
            <Title level={4}>Deseja excluir o processo {processNumber}?</Title>
          <p>Apos a exclusao nao sera possivel recuperar estes dados.</p>
          <div>

          </div>
        </div>
      </Modal>
    </div>
  )
}

export default IncludeProcess
