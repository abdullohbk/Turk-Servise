import "./memnuniyet.scss";
import card from "../../assets/images/Ellipse 5.svg";
import stars from "../../assets/images/stars.png";

function memnuniyet() {
  return (
    <section id="memnuniyet">
      <div className="container">
        <h2>
          Memnuniyetini bildiren <br /> müşterilerimiz
        </h2>

        <div className="cards__wrapper">
          <div className="card">
            <img src={card} alt="smthimg" />
            <h3>Jane Cooper</h3>
            <p className="card__description">The Walt Disney Company</p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat <br /> donec sit morbi tristique massa enim. Consequat
              odio adipiscing est <br /> odio nibh. Nec scelerisque hendrerit in
              eu purus faucibus quam. Quis <br /> commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="smthimg" />
          </div>

          <div className="card">
            <img src={card} alt="smthimg" />
            <h3>Jane Cooper</h3>
            <p className="card__description">The Walt Disney Company</p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat <br /> donec sit morbi tristique massa enim. Consequat
              odio adipiscing est <br /> odio nibh. Nec scelerisque hendrerit in
              eu purus faucibus quam. Quis <br /> commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="smthimg" />
          </div>

          <div className="card">
            <img src={card} alt="smthimg" />
            <h3>Jane Cooper</h3>
            <p className="card__description">The Walt Disney Company</p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat <br /> donec sit morbi tristique massa enim. Consequat
              odio adipiscing est <br /> odio nibh. Nec scelerisque hendrerit in
              eu purus faucibus quam. Quis <br /> commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="smthimg" />
          </div>

          <div className="card">
            <img src={card} alt="smthimg" />
            <h3>Jane Cooper</h3>
            <p className="card__description">The Walt Disney Company</p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat <br /> donec sit morbi tristique massa enim. Consequat
              odio adipiscing est <br /> odio nibh. Nec scelerisque hendrerit in
              eu purus faucibus quam. Quis <br /> commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="smthimg" />
          </div>

          <div className="card">
            <img src={card} alt="smthimg" />
            <h3>Jane Cooper</h3>
            <p className="card__description">The Walt Disney Company</p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
              feugiat <br /> donec sit morbi tristique massa enim. Consequat
              odio adipiscing est <br /> odio nibh. Nec scelerisque hendrerit in
              eu purus faucibus quam. Quis <br /> commodo tortor aliquam tortor
            </p>
            <img src={stars} alt="smthimg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memnuniyet;
