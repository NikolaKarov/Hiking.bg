import { Component } from "react";
import "./CategoryCard.css";

class CategoryCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <article className="category-card">
        <p className="category-card-content">{this.props.content}</p>
        <h3 className="category-card-title">{this.props.title}</h3>
      </article>
    );
  }
}

export default CategoryCard;
