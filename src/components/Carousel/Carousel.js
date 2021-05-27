import "./Carousel.css";
import Image1 from "../.././images/Image1.jpg";
import Image2 from "../../images/Image2.jpg";
import Image3 from "../../images/Image3.jpg";
import Image4 from "../../images/Image4.jpg";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => {
        if (counter === 4) {
          return 1;
        }
        return counter + 1;
      });
    }, 3000);

    return null;
  }, []);

  return (
    <section className="carousel">
      <span className={counter === 1 ? "wide" : ""}>
        <img src={Image1} alt="" />
      </span>
      <span className={counter === 2 ? "wide" : ""}>
        <img src={Image2} alt="" />
      </span>
      <span className={counter === 3 ? "wide" : ""}>
        <img src={Image3} alt="" />
      </span>
      <span className={counter === 4 ? "wide" : ""}>
        <img src={Image4} alt="" />
      </span>
    </section>
  );
};

export default Carousel;
