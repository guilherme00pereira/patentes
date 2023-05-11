import {useState} from "react";
import PageTitle from "../components/PageTitle.tsx";
import BrandSearchMenu from "../components/brand/BrandSearchMenu.tsx";
import BrandTable from "../components/brand/BrandTable.tsx";
import {BrandContext} from "../config/context.tsx";

const BrandSearch = () => {
    const [renderTable, setRenderTable] = useState(true);
    const [loading, setLoading] = useState(false);

    const renderSection = () => renderTable ? <BrandTable/> : <div>Relatório</div>

    return (
        <BrandContext.Provider value={{setRenderTable, setLoading}}>
            <div className="main-container">
                <PageTitle title="Busca de Marcas"/>
                <BrandSearchMenu/>
                {loading ? <div>Carregando...</div> : renderSection()}
            </div>
        </BrandContext.Provider>
    );
};

export default BrandSearch;