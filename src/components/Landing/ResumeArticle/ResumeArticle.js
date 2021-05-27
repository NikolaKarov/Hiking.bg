import { Component } from "react";
import "./ResumeArticle.css";

class ResumeArticle extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <article className="resume-article">
        <h2>Hiking.bg - каталог от екопътеки, върхове, хижи и къмпинги.</h2>
        <p>
          Тук можете да изберете следващото място, което да посетите или да публикувате местата, на които вече сте били и са ви харесали, за
          да може повече хора да научат за тях.
        </p>
      </article>
    );
  }
}

export default ResumeArticle;
