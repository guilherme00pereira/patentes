import PageTitle from "../components/PageTitle.tsx";
import BrandSearchMenu from "../components/brand/BrandSearchMenu.tsx";
import BrandTable from "../components/brand/BrandTable.tsx";

const BrandSearch = () => {
  return (
    <div className="main-container">
      <PageTitle title="Busca de Marcas" />
      <BrandSearchMenu />
      <BrandTable />
    </div>
  );
};

export default BrandSearch;