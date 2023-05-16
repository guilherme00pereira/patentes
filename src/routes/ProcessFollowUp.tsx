import { useState } from 'react'
import HeaderSection from '../components/HeaderSection.tsx'
import FollowUpMenu from '../components/followup/FollowUpMenu.tsx'
import { FollowUpContext } from '../config/context.tsx'
import FollowUpTable from '../components/followup/FollowUpTable.tsx'
import Loading from "../components/Loading.tsx";

const ProcessFollowUp = () => {
  const [blank, setBlank] = useState(true)
  const [renderTable, setRenderTable] = useState(false)
  const [loading, setLoading] = useState(false)

  const renderSection = () => {
    if (blank) {
      return <div></div>
    } else {
      return renderTable ? <FollowUpTable /> : <div>Relatório</div>
    }
  }

  return (
    <FollowUpContext.Provider value={{ setRenderTable, setLoading, setBlank }}>
      <div className="main-container">
        <HeaderSection title="Acompanhamento de processos" />
        <FollowUpMenu />
        {loading ? <Loading/> : renderSection()}
      </div>
    </FollowUpContext.Provider>
  )
}

export default ProcessFollowUp
