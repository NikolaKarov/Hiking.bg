import { useEffect, useState } from "react";

import { getPostById } from "../../services/data";
import "./DetailPost.css";

const DetailPost = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(async () => {
    const results = await getPostById(match.params.id);
    setPost(results[0]);
  }, []);

  return (
    <article className="details-card">
      <section className="details-card-image">
        <img className="details-card-img" src={post.image} alt="снимка" />
      </section>
      <section className="details-card-title">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </section>
      <section className="details-card-content">
        <section className="details-card-info">
          <p>Допълнителна информация: {post.moreInfo}</p>
          <p>Категория: {post.category}</p>
          <p>Трудност: {post.difficulty}</p>
          <p>Местоположение: {post.location}</p>
        </section>
        <section className="details-card-actions">
          <section className="details-card-likes">
            <p>
              <i className="fas fa-thumbs-up"></i>
              {`${post.likes}`}
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
