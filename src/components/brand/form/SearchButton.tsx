import { Button, ConfigProvider, Form } from 'antd'
import { useContext } from 'react'
import { BrandContext } from '../../../config/context.tsx'
import { MdOutlineSearch } from 'react-icons/md'

const SearchButton = ({ showText }: { showText?: boolean }) => {
  const { setLoading, setBlank } = useContext(BrandContext)
  const form = Form.useFormInstance()

  const submitHandler = () => {
    setBlank(false)
    setLoading(true)
    //setInterval(() => setLoading(false), 5000);
    
    console.table(form.getFieldsValue())
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#F2843A' } }}>
      <Button
        type="primary"
        size="large"
        icon={<MdOutlineSearch/>}
        onClick={submitHandler}
        className={showText ? 'iconic-button' : ''}
        style={{ width: showText ? '120px' : '40px', padding: showText ? '0 14px' : '10px' }}
      >
        {showText && 'Buscar'}
      </Button>
    </ConfigProvider>
  )
}

export default SearchButton
