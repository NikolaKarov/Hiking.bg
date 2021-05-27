import "./Landing.css";
import Carousel from "../Carousel";
import Categories from "../Categories";
import ResumeArticle from "./ResumeArticle";

const Landing = () => {
  return (
    <div className="landing-page">
      <Carousel />
      <ResumeArticle />
      <Categories />
    </div>
  );
};

export default Landing;
