import "./PostLikes.css";
import { likePost } from "../../services/data";
import { useState } from "react";

const PostLikes = (props) => {
  const [likes, setLikes] = useState([]);
  const onClickHandler = async () => {
    const body = props.data;
    const user = sessionStorage.getItem("username");
    if (!body.likes.includes(user)) {
      body.likes.push(user);
      await likePost(body.objectId, { likes: body.likes });
      setLikes(body.likes);
    }
  };

  return (
    <section className="catalogue-card-likes">
      <p>
        <i className="fas fa-thumbs-up"></i>
        {`${props.data.likes?.length}`}
      </p>
      <button className="catalogue-card-button" onClick={onClickHandler}>
        Харесване
      </button>
    </section>
  );
};

export default PostLikes;
