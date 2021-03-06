import "./Create.css";
import { createPost } from "../../services/data";
import validate from "../../services/validations";

const Create = ({ history }) => {
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
      await createPost(data);
      history.push("/catalogue");
    }
  };

  return (
    <div className="create-form-wrapper">
      <form onSubmit={onSubmitHandler} className="create-form">
        <div>
          <label htmlFor="title">Заглавие:</label>
          <input id="title" type="text" placeholder="заглавие" name="title" />
        </div>
        <label htmlFor="description">Описание:</label>
        <div>
          <textarea name="description" id="description" rows="7" placeholder="описание"></textarea>
        </div>
        <div>
          <label htmlFor="image">Снимка:</label>
          <input id="image" type="text" placeholder="image url" name="image" />
        </div>
        <div>
          <label htmlFor="location">Местоположение:</label>
          <input id="location" type="text" placeholder="локация" name="location" />
        </div>
        <div>
          <label htmlFor="difficulty">Трудност:</label>
          <select id="difficulty" name="difficulty">
            <option value="Ниска">Ниска</option>
            <option value="Средна">Средна</option>
            <option value="Висока">Висока</option>
            <option value="Машина">Машина</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Категория:</label>
          <select id="category" name="category">
            <option value="eco">Екопътека</option>
            <option value="peak">Връх</option>
            <option value="hut">Хижа</option>
            <option value="camp">Къмпинг</option>
          </select>
        </div>
        <label htmlFor="extra-info">Допълнителна информация:</label>
        <div>
          <textarea name="extra-info" id="extra-info" rows="7" placeholder="още информация"></textarea>
        </div>
        <button className="createBtn">Създай</button>
      </form>
    </div>
  );
};

export default Create;
