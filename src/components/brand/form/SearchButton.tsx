import { Button, ConfigProvider } from 'antd'
import { useContext } from 'react'
import { BrandContext } from '../../../config/context.tsx'
import { MdOutlineSearch } from 'react-icons/md'
import {BrandTableData} from "../../../config/types.ts";
//import { getGeneralSearch } from '../../../lib/apiClient.ts'

const SearchButton = ({ showText, source }: { showText?: boolean; source: string }) => {
  const { setLoading, setBlank, setTableData } = useContext(BrandContext)
  //const form = Form.useFormInstance()

  const searchGeneral = () => {
    const tableData: BrandTableData[] = []
    fetch('./appleads.json').then((res) => {
        return res.json()
    }).then((data) => {
      Object.entries(data.body).forEach((item: any, index: number) => {
          tableData.push({
            id: index.toString(),
            class: item[1].classe_nice_codigo,
            process: item[1].processo_numero,
            brand: item[1].marca_apresentacao,
            presentation: item[1].marca_apresentacao,
            situation: item[1].situacao,
            name: item[1].nome,
            activities: "",
            country: item[1].titular_pais,
            state: item[1].titular_uf
          })
        })
      console.table(tableData)
      setTableData([...tableData])
    })
    // form.validateFields().then((params) => {
    //   getGeneralSearch({ ...params })
    //     .then((res) => {
    //       console.log(res.body)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // })
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
