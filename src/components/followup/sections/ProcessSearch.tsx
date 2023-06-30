import React, { useState, useContext, useEffect } from 'react'
import { Input, Form, Button, ConfigProvider } from 'antd'
import { MdOutlineSearch } from 'react-icons/md'
import { FormActionContext } from '../../../config/context.tsx'
import { getSearchProcess } from '../../../lib/apiClient.ts'
import { BrandTableData } from '../../../config/types.ts'

const ProcessSearch = () => {
  const { setLoading, setBlank, showLoadingText, setTableData, setRenderTable } = useContext(FormActionContext)
  const [processNumber, setProcessNumber] = useState('')
  const [form] = Form.useForm()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '')
    setProcessNumber(numbers)
  }

  const submitHandler = () => {
    const tableData: BrandTableData[] = []
    showLoadingText(true)
    form
      .validateFields()
      .then((values) => {
        setLoading(true)
        setBlank(false)
        getSearchProcess(values.searchprocess)
          .then((data) => {
            Object.entries(data.body).forEach((item: any, index: number) => {
              tableData.push({
                id: index.toString(),
                process: item[1].processo,
                brand: item[1].marca,
                class: item[1].classe,
                rpi: item[1].movimento,
                dataRpi: item[1].dt_movimento,
              })
            })
            setTableData([...tableData])
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            setLoading(false)
            setRenderTable(true)
            setBlank(false)
          })
      })
      .catch((err) => {
        setLoading(false)
        setRenderTable(false)
        setBlank(true)
        console.log(err)
      })
  }

  useEffect(() => {
    showLoadingText(true)
  }, [])

  return (
    <div>
      <Form form={form} layout="vertical" className="search-process">
        <Form.Item
          name="searchprocess"
          label="Buscar processo"
          colon={false}
          rules={[{ required: true, message: 'Por favor, insira o número do processo' }]}
        >
          <Input
            value={processNumber}
            size="large"
            onChange={handleInputChange}
            placeholder="Insira o número do processo"
            style={{ width: '300px' }}
          />
        </Form.Item>
        <Form.Item>
          <ConfigProvider theme={{ token: { colorPrimary: '#F2843A' } }}>
            <Button
              type="primary"
              size="large"
              icon={<MdOutlineSearch />}
              onClick={submitHandler}
              style={{ width: '40px', padding: '10px' }}
            />
          </ConfigProvider>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProcessSearch
