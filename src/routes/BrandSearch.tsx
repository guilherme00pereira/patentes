import { useContext } from 'react'
import HeaderSection from '../components/HeaderSection.tsx'
import BrandSearchMenu from '../components/brand/BrandSearchMenu.tsx'
import BrandTable from '../components/brand/BrandTable.tsx'
import { FormActionContext } from '../config/context.tsx'
import Loading from '../components/Loading.tsx'

const BrandSearch = () => {
  const { loading, blank, result, renderTable } = useContext(FormActionContext)

  const renderSection = () => {
    if (blank) {
      return <div></div>
    } else {
      return renderTable ? <BrandTable /> : <div style={{paddingTop: "24px"}}>{result.message}</div>
    }
  }

  return (
    
      <div className="main-container">
        <HeaderSection title="Busca de marcas" />
        <BrandSearchMenu />
        {loading ? <Loading showText={true} /> : renderSection()}
      </div>
    
  )
}

export default BrandSearch
