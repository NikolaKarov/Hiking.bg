import "./CatalogueSwitch.css";

const CatalogueSwitch = (props) => {
  return (
    <article className="catalogue-header-switch">
      <span>{props.name}</span>
      <input type="checkbox" id={props.category} defaultChecked="true" onClick={props.onClick} />
      <label htmlFor={props.category}>Toggle</label>
    </article>
  );
};

export default CatalogueSwitch;
