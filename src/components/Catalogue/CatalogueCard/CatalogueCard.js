import { Link } from "react-router-dom";

import "./CatalogueCard.css";
import PostLikes from "../../PostLikes";

const CatalogueCard = (props) => {
  return (
    <article className="catalogue-card">
      <section className="catalogue-card-image">
        <img className="catalogue-card-img" src={props.data.image} alt="снимка" />
      </section>
      <section className="catalogue-card-content">
        <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
        <section className="catalogue-card-actions">
          <PostLikes data={props.data}></PostLikes>
          <Link to={`/details/${props.data.objectId}`}>
            <button className="catalogue-card-button">{"Виж повече >"}</button>
          </Link>
        </section>
      </section>
    </article>
  );
};

export default CatalogueCard;
