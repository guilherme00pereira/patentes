import HeaderSection from '../components/HeaderSection.tsx'
import FollowUpMenu from '../components/followup/FollowUpMenu.tsx'
import FollowUpTable from '../components/followup/FollowUpTable.tsx'
import Loading from '../components/Loading.tsx'
import Result from '../components/followup/Result.tsx'
import { useContext } from 'react'
import { FormActionContext } from '../config/context.tsx'

const ProcessFollowUp = () => {
  const { blank, loading, renderTable, renderResult } = useContext(FormActionContext)

  return (
    <div className="main-container">
      <HeaderSection title="Acompanhamento de processos" />
      <FollowUpMenu />
      {blank && <div className="blank"></div>}
      {loading && <Loading />}
      {renderTable && <FollowUpTable />}
      {renderResult && <Result />}
    </div>
  )
}

export default ProcessFollowUp
