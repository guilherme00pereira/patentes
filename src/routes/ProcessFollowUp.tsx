import { useState } from 'react'
import HeaderSection from '../components/HeaderSection.tsx'
import FollowUpMenu from '../components/followup/FollowUpMenu.tsx'
import { FollowUpContext } from '../config/context.tsx'
import FollowUpTable from '../components/followup/FollowUpTable.tsx'
import Loading from '../components/Loading.tsx'
import Result from '../components/followup/Result.tsx'
import { resultType } from '../config/types.tsx'

const ProcessFollowUp = () => {
  const [blank, setBlank] = useState(true)
  const [renderTable, setRenderTable] = useState(false)
  const [renderResult, setRenderResult] = useState(false)
  const [result, setResult] = useState<resultType>({ success: false, message: ''})
  const [loading, setLoading] = useState(false)

  return (
    <FollowUpContext.Provider
      value={{
        setRenderTable,
        setLoading,
        setBlank,
        setRenderResult,
        setResult,
        result,
      }}
    >
      <div className="main-container">
        <HeaderSection title="Acompanhamento de processos" />
        <FollowUpMenu />
        {blank && <div className="blank"></div>}
        {loading && <Loading />}
        {renderTable && <FollowUpTable />}
        {renderResult && <Result />}
      </div>
    </FollowUpContext.Provider>
  )
}

export default ProcessFollowUp
