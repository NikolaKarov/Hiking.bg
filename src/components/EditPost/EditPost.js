import { useEffect, useState } from "react";

import "./EditPost.css";
import { getPostById, editPost } from "../../services/data";

const EditPost = ({ history, match }) => {
  const [post, setPost] = useState({});

  useEffect(async () => {
    const results = await getPostById(match.params.id);
    setPost(results[0]);
  }, [post]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");
    const location = formData.get("location");
    const difficulty = formData.get("difficulty");
    const category = formData.get("category");
    const moreInfo = formData.get("extra-info");
    const username = sessionStorage.getItem("username");
    const likes = [];

    const data = {
      title,
      description,
      image,
      location,
      difficulty,
      category,
      moreInfo,
      username,
      likes,
    };

    await editPost(match.params.id, data);
    history.push(`/details/${match.params.id}`);
  };

  return (
    <div className="edit-form-wrapper">
      <form onSubmit={onSubmitHandler} className="edit-form">
        <div>
          <label htmlFor="title">Заглавие:</label>
          <input id="title" type="text" placeholder="заглавие" value={post?.title} name="title" />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <textarea name="description" id="description" cols="59" rows="7" placeholder="описание" value={post?.description}></textarea>
        </div>
        <div>
          <label htmlFor="image">Снимка:</label>
          <input id="image" type="text" placeholder="image url" value={post?.image} name="image" />
        </div>
        <div>
          <label htmlFor="location">Местоположение:</label>
          <input id="location" type="text" placeholder="локация" value={post?.location} name="location" />
        </div>
        <div>
          <label htmlFor="difficulty">Трудност:</label>
          <select id="difficulty" name="difficulty" defaultChecked={post?.difficulty}>
            <option value="Ниска">Ниска</option>
            <option value="Средна">Средна</option>
            <option value="Висока">Висока</option>
            <option value="Машина">Машина</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Категория:</label>
          <select id="category" name="category" defaultChecked={post?.category}>
            <option value="eco">Екопътека</option>
            <option value="peak">Връх</option>
            <option value="hut">Хижа</option>
            <option value="camp">Къмпинг</option>
          </select>
        </div>
        <div>
          <label htmlFor="extra-info">Допълнителна информация:</label>
          <textarea name="extra-info" id="extra-info" cols="59" rows="7" placeholder="още информация" value={post?.moreInfo}></textarea>
        </div>
        <button className="editBtn">Редактирай</button>
      </form>
    </div>
  );
};

export default EditPost;
