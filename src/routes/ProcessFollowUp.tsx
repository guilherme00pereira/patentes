import { useState } from 'react'
import HeaderSection from '../components/HeaderSection.tsx'
import FollowUpMenu from '../components/followup/FollowUpMenu.tsx'
import { FollowUpContext } from '../config/context.tsx'
import FollowUpTable from '../components/followup/FollowUpTable.tsx'

const ProcessFollowUp = () => {
  const [renderTable, setRenderTable] = useState(false)
  const [loading, setLoading] = useState(false)

    const renderSection = () => renderTable ? <FollowUpTable/> : <div></div>

  return (
    <FollowUpContext.Provider value={{ setRenderTable, setLoading }}>
      <div className="main-container">
        <HeaderSection title="Acompanhamento de processos" />
        <FollowUpMenu />
          {loading ? <div>Carregando...</div> : renderSection()}
      </div>
    </FollowUpContext.Provider>
  )
}

export default ProcessFollowUp
