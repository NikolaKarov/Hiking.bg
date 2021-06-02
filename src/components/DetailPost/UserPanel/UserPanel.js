import { Link } from "react-router-dom";

import { deletePost } from "../../../services/data";
import "./UserPanel.css";

const UserPanel = (props) => {
  const onDeleteClickHandler = async () => {
    let confirmed = window.confirm("Сигурни ли сте, че искате да изтриете поста?");
    if (confirmed) {
      await deletePost(props.objectId);
      props.history.goBack();
    }
  };

  return (
    <section className="details-card-user-panel">
      <Link to={`/edit/${props.objectId}`}>
        <button className="details-card-button">
          <i className="fas fa-pen"></i>Редактирай
        </button>
      </Link>
      <button className="details-card-button" onClick={onDeleteClickHandler}>
        <i className="fas fa-times"></i>Изтрий
      </button>
    </section>
  );
};

export default UserPanel;
