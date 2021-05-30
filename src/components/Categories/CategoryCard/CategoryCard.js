import { Component } from "react";
import { Link } from "react-router-dom";

import "./CategoryCard.css";

class CategoryCard extends Component {
  render() {
    return (
      <article className="category-card">
        <p className="category-card-content">{this.props.content}</p>
        <Link to="/catalogue">
          <h3 className="category-card-title">{this.props.title}</h3>
        </Link>
      </article>
    );
  }
}

export default CategoryCard;
