import "./DetailPost.css";

const DetailPost = () => {
  return (
    <article className="details-card">
      <section className="details-card-image">
        <img className="details-card-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Musala_IMG_1447.jpg" alt="" />
      </section>
      <section className="details-card-title">
        <h3>Връх Мусала</h3>
        <p>
          Мусалà (с предишно име Сталин – от 14 март 1950 г. до 19 януари 1962 г.[1]) е най-високият планински връх в България и на целия
          Балкански полуостров. Надморската височина на връх Мусала е 2925,4 m[2], измерена от равнището на пристанище Варна.
        </p>
      </section>
      <section className="details-card-content">
        <section className="details-card-info">
          <p>
            Допълнителна информация: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facilis nesciunt voluptatibus
            asperiores velit blanditiis?
          </p>
          <p>Трудност: Ниска</p>
          <p>Местоположение: Рила</p>
        </section>
        <section className="details-card-actions">
          <section className="details-card-likes">
            <p>
              <i className="fas fa-thumbs-up"></i>12
            </p>
            <button className="details-card-button">Харесване</button>
          </section>
          <section className="details-card-user-panel">
            <button className="details-card-button">
              <i className="fas fa-pen"></i>Редактирай
            </button>
            <button className="details-card-button">
              <i className="fas fa-times"></i>Изтрий
            </button>
          </section>
        </section>
      </section>
    </article>
  );
};

export default DetailPost;
