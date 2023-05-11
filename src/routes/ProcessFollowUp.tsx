import { useState } from 'react'
import PageTitle from '../components/PageTitle.tsx'
import FollowUpMenu from '../components/followup/FollowUpMenu.tsx'
import { FollowUpContext } from '../config/context.tsx'
import FollowUpTable from '../components/followup/FollowUpTable.tsx'

const ProcessFollowUp = () => {
  const [renderTable, setRenderTable] = useState(true)
  const [loading, setLoading] = useState(false)

  return (
    <FollowUpContext.Provider value={{ setRenderTable, setLoading }}>
      <div className="main-container">
        <PageTitle title="Acompanhamento de Processos" />
        <FollowUpMenu />
        {renderTable && <FollowUpTable />}
        {renderTable || <div>Relatório</div>}
      </div>
    </FollowUpContext.Provider>
  )
}

export default ProcessFollowUp
