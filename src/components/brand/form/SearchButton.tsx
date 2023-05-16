import { Button, ConfigProvider, Form } from 'antd'
import { useContext } from 'react'
import { BrandContext } from '../../../config/context.tsx'
import { MdOutlineSearch } from 'react-icons/md'
import { getGeneralSearch } from '../../../lib/apiClient.ts'

const SearchButton = ({ showText, source }: { showText?: boolean; source: string }) => {
  const { setLoading, setBlank } = useContext(BrandContext)
  const form = Form.useFormInstance()

  const searchGeneral = () => {
    form.validateFields().then((params) => {
      getGeneralSearch({ ...params })
        .then((res) => {
          console.log(res.body)
        })
        .catch((err) => {
          console.log(err)
        })
    })
    setLoading(false)
  }

  const submitHandler = () => {
    setBlank(false)
    setLoading(true)
    if (source === 'g') {
      searchGeneral()
    }
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#F2843A' } }}>
      <Button
        type="primary"
        size="large"
        icon={<MdOutlineSearch />}
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
