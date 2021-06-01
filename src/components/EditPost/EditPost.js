import { useEffect, useState } from "react";

import "./EditPost.css";
import validate from "../../services/validations";
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

    if (validate(data)) {
      await editPost(match.params.id, data);
      history.push(`/details/${match.params.id}`);
    }
  };

  return (
    <div className="edit-form-wrapper">
      <form onSubmit={onSubmitHandler} className="edit-form">
        <div>
          <label htmlFor="title">Заглавие:</label>
          <input id="title" type="text" placeholder="заглавие" defaultValue={post?.title} name="title" />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <textarea
            name="description"
            id="description"
            cols="59"
            rows="7"
            placeholder="описание"
            defaultValue={post?.description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Снимка:</label>
          <input id="image" type="text" placeholder="image url" defaultValue={post?.image} name="image" />
        </div>
        <div>
          <label htmlFor="location">Местоположение:</label>
          <input id="location" type="text" placeholder="локация" defaultValue={post?.location} name="location" />
        </div>
        <div>
          <label htmlFor="difficulty">Трудност:</label>
          <select id="difficulty" name="difficulty">
            <option selected={post?.difficulty == "Ниска"} value="Ниска">
              Ниска
            </option>
            <option selected={post?.difficulty == "Средна"} value="Средна">
              Средна
            </option>
            <option selected={post?.difficulty == "Висока"} value="Висока">
              Висока
            </option>
            <option selected={post?.difficulty == "Машина"} value="Машина">
              Машина
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Категория:</label>
          <select id="category" name="category">
            <option selected={post?.category == "eco"} value="eco">
              Екопътека
            </option>
            <option selected={post?.category == "peak"} value="peak">
              Връх
            </option>
            <option selected={post?.category == "hut"} value="hut">
              Хижа
            </option>
            <option selected={post?.category == "camp"} value="camp">
              Къмпинг
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="extra-info">Допълнителна информация:</label>
          <textarea
            name="extra-info"
            id="extra-info"
            cols="59"
            rows="7"
            placeholder="още информация"
            defaultValue={post?.moreInfo}
          ></textarea>
        </div>
        <button className="editBtn">Редактирай</button>
      </form>
    </div>
  );
};

export default EditPost;
