import React, { useState, useContext } from 'react'
import { Input, Form, Button, ConfigProvider } from 'antd'
import { MdOutlineSearch } from 'react-icons/md'
import {FollowUpContext} from "../../../config/context.tsx";

const ProcessSearch = () => {
  const {setLoading, setBlank} = useContext(FollowUpContext)
  const [processNumber, setProcessNumber] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '')
    console.log(numbers)
    setProcessNumber(numbers)
  }

  const submitHandler = () => {
    setLoading(true)
    setBlank(false)
    console.log('buscar processo')
  }

  return (
    <div>
      <Form layout="vertical" className='search-process'>
        <Form.Item name="searchprocess" label="Buscar processo" colon={false}>
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
