import { useEffect, useState } from "react";

import "./DetailPost.css";
import { getPostById, deletePost } from "../../services/data";
import PostLikes from "../PostLikes";

const DetailPost = ({ match, history }) => {
  const [post, setPost] = useState({});
  const user = sessionStorage.getItem("username");

  useEffect(async () => {
    const results = await getPostById(match.params.id);
    setPost(results[0]);
  }, []);

  const onDeleteClickHandler = async () => {
    let confirmed = window.confirm("Сигурни ли сте, че искате да изтриете поста?");
    if (confirmed) {
      await deletePost(match.params.id);
      history.goBack();
    }
  };

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
          {/* <p>Категория: {post.category}</p> */}
          <p>Трудност: {post.difficulty}</p>
          <p>Местоположение: {post.location}</p>
        </section>
        <section className="details-card-actions">
          <PostLikes data={post}></PostLikes>
          {post.username === user ? (
            <section className="details-card-user-panel">
              <button className="details-card-button">
                <i className="fas fa-pen"></i>Редактирай
              </button>
              <button className="details-card-button" onClick={onDeleteClickHandler}>
                <i className="fas fa-times"></i>Изтрий
              </button>
            </section>
          ) : (
            ""
          )}
        </section>
      </section>
    </article>
  );
};

export default DetailPost;
