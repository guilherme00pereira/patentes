import { Button, ConfigProvider, Form } from 'antd'
import { useContext } from 'react'
import { FormActionContext } from '../../../config/context.tsx'
import { MdOutlineSearch } from 'react-icons/md'
import { BrandTableData } from '../../../config/types.ts'
import {
  getDistanceSearch,
  getGeneralSearch,
  getRadicalSearch,
  SearchType,
} from '../../../lib/apiClient.ts'

const SearchButton = ({ showText, source }: { showText?: boolean; source: string }) => {
  const { setLoading, setBlank, setTableData, setRenderTable, setResult, setRenderResult } =
    useContext(FormActionContext)
  const form = Form.useFormInstance()

  const searchApi = (type: SearchType) => {
    const tableData: BrandTableData[] = []
    form
      .validateFields()
      .then((params) => {
        let result: any = null
        switch (type) {
          case SearchType.SIMPLE:
            result = getGeneralSearch({ ...params }, type);
            break;
          case SearchType.RADICAL:
            result = getRadicalSearch({ ...params });
            break;
          case SearchType.DISTANCE:
            result = getDistanceSearch({ ...params });
            break;
        }
        if(result) {
        result.then((data: any) => {
            Object.entries(data.body).forEach((item: any, index: number) => {
              tableData.push({
                id: index.toString(),
                class: item[1].classe_nice_codigo,
                process: item[1].processo_numero,
                brand: item[1].nome,
                presentation: item[1].marca_apresentacao,
                situation: item[1].situacao,
                name: item[1].titular_nome_razao_social,
                activities: item[1].atividade,
                country: item[1].titular_pais,
                state: item[1].titular_uf,
              })
            })
            setTableData([...tableData])
          })
          .catch((err: any) => {
            console.log(err)
          })
          .finally(() => {
            setLoading(false)
            setRenderTable(true)
            setBlank(false)
          })} else {
          setLoading(false)
          setRenderTable(false)
          setBlank(false)
          setRenderResult(true)
          setResult({ success: false, message: 'Nao foi possivel retornar dados da api.' })
        }
      })
      .catch((err) => {
        setLoading(false)
        setRenderTable(false)
        setBlank(true)
        console.log(err)
      })
  }



  const searchText = (type: SearchType) => {
    form
      .validateFields()
      .then((params) => {
        getGeneralSearch({ ...params }, type)
          .then((data) => {
            setRenderResult(true)
            setResult({ success: true, message: data.body })
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            setLoading(false)
            setRenderTable(false)
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

  const submitHandler = () => {
    setRenderTable(false)
    setLoading(true)
    if (source === 'g') {
      searchApi(SearchType.SIMPLE)
    } else if (source === 'r') {
      searchApi(SearchType.RADICAL)
    } else if (source === 'd') {
      searchApi(SearchType.DISTANCE)
    } else if (source === 'e') {
      searchText(SearchType.REPORT)
    } else if (source === 'i') {
      searchText(SearchType.IA)
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
        style={{
          width: showText ? '120px' : '40px',
          padding: showText ? '0 14px' : '10px',
          marginTop: '32px',
        }}
      >
        {showText && 'Buscar'}
      </Button>
    </ConfigProvider>
  )
}

export default SearchButton
