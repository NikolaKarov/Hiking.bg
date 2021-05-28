import "./Create.css";

const Create = () => {
  return (
    <div className="create-form-wrapper">
      <form className="create-form">
        <div>
          <label htmlFor="title">Заглавие:</label>
          <input id="title" type="text" placeholder="заглавие" name="title" />
        </div>
        <div>
          <label htmlFor="description">Описание:</label>
          <textarea name="description" id="description" cols="59" rows="7" placeholder="описание"></textarea>
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
            <option value="volvo">Ниска</option>
            <option value="saab">Средна</option>
            <option value="fiat">Висока</option>
            <option value="audi">Машина</option>
          </select>
        </div>
        <div>
          <label htmlFor="extra-info">Допълнителна информация:</label>
          <textarea name="extra-info" id="extra-info" cols="59" rows="7" placeholder="още информация"></textarea>
        </div>
        <button className="createBtn">Създай</button>
      </form>
    </div>
  );
};

export default Create;
