import {Form, Tabs} from 'antd'
import { followupMenuItems } from "../../config/data.tsx";
import {useContext} from "react";
import {FormActionContext} from "../../config/context.tsx";
import {BrandTableData} from "../../config/types.ts";
import {getFololowUpProcess} from "../../lib/apiClient.ts";
import { useAuth } from '../../hooks/useAuth.tsx';

const FollowUpMenu = () => {
const { setRenderTable, setTableData, setBlank, setRenderResult, setResult, setLoading, showLoadingText } = useContext(FormActionContext)
  const [form] = Form.useForm()
  const auth = useAuth()

  const callApi = () => {
    const tableData: BrandTableData[] = []
    showLoadingText(true)
    form
      .validateFields()
      .then(() => {
        setLoading(true)
        setBlank(false)
        getFololowUpProcess(auth.mail)
          .then((data) => {
            Object.entries(data.body).forEach((item: any, index: number) => {
              tableData.push({
                id: index.toString(),
                process: item[1].processo,
                brand: item[1].marca,
                class: item[1].classe,
                complement: item[1].movimento,
                rpi: "",
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

  const onChange = (key: string) => {
    if(key === '3') {
      callApi()
    } else {
      setRenderTable(false)
      setTableData([])
      setBlank(true)
      setRenderResult(false)
      setResult({success: false, message: ''})
      setLoading(false)
    }
  }

  return (
      <div className="tab-wrapper">
      <Tabs
        defaultActiveKey="1"
        items={followupMenuItems}
        onChange={onChange}
        centered
        tabBarStyle={{ color: '#F2843A' }}
      />
    </div>
  )
}

export default FollowUpMenu
