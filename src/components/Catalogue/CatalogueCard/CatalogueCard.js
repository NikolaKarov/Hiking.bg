import { Link } from "react-router-dom";

import "./CatalogueCard.css";

const CatalogueCard = () => {
  return (
    <article className="catalogue-card">
      <section class="catalogue-card-image">
        <img class="catalogue-card-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Musala_IMG_1447.jpg" alt="" />
      </section>
      <section class="catalogue-card-content">
        <h3>Връх Мусала</h3>
        <p>
          Мусалà (с предишно име Сталин – от 14 март 1950 г. до 19 януари 1962 г.[1]) е най-високият планински връх в България и на целия
          Балкански полуостров.
        </p>
        <section className="catalogue-card-actions">
          <section className="catalogue-card-likes">
            <p>
              <i class="fas fa-thumbs-up"></i>12
            </p>
            <button class="catalogue-card-button">Харесване</button>
          </section>
          <Link to="/details">
            <button class="catalogue-card-button">{"Виж повече >"}</button>
          </Link>
        </section>
      </section>
    </article>
  );
};

export default CatalogueCard;
