import { useState } from 'react'
import HeaderSection from '../components/HeaderSection.tsx'
import BrandSearchMenu from '../components/brand/BrandSearchMenu.tsx'
import BrandTable from '../components/brand/BrandTable.tsx'
import { BrandContext } from '../config/context.tsx'
import Loading from '../components/Loading.tsx'

const BrandSearch = () => {
  const [blank, setBlank] = useState(true)
  const [renderTable, setRenderTable] = useState(true)
  const [loading, setLoading] = useState(false)

  const renderSection = () => {
    if(blank) {
      return <div></div>
    } else {
      return renderTable ? <BrandTable/> : <div>Relatório</div>
    }
  }

  return (
    <BrandContext.Provider value={{ setRenderTable, setLoading, setBlank }}>
      <div className="main-container">
        <HeaderSection title="Busca de marcas" />
        <BrandSearchMenu />
        {loading ? <Loading /> : renderSection()}
      </div>
    </BrandContext.Provider>
  )
}

export default BrandSearch
