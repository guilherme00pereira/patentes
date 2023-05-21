import { Button, ConfigProvider, Form } from 'antd'
import { useContext } from 'react'
import { FormActionContext } from '../../../config/context.tsx'
import { MdOutlineSearch } from 'react-icons/md'
import { BrandTableData } from '../../../config/types.ts'
import { getGeneralSearch, SearchType } from '../../../lib/apiClient.ts'

const SearchButton = ({ showText, source }: { showText?: boolean; source: string }) => {
  const { setLoading, setBlank, setTableData, setRenderTable } = useContext(FormActionContext)
  const form = Form.useFormInstance()

  const searchSimple = () => {
    const tableData: BrandTableData[] = []
    // fetch('./appleads.json')
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     Object.entries(data.body).forEach((item: any, index: number) => {
    //       tableData.push({
    //         id: index.toString(),
    //         class: item[1].classe_nice_codigo,
    //         process: item[1].processo_numero,
    //         brand: item[1].marca_apresentacao,
    //         presentation: item[1].marca_apresentacao,
    //         situation: item[1].situacao,
    //         name: item[1].nome,
    //         activities: '',
    //         country: item[1].titular_pais,
    //         state: item[1].titular_uf,
    //       })
    //     })
    //     setTableData([...tableData])
    //   })
    form.validateFields().then((params) => {
      getGeneralSearch({ ...params }, SearchType.SIMPLE)
        .then((data) => {
          Object.entries(data.body).forEach((item: any, index: number) => {
            tableData.push({
              id: index.toString(),
              class: item[1].classe_nice_codigo,
              process: item[1].processo_numero,
              brand: item[1].marca_apresentacao,
              presentation: item[1].marca_apresentacao,
              situation: item[1].situacao,
              name: item[1].nome,
              activities: '',
              country: item[1].titular_pais,
              state: item[1].titular_uf,
            })
          })
          setTableData([...tableData])
        })
        .catch((err) => {
          console.log(err)
        }).finally(() => {
          setLoading(false)
          setRenderTable(true)
          setBlank(false)
        })
    }).catch((err) => {
      setLoading(false)
      setRenderTable(false)
      setBlank(true)
        console.log(err)
    })
  }

  const searchRadical = () => {}

  const searchDistance = () => {}

  const searchReport = () => {}

  const searchIa = () => {}

  const submitHandler = () => {
    setRenderTable(false)
    setLoading(true)
    if (source === 'g') {
      searchSimple()
    } else if (source === 'r') {
      searchRadical()
    } else if (source === 'd') {
      searchDistance()
    } else if (source === 'e') {
      searchReport()
    } else if (source === 'i') {
      searchIa()
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
        style={{ width: showText ? '120px' : '40px', padding: showText ? '0 14px' : '10px', marginTop: "32px" }}
      >
        {showText && 'Buscar'}
      </Button>
    </ConfigProvider>
  )
}

export default SearchButton
