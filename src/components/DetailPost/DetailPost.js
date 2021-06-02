import { useEffect, useState } from "react";

import "./DetailPost.css";
import { getPostById } from "../../services/data";
import PostLikes from "../PostLikes";
import UserPanel from "./UserPanel";

const DetailPost = ({ match, history }) => {
  const [post, setPost] = useState({});
  const user = sessionStorage.getItem("username");

  useEffect(() => {
    async function fetchData() {
      const results = await getPostById(match.params.id);
      setPost(results[0]);
    }
    fetchData();
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
          {/* <p>Категория: {post.category}</p> */}
          <p>Трудност: {post.difficulty}</p>
          <p>Местоположение: {post.location}</p>
        </section>
        <section className="details-card-actions">
          <PostLikes data={post}></PostLikes>
          {post.username === user ? <UserPanel history={history} objectId={match.params.id} /> : ""}
        </section>
      </section>
    </article>
  );
};

export default DetailPost;
