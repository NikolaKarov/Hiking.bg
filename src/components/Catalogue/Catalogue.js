import "./Catalogue.css";
import CatalogueCard from "./CatalogueCard";
import CatalogueSwitch from "./CatalogueSwitch";

const Catalogue = () => {
  return (
    <section className="catagolue">
      <section className="catagolue-header">
        <CatalogueSwitch name="Екопътеки" category="eco" />
        <CatalogueSwitch name="Върхове" category="peak" />
        <CatalogueSwitch name="Хижи" category="hut" />
        <CatalogueSwitch name="Къмпинг" category="camp" />
      </section>
      <section className="catalogue-body">
        <CatalogueCard></CatalogueCard>
        <CatalogueCard></CatalogueCard>
        <CatalogueCard></CatalogueCard>
        <CatalogueCard></CatalogueCard>
        <CatalogueCard></CatalogueCard>
        <CatalogueCard></CatalogueCard>
      </section>
    </section>
  );
};

export default Catalogue;
