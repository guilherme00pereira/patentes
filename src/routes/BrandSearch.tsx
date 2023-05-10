import PageTitle from "../components/PageTitle.tsx";
import BrandSearchMenu from "../components/BrandSearchMenu.tsx";
import BrandTable from "../components/BrandTable.tsx";

const BrandSearch = () => {
  return (
    <div>
      <PageTitle title="Busca de Marcas" />
      <BrandSearchMenu />
      <BrandTable />
    </div>
  );
};

export default BrandSearch;